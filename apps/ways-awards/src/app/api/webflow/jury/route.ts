import { NextResponse } from "next/server";
import {
  WEBFLOW_JURY_COLLECTION_ID,
  fetchWebflowJuryMembers,
  filterJuryMembersByYear,
} from "@/lib/webflow-jury";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedYear = searchParams.get("year");
  const year =
    requestedYear && requestedYear.trim().length > 0
      ? requestedYear
      : (process.env.NEXT_PUBLIC_EDITION ?? null);

  try {
    const members = await fetchWebflowJuryMembers(WEBFLOW_JURY_COLLECTION_ID);
    const filtered = filterJuryMembersByYear(members, year);

    return NextResponse.json({
      collectionId: WEBFLOW_JURY_COLLECTION_ID,
      count: filtered.length,
      members: filtered,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Webflow CMS error";

    return NextResponse.json(
      {
        collectionId: WEBFLOW_JURY_COLLECTION_ID,
        count: 0,
        members: [],
        error: message,
      },
      { status: 502 }
    );
  }
}
