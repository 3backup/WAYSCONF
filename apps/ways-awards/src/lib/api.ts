import {
  API_PATHS,
  ResponseCodes,
  sanitizeShallowStrings,
  stripWrappingQuotes,
} from "@waysconf/shared";
import { isSupabaseConfigured } from "./supabase";
import {
  getProjectsFromSupabase,
  getProjectsFromSupabaseByEdition,
  getCategoriesFromSupabase,
  getProjectBySlugFromSupabase,
} from "./supabase-data";

/**
 * When NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env,
 * projects and categories are fetched directly from Supabase (no Nest API required).
 * Vote/verify still go to the API when used.
 */

export const EDITION = parseInt(
  process.env.NEXT_PUBLIC_EDITION ?? "2025",
  10
);

/** Base URL for the awards API (only used when not using Supabase). */
function getBaseUrl(): string {
  const env = process.env.NEXT_PUBLIC_API_URL;
  if (typeof window !== "undefined") {
    const base = env ?? "";
    return base && !base.endsWith("/api") ? `${base.replace(/\/$/, "")}/api` : base || "/api";
  }
  const origin = env ?? "http://localhost:3003";
  const base = origin.endsWith("/api") ? origin : `${origin.replace(/\/$/, "")}/api`;
  return base;
}

export type ApiCategory = {
  id: string;
  name: string;
  externalId?: string;
};
export type ApiProject = {
  id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string | null;
  categories?: ApiCategory[];
  linkToCaseStudy: string | null;
  caseStudy: string;
  thumbnailUrl?: string | null;
  thumbnailUrlSecondary?: string | null;
  thumbnailUrlThird?: string | null;
  organisation?: string | null;
  clientName?: string | null;
  clientTimePeriod?: string | null;
  toolsAndFramework?: string | null;
  team?: string | null;
  services?: string | null;
  link?: string | null;
  demoLink?: string | null;
  materialsLink?: string | null;
  targetAudience?: string | null;
  vibeCode?: string | null;
  noCode?: string | null;
  projectOutcomes?: string | null;
  type?: string | null;
  casestudyLink?: string | null;
  linkRich?: string | null;
  linkRichText?: string | null;
  whyYou?: string | null;
  votes?: number | string | null;
  [key: string]: unknown;
};

function normalizeProjectKeys(project: ApiProject): ApiProject {
  if (!project || typeof project !== "object") return project;
  const out: Record<string, unknown> = { ...project };
  for (const [key, value] of Object.entries(project)) {
    if (!key.includes("_")) continue;
    const camelKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    if (!(camelKey in out)) {
      out[camelKey] = value;
    }
  }
  return out as ApiProject;
}

function sanitizeProject(p: ApiProject): ApiProject {
  const normalized = normalizeProjectKeys(p);
  const s = sanitizeShallowStrings(normalized) as ApiProject;
  s.name = stripWrappingQuotes(s.name ?? "");
  s.slug = stripWrappingQuotes(String(s.slug ?? ""));
  s.organisation =
    s.organisation != null ? stripWrappingQuotes(String(s.organisation)) : null;
  s.clientName =
    s.clientName != null ? stripWrappingQuotes(String(s.clientName)) : null;
  s.categories = (s.categories ?? []).map((c) => ({
    ...c,
    name: stripWrappingQuotes(c?.name ?? ""),
  }));
  return s;
}

export async function getProjects(): Promise<ApiProject[]> {
  return getProjectsByEdition(EDITION);
}

export async function getProjectsByEdition(edition: number): Promise<ApiProject[]> {
  const useSupabase = isSupabaseConfigured();
  if (process.env.NODE_ENV === "development") {
    console.log(
      "[WaysAwards] getProjects: Supabase configured?",
      useSupabase,
      "EDITION:",
      edition
    );
  }
  if (useSupabase) {
    const data =
      edition === EDITION
        ? await getProjectsFromSupabase()
        : await getProjectsFromSupabaseByEdition(edition);
    const list = (data ?? []).map(sanitizeProject);
    if (process.env.NODE_ENV === "development") {
      console.log("[WaysAwards] getProjects: using Supabase, count:", list.length);
    }
    if (list.length === 0 && process.env.NEXT_PUBLIC_API_URL) {
      const fallback = await fetchProjectsFromApi(edition);
      if (process.env.NODE_ENV === "development" && fallback.length > 0) {
        console.log("[WaysAwards] getProjects: fallback to API, count:", fallback.length);
      }
      return fallback;
    }
    return list;
  }
  return fetchProjectsFromApi(edition);
}

async function fetchProjectsFromApi(edition = EDITION): Promise<ApiProject[]> {
  const base = getBaseUrl();
  const res = await fetch(`${base}${API_PATHS.projectByYear(edition)}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as ApiProject[];
  return (data ?? []).map(sanitizeProject);
}

export async function getCategories(): Promise<ApiCategory[]> {
  if (isSupabaseConfigured()) {
    const data = await getCategoriesFromSupabase();
    const list = (data ?? []).map((c) => ({
      ...c,
      name: stripWrappingQuotes(c?.name ?? ""),
    }));
    if (process.env.NODE_ENV === "development") {
      console.log("[WaysAwards] getCategories: using Supabase, count:", list.length);
    }
    if (list.length === 0 && process.env.NEXT_PUBLIC_API_URL) {
      const fallback = await fetchCategoriesFromApi();
      if (process.env.NODE_ENV === "development" && fallback.length > 0) {
        console.log("[WaysAwards] getCategories: fallback to API, count:", fallback.length);
      }
      return fallback;
    }
    return list;
  }
  return fetchCategoriesFromApi();
}

async function fetchCategoriesFromApi(): Promise<ApiCategory[]> {
  const base = getBaseUrl();
  const res = await fetch(`${base}${API_PATHS.categoriesByYear(EDITION)}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as ApiCategory[];
  return (data ?? []).map((c) => ({
    ...c,
    name: stripWrappingQuotes(c?.name ?? ""),
  }));
}

export async function getProjectBySlug(
  slug: string
): Promise<ApiProject | null> {
  if (isSupabaseConfigured()) {
    const data = await getProjectBySlugFromSupabase(slug);
    return data ? sanitizeProject(data) : null;
  }
  const base = getBaseUrl();
  const res = await fetch(
    `${base}${API_PATHS.projectBySlug(slug)}?edition=${EDITION}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  const data = (await res.json()) as ApiProject;
  return data ? sanitizeProject(data) : null;
}

export async function verifyVote(
  hash: string,
  projectId: string
): Promise<boolean> {
  const base = getBaseUrl();
  const res = await fetch(
    `${base}${API_PATHS.voteVerify(hash, projectId)}`,
    { method: "GET" }
  );
  if (!res.ok) return false;
  const data = (await res.json()) as { status: string };
  return data?.status === ResponseCodes.SUCCESS;
}

export type VotePayload = {
  projectId: string;
  email: string;
  marketing?: boolean;
};

export async function submitVote(payload: VotePayload): Promise<{
  ok: boolean;
  status?: string;
  message?: string;
}> {
  const base = getBaseUrl();
  const res = await fetch(`${base}${API_PATHS.vote()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await res.json().catch(() => ({}))) as {
    status?: string;
    message?: string;
  };
  return {
    ok: res.ok && data?.status === ResponseCodes.SUCCESS,
    status: data?.status,
    message: data?.message,
  };
}
