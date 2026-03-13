import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
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

  const { data: voteRows, error: voteError } = await supabase
    .from("vote")
    .select("*")
    .limit(5);

  const { data: juryPersonRows, error: juryPersonError } = await supabase
    .from("jury_person")
    .select("*")
    .limit(5);

  const {
    data: juryPersonEditionRows,
    error: juryPersonEditionError,
  } = await supabase
    .from("jury_person_edition")
    .select("*")
    .limit(5);

  const admin = getSupabaseAdmin();
  const { data: voteRowsAdmin, error: voteErrorAdmin } = admin
    ? await admin.from("vote").select("*").limit(5)
    : { data: null, error: null };

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

  out.vote = {
    rowCount: Array.isArray(voteRows) ? voteRows.length : 0,
    error: voteError
      ? { message: voteError.message, details: voteError.details }
      : null,
    sampleKeys:
      Array.isArray(voteRows) && voteRows[0]
        ? Object.keys(voteRows[0] as object)
        : [],
  };

  out.voteAdmin = {
    configured: Boolean(admin),
    rowCount: Array.isArray(voteRowsAdmin) ? voteRowsAdmin.length : 0,
    error: voteErrorAdmin
      ? { message: voteErrorAdmin.message, details: voteErrorAdmin.details }
      : null,
  };

  out.juryPerson = {
    rowCount: Array.isArray(juryPersonRows) ? juryPersonRows.length : 0,
    error: juryPersonError
      ? { message: juryPersonError.message, details: juryPersonError.details }
      : null,
    sampleKeys:
      Array.isArray(juryPersonRows) && juryPersonRows[0]
        ? Object.keys(juryPersonRows[0] as object)
        : [],
  };

  out.juryPersonEdition = {
    rowCount: Array.isArray(juryPersonEditionRows)
      ? juryPersonEditionRows.length
      : 0,
    error: juryPersonEditionError
      ? {
          message: juryPersonEditionError.message,
          details: juryPersonEditionError.details,
        }
      : null,
    sampleKeys:
      Array.isArray(juryPersonEditionRows) && juryPersonEditionRows[0]
        ? Object.keys(juryPersonEditionRows[0] as object)
        : [],
  };

  return NextResponse.json(out);
}
