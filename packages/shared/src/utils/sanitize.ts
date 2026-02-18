/**
 * Remove matching leading/trailing quotes (including curly quotes) and trim whitespace.
 */
export function stripWrappingQuotes(input: string | undefined | null): string {
  if (!input) return "";
  let value = String(input).trim();
  if (value.length === 0) return value;
  const leadingQuotes = new Set(['"', "'", "\u201C", "\u201D", "\u2018", "\u2019", "\u00AB", "\u00BB"]);
  while (value.length > 0 && leadingQuotes.has(value.charAt(0))) {
    value = value.slice(1);
  }
  while (value.length > 0 && leadingQuotes.has(value.charAt(value.length - 1))) {
    value = value.slice(0, -1);
  }
  return value.trim();
}

const HTML_FIELDS = new Set(["excerpt", "description", "caseStudy", "whyYou"]);

/**
 * Apply stripWrappingQuotes to all string fields of a shallow object.
 * Skips HTML content fields (excerpt, description, caseStudy, whyYou).
 */
export function sanitizeShallowStrings<T extends Record<string, unknown>>(obj: T): T {
  if (!obj || typeof obj !== "object") return obj;
  const out = (Array.isArray(obj) ? [] : {}) as T;
  for (const key of Object.keys(obj)) {
    const val = (obj as Record<string, unknown>)[key];
    if (typeof val === "string") {
      (out as Record<string, unknown>)[key] = HTML_FIELDS.has(key) ? val : stripWrappingQuotes(val);
    } else if (Array.isArray(val)) {
      (out as Record<string, unknown>)[key] = val;
    } else {
      (out as Record<string, unknown>)[key] = val;
    }
  }
  return out;
}

/**
 * Decode basic HTML entities.
 */
export function decodeHtmlEntities(input: string): string {
  if (!input) return "";
  return input
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

/**
 * Sanitize rich HTML: remove nbsp, zero-width chars, empty paragraphs.
 */
export function sanitizeRichHtml(input: string): string {
  if (!input) return "";
  let html = decodeHtmlEntities(input);
  html = html.replace(/&nbsp;/gi, " ").replace(/\u00A0/g, " ");
  html = html.replace(/[\u200B-\u200D\uFEFF]/g, "");
  html = html.replace(/<br\s*\/?>(\s|\n|\r)*/gi, "");
  html = html.replace(/<p[^>]*>\s*<\/p>/g, "");
  html = html.replace(/>\s+</g, "><");
  html = html.replace(/\s{2,}/g, " ");
  return html.trim();
}
