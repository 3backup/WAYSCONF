const WEBFLOW_API_BASE = "https://api.webflow.com/v2";

export const WEBFLOW_JURY_COLLECTION_ID = "6846a22a95d3c778d528d015";

export type JuryMember = {
  id: string;
  slug: string;
  name: string;
  role?: string;
  company?: string;
  bio?: string;
  year?: string;
  image?: string;
  profileUrl?: string;
};

type WebflowCollectionItem = {
  id?: string;
  slug?: string;
  fieldData?: Record<string, unknown>;
};

type WebflowCollectionResponse = {
  items?: WebflowCollectionItem[];
};

type WebflowCollectionField = {
  slug?: string;
  type?: string;
  validations?: {
    collectionId?: string;
  } | null;
};

type WebflowCollectionMeta = {
  id?: string;
  fields?: WebflowCollectionField[];
};

const NAME_KEYS = [
  "name",
  "full-name",
  "person-name",
  "jury-name",
  "speaker-name",
  "title",
];

const ROLE_KEYS = [
  "role",
  "job-title",
  "position",
  "positoin",
  "job-position",
  "title-2",
  "subtitle",
  "function",
];

const COMPANY_KEYS = [
  "company",
  "company-name",
  "organization",
  "organisation",
  "brand",
  "workplace",
];

const BIO_KEYS = [
  "bio",
  "description",
  "about",
  "short-bio",
  "intro",
  "summary",
];

const IMAGE_KEYS = [
  "image",
  "photo",
  "avatar",
  "headshot",
  "profile-image",
  "profile-photo",
  "thumbnail",
  "picture",
  "portrait",
];

const LINK_KEYS = [
  "linkedin",
  "linkedin-url",
  "profile-url",
  "profile-link",
  "website",
  "url",
];

const YEAR_KEYS = [
  "year",
  "edition-year",
  "event-year",
  "jury-year",
  "edition",
  "season",
];

function asString(value: unknown): string | undefined {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }

  if (typeof value === "number") {
    return String(value);
  }

  return undefined;
}

function asUrl(value: unknown): string | undefined {
  if (typeof value === "string") {
    const candidate = value.trim();
    if (!candidate) {
      return undefined;
    }

    if (/^https?:\/\//i.test(candidate)) {
      return candidate;
    }

    if (/^[\w.-]+\.[a-z]{2,}/i.test(candidate)) {
      return `https://${candidate}`;
    }
  }

  if (value && typeof value === "object") {
    const maybeUrl = (value as { url?: unknown }).url;
    return asUrl(maybeUrl);
  }

  return undefined;
}

function pickText(
  fields: Record<string, unknown>,
  keys: readonly string[]
): string | undefined {
  for (const key of keys) {
    const text = asString(fields[key]);
    if (text) {
      return text;
    }
  }

  return undefined;
}

function pickUrl(
  fields: Record<string, unknown>,
  keys: readonly string[]
): string | undefined {
  for (const key of keys) {
    const url = asUrl(fields[key]);
    if (url) {
      return url;
    }
  }

  return undefined;
}

function pickByNamePattern(
  fields: Record<string, unknown>,
  include: readonly string[],
  resolver: (value: unknown) => string | undefined
): string | undefined {
  for (const [key, value] of Object.entries(fields)) {
    const loweredKey = key.toLowerCase();
    if (!include.some((fragment) => loweredKey.includes(fragment))) {
      continue;
    }

    const resolved = resolver(value);
    if (resolved) {
      return resolved;
    }
  }

  return undefined;
}

function extractYear(fields: Record<string, unknown>): string | undefined {
  const directYear = pickText(fields, YEAR_KEYS);
  if (directYear) {
    const match = directYear.match(/20\d{2}/);
    return match ? match[0] : directYear;
  }

  for (const value of Object.values(fields)) {
    const text = asString(value);
    if (!text) {
      continue;
    }

    const match = text.match(/\b(20\d{2})\b/);
    if (match) {
      return match[1];
    }
  }

  return undefined;
}

function findYearFieldSlug(meta: WebflowCollectionMeta): string | undefined {
  const fields = Array.isArray(meta.fields) ? meta.fields : [];

  const explicit = fields.find((field) =>
    ["year", "edition-year", "event-year", "jury-year"].includes(
      field.slug?.toLowerCase() ?? ""
    )
  );
  if (explicit?.slug) {
    return explicit.slug;
  }

  const inferred = fields.find(
    (field) =>
      (field.type?.toLowerCase() === "multireference" ||
        field.type?.toLowerCase() === "reference") &&
      (field.slug?.toLowerCase().includes("year") ?? false)
  );

  return inferred?.slug;
}

function findYearCollectionId(meta: WebflowCollectionMeta): string | undefined {
  const yearSlug = findYearFieldSlug(meta);
  if (!yearSlug) {
    return undefined;
  }

  const fields = Array.isArray(meta.fields) ? meta.fields : [];
  const yearField = fields.find((field) => field.slug === yearSlug);
  return yearField?.validations?.collectionId;
}

function buildYearResolver(
  yearFieldSlug: string | undefined,
  yearMap: Map<string, string>
) {
  return (fields: Record<string, unknown>): string | undefined => {
    if (!yearFieldSlug) {
      return extractYear(fields);
    }

    const rawYear = fields[yearFieldSlug];

    if (Array.isArray(rawYear)) {
      for (const entry of rawYear) {
        const refId = asString(entry);
        if (!refId) {
          continue;
        }

        const mapped = yearMap.get(refId);
        if (!mapped) {
          continue;
        }

        const yearMatch = mapped.match(/20\d{2}/);
        if (yearMatch) {
          return yearMatch[0];
        }
      }
    }

    const directYear = asString(rawYear);
    if (directYear) {
      const match = directYear.match(/20\d{2}/);
      return match ? match[0] : directYear;
    }

    return extractYear(fields);
  };
}

function mapJuryItem(
  item: WebflowCollectionItem,
  resolveYear: (fields: Record<string, unknown>) => string | undefined
): JuryMember | null {
  const fields = item.fieldData ?? {};

  const name =
    pickText(fields, NAME_KEYS) ??
    pickByNamePattern(fields, ["name"], asString) ??
    pickByNamePattern(fields, ["title"], asString);

  if (!name) {
    return null;
  }

  const role =
    pickText(fields, ROLE_KEYS) ??
    pickByNamePattern(fields, ["role", "position", "title"], asString);

  const company =
    pickText(fields, COMPANY_KEYS) ??
    pickByNamePattern(fields, ["company", "organization", "organisation"], asString);

  const bio =
    pickText(fields, BIO_KEYS) ??
    pickByNamePattern(fields, ["bio", "about", "description", "summary"], asString);

  const image =
    pickUrl(fields, IMAGE_KEYS) ??
    pickByNamePattern(fields, ["image", "photo", "avatar", "headshot", "thumbnail"], asUrl);

  const profileUrl =
    pickUrl(fields, LINK_KEYS) ??
    pickByNamePattern(fields, ["linkedin", "website", "profile", "url"], asUrl);

  const slug = pickText(fields, ["slug"]) ?? item.slug ?? item.id ?? name.toLowerCase();
  const year = resolveYear(fields);

  return {
    id: item.id ?? slug,
    slug,
    name,
    role,
    company,
    bio,
    year,
    image,
    profileUrl,
  };
}

function normalizeYear(value: string | null): string | null {
  if (!value) {
    return null;
  }

  if (value.toLowerCase() === "all") {
    return "all";
  }

  const match = value.match(/20\d{2}/);
  return match ? match[0] : value;
}

export async function fetchWebflowJuryMembers(
  collectionId: string = WEBFLOW_JURY_COLLECTION_ID
): Promise<JuryMember[]> {
  const token = process.env.WEBFLOW_CMS_API_TOKEN ?? process.env.WEBFLOW_SITE_API_TOKEN;
  if (!token) {
    throw new Error(
      "Missing Webflow API token. Set WEBFLOW_CMS_API_TOKEN (or WEBFLOW_SITE_API_TOKEN)."
    );
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "accept-version": "1.0.0",
  };

  const collectionMetaResponse = await fetch(`${WEBFLOW_API_BASE}/collections/${collectionId}`, {
    headers: {
      ...headers,
    },
    next: { revalidate: 300 },
  });

  if (!collectionMetaResponse.ok) {
    const errorText = await collectionMetaResponse.text();
    throw new Error(
      `Webflow CMS collection metadata request failed (${collectionMetaResponse.status}): ${errorText}`
    );
  }

  const collectionMeta = (await collectionMetaResponse.json()) as WebflowCollectionMeta;

  const itemsResponse = await fetch(
    `${WEBFLOW_API_BASE}/collections/${collectionId}/items/live?limit=100`,
    {
      headers: {
        ...headers,
      },
      next: { revalidate: 300 },
    }
  );

  if (!itemsResponse.ok) {
    const errorText = await itemsResponse.text();
    throw new Error(`Webflow CMS request failed (${itemsResponse.status}): ${errorText}`);
  }

  const payload = (await itemsResponse.json()) as WebflowCollectionResponse;
  const items = Array.isArray(payload.items) ? payload.items : [];

  const yearFieldSlug = findYearFieldSlug(collectionMeta);
  const yearCollectionId = findYearCollectionId(collectionMeta);
  const yearMap = new Map<string, string>();

  if (yearCollectionId) {
    const yearCollectionResponse = await fetch(
      `${WEBFLOW_API_BASE}/collections/${yearCollectionId}/items/live?limit=100`,
      {
        headers: {
          ...headers,
        },
        next: { revalidate: 300 },
      }
    );

    if (yearCollectionResponse.ok) {
      const yearPayload = (await yearCollectionResponse.json()) as WebflowCollectionResponse;
      const yearItems = Array.isArray(yearPayload.items) ? yearPayload.items : [];

      for (const yearItem of yearItems) {
        const id = yearItem.id;
        const fieldData = yearItem.fieldData ?? {};
        const name = asString(fieldData.name) ?? asString(fieldData.slug);
        if (id && name) {
          yearMap.set(id, name);
        }
      }
    }
  }

  const resolveYear = buildYearResolver(yearFieldSlug, yearMap);

  return items
    .map((item) => mapJuryItem(item, resolveYear))
    .filter((item): item is JuryMember => Boolean(item))
    .sort((a, b) => {
      const yearA = Number(a.year ?? 0);
      const yearB = Number(b.year ?? 0);
      if (yearA !== yearB) {
        return yearB - yearA;
      }
      return a.name.localeCompare(b.name);
    });
}

export function filterJuryMembersByYear(
  members: JuryMember[],
  year: string | null
): JuryMember[] {
  const normalized = normalizeYear(year);
  if (!normalized || normalized === "all") {
    return members;
  }

  return members.filter((member) => normalizeYear(member.year ?? null) === normalized);
}
