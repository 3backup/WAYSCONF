import { FilterType, type Project } from "../types";

export function getCategoryList(project: Project): string {
  const categories = project.categories || [];
  return categories.length
    ? categories
        .map((c) => c?.name)
        .filter((name) => name !== "No Code")
        .join(", ")
    : "No category";
}

export function filterByCategory(
  projects: Project[],
  filter: string | null
): Project[] {
  return projects.filter((item) =>
    filter === null ? true : item.categories?.some((c) => c.id === filter)
  );
}

export function stableRandomFromString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash +=
      (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0) / 4294967295;
}

function normalizeText(text: string): string {
  return (text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]+/g, "")
    .trim();
}

function toVotes(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = parseInt(value, 10);
    if (!Number.isNaN(parsed)) return parsed;
  }
  return 0;
}

export function filterByType(
  projects: Project[],
  filter: FilterType,
  randomKeyById?: Record<string, number>
): Project[] {
  const sorted = [...projects];
  switch (filter) {
    case FilterType.BY_VOTES_ASC:
      sorted.sort((a, b) => toVotes(a.votes) - toVotes(b.votes));
      break;
    case FilterType.BY_VOTES_DESC:
      sorted.sort((a, b) => toVotes(b.votes) - toVotes(a.votes));
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
