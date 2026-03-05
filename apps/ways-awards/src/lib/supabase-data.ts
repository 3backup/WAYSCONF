import { getSupabase } from "./supabase";
import type { ApiProject, ApiCategory } from "./api";
import { stripWrappingQuotes } from "@waysconf/shared";

const EDITION = parseInt(
  process.env.NEXT_PUBLIC_EDITION ?? "2025",
  10
);

/** Normalize DB row: Supabase/PostgREST may return snake_case or camelCase */
function row<T extends Record<string, unknown>>(r: T): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(r)) {
    const camel = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = v;
  }
  return out;
}

/** Resolve edition from row (supports "edition" or "year" column) */
function getEditionFromRow(r: Record<string, unknown>): number {
  const raw = r.edition ?? r.year;
  if (typeof raw === "number" && !Number.isNaN(raw)) return raw;
  const n = parseInt(String(raw ?? ""), 10);
  return Number.isNaN(n) ? 0 : n;
}

/** Check if project is visible (not archived, not draft) */
function isProjectVisible(r: Record<string, unknown>): boolean {
  const archived = r.isArchived ?? r.is_archived;
  const draft = r.isDraft ?? r.is_draft;
  if (archived === true) return false;
  if (draft === true) return false;
  return true;
}

export async function getProjectsFromSupabase(): Promise<ApiProject[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data: rawProjects, error: projectsError } = await supabase
    .from("project")
    .select("*");

  if (projectsError) {
    if (process.env.NODE_ENV === "development") {
      console.error("[Supabase] getProjects error:", projectsError.message, projectsError.details);
    }
    return [];
  }
  const allRows = (rawProjects ?? []) as Record<string, unknown>[];
  if (process.env.NODE_ENV === "development") {
    console.log("[Supabase] project table rows:", allRows.length);
  }
  const projects = allRows
    .map((p) => row(p))
    .filter(
      (r) =>
        getEditionFromRow(r) === EDITION && isProjectVisible(r)
    )
    .sort((a, b) =>
      String(a.name ?? "").localeCompare(String(b.name ?? ""))
    );
  if (process.env.NODE_ENV === "development" && allRows.length > 0 && projects.length === 0) {
    const sample = row(allRows[0] as Record<string, unknown>);
    console.warn(
      "[Supabase] 0 projects after filter. EDITION=",
      EDITION,
      "Sample row edition/year:",
      sample.edition ?? sample.year,
      "isArchived:",
      sample.isArchived ?? sample.is_archived,
      "isDraft:",
      sample.isDraft ?? sample.is_draft
    );
  }
  if (!projects.length) return [];

  const projectIds = projects.map((p) => String(p.id));
  const { data: links } = await supabase
    .from("project_categories_category")
    .select("*");
  const linkRows = (links ?? []) as Record<string, unknown>[];
  const linksFiltered = linkRows.filter((l) =>
    projectIds.includes(
      String((l as Record<string, unknown>).projectId ?? (l as Record<string, unknown>).project_id ?? "")
    )
  );

  const categoryIds = [
    ...new Set(
      linksFiltered.map((l) =>
        String((l as Record<string, unknown>).categoryId ?? (l as Record<string, unknown>).category_id ?? "")
      )
    ),
  ].filter(Boolean);
  const { data: categories } =
    categoryIds.length > 0
      ? await supabase.from("category").select("*").in("id", categoryIds)
      : { data: [] };

  const categoryMap = new Map<string, ApiCategory>();
  for (const c of categories ?? []) {
    const r = row(c as Record<string, unknown>);
    categoryMap.set(String(r.id), {
      id: String(r.id),
      name: stripWrappingQuotes(String(r.name ?? "")),
      externalId: r.externalId != null ? String(r.externalId) : undefined,
    });
  }

  const linkMap = new Map<string, string[]>();
  for (const l of linksFiltered) {
    const pid = String((l as Record<string, unknown>).projectId ?? (l as Record<string, unknown>).project_id);
    const cid = String((l as Record<string, unknown>).categoryId ?? (l as Record<string, unknown>).category_id);
    if (!linkMap.has(pid)) linkMap.set(pid, []);
    linkMap.get(pid)!.push(cid);
  }

  return projects.map((p) => {
    const r = p as Record<string, unknown>;
    const catIds = linkMap.get(String(r.id)) ?? [];
    const categoriesList = catIds
      .map((id) => categoryMap.get(id))
      .filter(Boolean) as ApiCategory[];
    const linkToCaseStudy =
      r.linkToCaseStudy ?? r.linkToCaseStudyUrl ?? r.linkToCaseStudyPlain ?? null;
    const caseStudyLink =
      r.casestudyLink ?? r.caseStudyLink ?? r.caseStudyUrl ?? null;
    return {
      id: String(r.id),
      name: stripWrappingQuotes(String(r.name ?? "")),
      slug: stripWrappingQuotes(String(r.slug ?? "")),
      description: String(r.description ?? ""),
      excerpt: r.excerpt != null ? String(r.excerpt) : null,
      linkToCaseStudy: linkToCaseStudy != null ? String(linkToCaseStudy) : null,
      caseStudy: String(r.caseStudy ?? ""),
      whyYou: r.whyYou != null ? String(r.whyYou) : "",
      linkRich: r.linkRich != null ? String(r.linkRich) : "",
      linkRichText: r.linkRichText != null ? String(r.linkRichText) : "",
      thumbnailUrl: r.thumbnailUrl != null ? String(r.thumbnailUrl) : null,
      thumbnailUrlSecondary:
        r.thumbnailUrlSecondary != null
          ? String(r.thumbnailUrlSecondary)
          : null,
      thumbnailUrlThird:
        r.thumbnailUrlThird != null ? String(r.thumbnailUrlThird) : null,
      organisation:
        r.organisation != null ? stripWrappingQuotes(String(r.organisation)) : null,
      clientName:
        r.clientName != null ? stripWrappingQuotes(String(r.clientName)) : null,
      clientTimePeriod:
        r.clientTimePeriod != null ? String(r.clientTimePeriod) : null,
      toolsAndFramework:
        r.toolsAndFramework != null ? String(r.toolsAndFramework) : null,
      team: r.team != null ? String(r.team) : null,
      services: r.services != null ? String(r.services) : null,
      link: r.link != null ? String(r.link) : null,
      demoLink: r.demoLink != null ? String(r.demoLink) : null,
      materialsLink:
        r.materialsLink != null ? String(r.materialsLink) : null,
      targetAudience:
        r.targetAudience != null ? String(r.targetAudience) : null,
      vibeCode: r.vibeCode != null ? String(r.vibeCode) : null,
      noCode: r.noCode != null ? String(r.noCode) : null,
      projectOutcomes:
        r.projectOutcomes != null ? String(r.projectOutcomes) : null,
      type: r.type != null ? String(r.type) : null,
      casestudyLink:
        caseStudyLink != null ? String(caseStudyLink) : null,
      categories: categoriesList,
    } as ApiProject;
  });
}

export async function getCategoriesFromSupabase(): Promise<ApiCategory[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data: rawProjects } = await supabase.from("project").select("*");
  const allRows = (rawProjects ?? []) as Record<string, unknown>[];
  const visibleProjectRows = allRows
    .map((p) => row(p))
    .filter(
      (r) =>
        getEditionFromRow(r) === EDITION && isProjectVisible(r)
    );
  const projectIds = visibleProjectRows.map((r) => String(r.id));
  if (!projectIds.length) return [];

  const { data: links, error: linksError } = await supabase
    .from("project_categories_category")
    .select("*");

  if (linksError && process.env.NODE_ENV === "development") {
    console.error("[Supabase] getCategories links error:", linksError.message);
  }
  const linkRows = (links ?? []) as Record<string, unknown>[];
  const linksFiltered = linkRows.filter((l) =>
    projectIds.includes(
      String((l as Record<string, unknown>).projectId ?? (l as Record<string, unknown>).project_id ?? "")
    )
  );
  const categoryIds = [
    ...new Set(
      linksFiltered.map((l) =>
        String((l as Record<string, unknown>).categoryId ?? (l as Record<string, unknown>).category_id ?? "")
      )
    ),
  ].filter(Boolean);
  if (categoryIds.length === 0) return [];

  const { data: categories, error } = await supabase
    .from("category")
    .select("*")
    .in("id", categoryIds);

  if (error || !categories?.length) return [];

  return (categories as Record<string, unknown>[]).map((c) => {
    const r = row(c);
    return {
      id: String(r.id),
      name: stripWrappingQuotes(String(r.name ?? "")),
      externalId: r.externalId != null ? String(r.externalId) : undefined,
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export async function getProjectBySlugFromSupabase(
  slug: string
): Promise<ApiProject | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data: projects, error } = await supabase
    .from("project")
    .select("*")
    .eq("slug", slug)
    .limit(1);

  if (error || !projects?.[0]) return null;

  const p = row(projects[0] as Record<string, unknown>);
  if (getEditionFromRow(p) !== EDITION || !isProjectVisible(p)) return null;

  const projectId = String(p.id);
  const { data: allLinks } = await supabase
    .from("project_categories_category")
    .select("*");
  const linkRows = (allLinks ?? []) as Record<string, unknown>[];
  const linksForProject = linkRows.filter(
    (l) =>
      String(l.projectId ?? l.project_id ?? "") === projectId
  );
  const categoryIds = linksForProject
    .map((l) => String(l.categoryId ?? l.category_id ?? ""))
    .filter(Boolean);
  const { data: categories } =
    categoryIds.length > 0
      ? await supabase.from("category").select("*").in("id", categoryIds)
      : { data: [] };

  const r = p as Record<string, unknown>;
  const categoriesList = (categories ?? []).map((c) => {
    const cr = row(c as Record<string, unknown>);
    return {
      id: String(cr.id),
      name: stripWrappingQuotes(String(cr.name ?? "")),
      externalId: cr.externalId != null ? String(cr.externalId) : undefined,
    };
  });
  const linkToCaseStudy =
    r.linkToCaseStudy ?? r.linkToCaseStudyUrl ?? r.linkToCaseStudyPlain ?? null;

  const caseStudyLink =
    r.casestudyLink ?? r.caseStudyLink ?? r.caseStudyUrl ?? null;
  return {
    id: String(r.id),
    name: stripWrappingQuotes(String(r.name ?? "")),
    slug: stripWrappingQuotes(String(r.slug ?? "")),
    description: String(r.description ?? ""),
    excerpt: r.excerpt != null ? String(r.excerpt) : null,
    linkToCaseStudy: linkToCaseStudy != null ? String(linkToCaseStudy) : null,
    caseStudy: String(r.caseStudy ?? ""),
    whyYou: r.whyYou != null ? String(r.whyYou) : "",
    linkRich: r.linkRich != null ? String(r.linkRich) : "",
    linkRichText: r.linkRichText != null ? String(r.linkRichText) : "",
    thumbnailUrl: r.thumbnailUrl != null ? String(r.thumbnailUrl) : null,
    thumbnailUrlSecondary:
      r.thumbnailUrlSecondary != null ? String(r.thumbnailUrlSecondary) : null,
    thumbnailUrlThird:
      r.thumbnailUrlThird != null ? String(r.thumbnailUrlThird) : null,
    organisation:
      r.organisation != null ? stripWrappingQuotes(String(r.organisation)) : null,
    clientName:
      r.clientName != null ? stripWrappingQuotes(String(r.clientName)) : null,
    clientTimePeriod:
      r.clientTimePeriod != null ? String(r.clientTimePeriod) : null,
    toolsAndFramework:
      r.toolsAndFramework != null ? String(r.toolsAndFramework) : null,
    team: r.team != null ? String(r.team) : null,
    services: r.services != null ? String(r.services) : null,
    link: r.link != null ? String(r.link) : null,
    demoLink: r.demoLink != null ? String(r.demoLink) : null,
    materialsLink:
      r.materialsLink != null ? String(r.materialsLink) : null,
    targetAudience:
      r.targetAudience != null ? String(r.targetAudience) : null,
    vibeCode: r.vibeCode != null ? String(r.vibeCode) : null,
    noCode: r.noCode != null ? String(r.noCode) : null,
    projectOutcomes:
      r.projectOutcomes != null ? String(r.projectOutcomes) : null,
    type: r.type != null ? String(r.type) : null,
    casestudyLink:
      caseStudyLink != null ? String(caseStudyLink) : null,
    categories: categoriesList,
  } as ApiProject;
}
