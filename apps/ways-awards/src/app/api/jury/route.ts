import { NextResponse } from "next/server";
import { normalizeJuryYear } from "@/lib/jury";
import { getJuryMembersFromSupabase } from "@/lib/supabase-jury";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedYear = searchParams.get("year");
  const year =
    requestedYear && requestedYear.trim().length > 0
      ? requestedYear
      : (process.env.NEXT_PUBLIC_EDITION ?? null);

  try {
    const members = await getJuryMembersFromSupabase(year);

    return NextResponse.json({
      count: members.length,
      members,
      source: "supabase",
      year: normalizeJuryYear(year),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown Supabase jury error";

    return NextResponse.json(
      {
        count: 0,
        members: [],
        source: "supabase",
        year: normalizeJuryYear(year),
        error: message,
      },
      { status: 502 }
    );
  }
}
