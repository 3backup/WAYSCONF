import { getSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

/**
 * Dev-only: GET /api/debug-supabase
 * Returns raw Supabase state so you can see why projects might be empty.
 * Disabled in production.
 */
export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Only in development" }, { status: 404 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const configured = Boolean(url && key);
  const edition = parseInt(process.env.NEXT_PUBLIC_EDITION ?? "2025", 10);

  const out: Record<string, unknown> = {
    configured,
    edition,
    env: {
      hasUrl: Boolean(url),
      hasKey: Boolean(key),
      urlPrefix: url ? `${url.slice(0, 30)}...` : null,
    },
  };

  if (!configured) {
    return NextResponse.json(out);
  }

  const supabase = getSupabase();
  if (!supabase) {
    out.supabaseClient = "null";
    return NextResponse.json(out);
  }

  const { data: projectRows, error: projectError } = await supabase
    .from("project")
    .select("*")
    .limit(5);

  const { data: categoryRows, error: categoryError } = await supabase
    .from("category")
    .select("id, name")
    .limit(5);

  const { data: linkRows, error: linkError } = await supabase
    .from("project_categories_category")
    .select("*")
    .limit(5);

  out.project = {
    rowCount: Array.isArray(projectRows) ? projectRows.length : 0,
    error: projectError
      ? { message: projectError.message, details: projectError.details }
      : null,
    sampleKeys:
      Array.isArray(projectRows) && projectRows[0]
        ? Object.keys(projectRows[0] as object)
        : [],
    sampleRow:
      Array.isArray(projectRows) && projectRows[0]
        ? (projectRows[0] as Record<string, unknown>)
        : null,
  };

  out.category = {
    rowCount: Array.isArray(categoryRows) ? categoryRows.length : 0,
    error: categoryError
      ? { message: categoryError.message, details: categoryError.details }
      : null,
  };

  out.link = {
    rowCount: Array.isArray(linkRows) ? linkRows.length : 0,
    error: linkError
      ? { message: linkError.message, details: linkError.details }
      : null,
  };

  return NextResponse.json(out);
}
