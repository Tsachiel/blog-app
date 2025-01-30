import { NextRequest, NextResponse } from "next/server";
import { getClaps, updateClaps } from "@/lib/clapsService";

export async function GET() {
  const claps = await getClaps();
  return NextResponse.json(claps);
}

export async function POST(req: NextRequest) {
  try {
    const { postId } = await req.json();
    if (!postId) return NextResponse.json({ error: "Missing postId" }, { status: 400 });

    const claps = await getClaps();
    const newClaps = (claps[postId] || 0) + 1;

    await updateClaps(postId, newClaps);
    return NextResponse.json({ postId, claps: newClaps });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update claps" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { postId, newClaps } = await req.json();
    if (!postId || typeof newClaps !== "number") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const updatedClaps = Math.max(0, newClaps);
    await updateClaps(postId, updatedClaps);
    return NextResponse.json({ postId, claps: updatedClaps });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update claps" }, { status: 500 });
  }
}
