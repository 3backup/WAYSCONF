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

export function normalizeJuryYear(
  value: string | number | null | undefined
): string | null {
  if (value == null) {
    return null;
  }

  const text = String(value).trim();
  if (!text) {
    return null;
  }

  if (text.toLowerCase() === "all") {
    return "all";
  }

  const match = text.match(/\b(20\d{2})\b/);
  return match ? match[1] : text;
}

export function parseJuryEdition(
  value: string | number | null | undefined
): number | null {
  const normalized = normalizeJuryYear(value);
  if (!normalized || normalized === "all") {
    return null;
  }

  const parsed = Number.parseInt(normalized, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

export function filterJuryMembersByYear(
  members: JuryMember[],
  year: string | number | null | undefined
): JuryMember[] {
  const normalized = normalizeJuryYear(year);
  if (!normalized || normalized === "all") {
    return members;
  }

  return members.filter(
    (member) => normalizeJuryYear(member.year ?? null) === normalized
  );
}
