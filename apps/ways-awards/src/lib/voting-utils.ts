import type { VotingProject, VotingCategory } from "./voting-types";
import { FilterType } from "./voting-types";

export function getCategoryList(project: VotingProject): string {
  const categories = project.categories || [];
  return categories.length
    ? categories
        .map((c) => c?.name)
        .filter((name) => name !== "No Code")
        .join(", ")
    : "No category";
}

export function filterByCategory(
  projects: VotingProject[],
  filter: VotingCategory["id"] | null
): VotingProject[] {
  return projects.filter((item) =>
    filter === null ? true : item.categories?.some((c) => c.id === filter)
  );
}

export function stableRandomFromString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0) / 4294967295;
}

function normalizeText(text: string): string {
  return (text || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .trim();
}

export function filterByType(
  projects: VotingProject[],
  filter: FilterType,
  randomKeyById?: Record<string, number>
): VotingProject[] {
  const sorted = [...projects];
  switch (filter) {
    case FilterType.BY_VOTES_ASC:
      sorted.sort((a, b) => (a.votes ?? 0) - (b.votes ?? 0));
      break;
    case FilterType.BY_VOTES_DESC:
      sorted.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));
      break;
    case FilterType.AZ:
      sorted.sort((a, b) =>
        normalizeText(a.name).localeCompare(normalizeText(b.name), undefined, {
          sensitivity: "base",
        })
      );
      break;
    case FilterType.ZA:
      sorted.sort((a, b) =>
        normalizeText(b.name).localeCompare(normalizeText(a.name), undefined, {
          sensitivity: "base",
        })
      );
      break;
    case FilterType.RANDOM:
      if (randomKeyById) {
        sorted.sort((a, b) => {
          const ar = randomKeyById[a.id] ?? 0;
          const br = randomKeyById[b.id] ?? 0;
          return ar === br ? 0 : ar > br ? 1 : -1;
        });
      } else {
        sorted.sort((a, b) =>
          stableRandomFromString(a.id) > stableRandomFromString(b.id) ? 1 : -1
        );
      }
      break;
  }
  return sorted;
}

const normalizeForSearch = (text: string) => normalizeText(text).toLowerCase();

function includesNormalized(
  source: string | undefined | null,
  q: string
): boolean {
  if (!source) return false;
  return normalizeForSearch(source).includes(q);
}

function computeQueryScore(p: VotingProject, q: string): number {
  if (includesNormalized(p.name, q)) return 3;
  if (
    includesNormalized(p.excerpt ?? null, q) ||
    includesNormalized(p.organisation ?? null, q) ||
    includesNormalized(p.clientName ?? null, q)
  )
    return 2;
  return 0;
}

export function compareProjectsByFilterType(
  a: VotingProject,
  b: VotingProject,
  filter: FilterType,
  randomKeyById?: Record<string, number>
): number {
  switch (filter) {
    case FilterType.BY_VOTES_ASC:
      return (a.votes ?? 0) - (b.votes ?? 0);
    case FilterType.BY_VOTES_DESC:
      return (b.votes ?? 0) - (a.votes ?? 0);
    case FilterType.AZ:
      return normalizeText(a.name).localeCompare(
        normalizeText(b.name),
        undefined,
        { sensitivity: "base" }
      );
    case FilterType.ZA:
      return normalizeText(b.name).localeCompare(
        normalizeText(a.name),
        undefined,
        { sensitivity: "base" }
      );
    case FilterType.RANDOM: {
      if (randomKeyById) {
        const ar = randomKeyById[a.id] ?? 0;
        const br = randomKeyById[b.id] ?? 0;
        return ar === br ? 0 : ar > br ? 1 : -1;
      }
      const ar = stableRandomFromString(a.id);
      const br = stableRandomFromString(b.id);
      return ar === br ? 0 : ar > br ? 1 : -1;
    }
  }
}

export function searchRankAndSort(
  projects: VotingProject[],
  query: string,
  filter: FilterType,
  randomKeyById?: Record<string, number>
): VotingProject[] {
  if (!query) return projects;
  const q = normalizeForSearch(query);
  const scored = projects
    .map((p) => ({ project: p, score: computeQueryScore(p, q) }))
    .filter((x) => x.score > 0);
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return compareProjectsByFilterType(
      a.project,
      b.project,
      filter,
      randomKeyById
    );
  });
  return scored.map((x) => x.project);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function highlightQueryHtml(
  text: string | undefined | null,
  query: string
): string {
  if (!text) return "";
  if (!query) return escapeHtml(text);
  const original = String(text);
  const q = normalizeForSearch(query);
  if (!q) return escapeHtml(original);
  if (/<[^>]+>/.test(original)) return original;
  const lower = normalizeForSearch(original);
  const ranges: Array<{ start: number; end: number }> = [];
  let index = 0;
  while (index < lower.length) {
    const found = lower.indexOf(q, index);
    if (found === -1) break;
    ranges.push({ start: found, end: found + q.length });
    index = found + q.length;
  }
  if (!ranges.length) return escapeHtml(original);
  let out = "";
  let cursor = 0;
  for (const r of ranges) {
    out += escapeHtml(original.slice(cursor, r.start));
    out += `<span class="search-highlight">${escapeHtml(original.slice(r.start, r.end))}</span>`;
    cursor = r.end;
  }
  out += escapeHtml(original.slice(cursor));
  return out;
}
