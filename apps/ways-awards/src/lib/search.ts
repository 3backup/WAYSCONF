import { FilterType, stableRandomFromString } from "@waysconf/shared";
import type { ApiProject } from "./api";

const normalizeText = (text: string): string =>
  (text || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .trim();

const normalizeForSearch = (text: string) => normalizeText(text).toLowerCase();

const includesNormalized = (source: string | undefined | null, q: string) => {
  if (!source) return false;
  return normalizeForSearch(source).includes(q);
};

const toVoteCount = (value: unknown): number => {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (typeof value === "string") {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
};

const computeQueryScore = (p: ApiProject, q: string): number => {
  if (includesNormalized(p.name, q)) return 3;
  if (
    includesNormalized(p.excerpt, q) ||
    includesNormalized(p.organisation, q) ||
    includesNormalized(p.clientName, q)
  ) {
    return 2;
  }
  return 0;
};

const compareProjectsByFilterType = (
  a: ApiProject,
  b: ApiProject,
  filter: FilterType,
  randomKeyById?: Record<string, number>
) => {
  switch (filter) {
    case FilterType.BY_VOTES_ASC:
      return toVoteCount(a.votes) - toVoteCount(b.votes);
    case FilterType.BY_VOTES_DESC:
      return toVoteCount(b.votes) - toVoteCount(a.votes);
    case FilterType.AZ:
      return normalizeText(a.name).localeCompare(normalizeText(b.name), undefined, {
        sensitivity: "base",
      });
    case FilterType.ZA:
      return normalizeText(b.name).localeCompare(normalizeText(a.name), undefined, {
        sensitivity: "base",
      });
    case FilterType.RANDOM:
    default: {
      if (randomKeyById) {
        const ar = randomKeyById[a.id] ?? 0;
        const br = randomKeyById[b.id] ?? 0;
        return ar === br ? 0 : ar > br ? 1 : -1;
      }
      return stableRandomFromString(a.id) > stableRandomFromString(b.id) ? 1 : -1;
    }
  }
};

export const searchRankAndSort = (
  projects: ApiProject[],
  query: string,
  filter: FilterType,
  randomKeyById?: Record<string, number>
) => {
  if (!query) return projects;
  const q = normalizeForSearch(query);
  const scored = projects
    .map((p) => ({ project: p, score: computeQueryScore(p, q) }))
    .filter((x) => x.score > 0);
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return compareProjectsByFilterType(a.project, b.project, filter, randomKeyById);
  });
  return scored.map((x) => x.project);
};

const escapeHtml = (input: string): string =>
  input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const highlightQueryHtml = (
  text: string | undefined | null,
  query: string
): string => {
  if (!text) return "";
  if (!query) return escapeHtml(text);
  const original = String(text);
  const q = normalizeForSearch(query);
  if (!q) return escapeHtml(original);
  if (/<[^>]+>/.test(original)) {
    return original;
  }

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
    out += `<span class="search-highlight">${escapeHtml(
      original.slice(r.start, r.end)
    )}</span>`;
    cursor = r.end;
  }
  out += escapeHtml(original.slice(cursor));
  return out;
};
