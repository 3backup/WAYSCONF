import { getSupabase, getSupabaseAdmin } from "./supabase";
import {
  type JuryMember,
  normalizeJuryYear,
  parseJuryEdition,
} from "./jury";

type GenericRow = Record<string, unknown>;

function row<T extends GenericRow>(input: T): GenericRow {
  const out: GenericRow = {};
  for (const [key, value] of Object.entries(input)) {
    const camelKey = key.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
    out[camelKey] = value;
  }
  return out;
}

function asString(value: unknown): string | undefined {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  return undefined;
}

function isPublished(value: unknown): boolean {
  return value !== false;
}

async function selectAllRows(table: "jury_person" | "jury_person_edition") {
  const primary = getSupabaseAdmin();
  const fallback = getSupabase();
  const errors: string[] = [];

  for (const client of [primary, fallback]) {
    if (!client) {
      continue;
    }

    const { data, error } = await client.from(table).select("*");
    if (!error) {
      return (data ?? []) as GenericRow[];
    }

    errors.push(error.message);
  }

  if (!primary && !fallback) {
    throw new Error(
      "Missing Supabase configuration. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  throw new Error(
    `Unable to load ${table}: ${errors.join(" | ") || "unknown Supabase error"}`
  );
}

export async function getJuryMembersFromSupabase(
  requestedYear: string | number | null | undefined
): Promise<JuryMember[]> {
  const [rawPeople, rawAssignments] = await Promise.all([
    selectAllRows("jury_person"),
    selectAllRows("jury_person_edition"),
  ]);

  const peopleById = new Map<string, GenericRow>();
  for (const rawPerson of rawPeople) {
    const person = row(rawPerson);
    const personId = asString(person.id);
    const name = asString(person.name);

    if (!personId || !name || !isPublished(person.isPublished)) {
      continue;
    }

    peopleById.set(personId, person);
  }

  const normalizedYear = normalizeJuryYear(requestedYear);
  const members = rawAssignments
    .map((rawAssignment) => {
      const assignment = row(rawAssignment);
      if (!isPublished(assignment.isPublished)) {
        return null;
      }

      const personId = asString(assignment.juryPersonId);
      if (!personId) {
        return null;
      }

      const person = peopleById.get(personId);
      if (!person) {
        return null;
      }

      const editionInput =
        asString(assignment.edition) ?? asString(assignment.year);
      const edition = parseJuryEdition(editionInput);
      const year = normalizeJuryYear(edition ?? editionInput);

      if (normalizedYear && normalizedYear !== "all" && normalizedYear !== year) {
        return null;
      }

      const member: JuryMember = {
        id:
          asString(assignment.id) ??
          `${personId}:${year ?? "unknown"}`,
        slug: asString(person.slug) ?? personId,
        name: asString(person.name) ?? "Unnamed jury member",
        role: asString(assignment.role) ?? asString(person.role),
        company: asString(assignment.company) ?? asString(person.company),
        bio: asString(assignment.bio) ?? asString(person.bio),
        year: year ?? undefined,
        image: asString(assignment.imageUrl) ?? asString(person.imageUrl),
        profileUrl:
          asString(assignment.profileUrl) ?? asString(person.profileUrl),
      };

      const sortOrderValue = asString(assignment.sortOrder);
      const parsedSortOrder =
        sortOrderValue != null ? Number.parseInt(sortOrderValue, 10) : Number.NaN;
      const sortOrder = Number.isNaN(parsedSortOrder) ? 0 : parsedSortOrder;

      return {
        edition: edition ?? 0,
        member,
        sortOrder,
      };
    })
    .filter(
      (
        item
      ): item is { edition: number; member: JuryMember; sortOrder: number } =>
        Boolean(item)
    );

  members.sort((left, right) => {
    if (!normalizedYear || normalizedYear === "all") {
      if (left.edition !== right.edition) {
        return right.edition - left.edition;
      }
    }

    if (left.sortOrder !== right.sortOrder) {
      return left.sortOrder - right.sortOrder;
    }

    return left.member.name.localeCompare(right.member.name);
  });

  return members.map(({ member }) => member);
}
