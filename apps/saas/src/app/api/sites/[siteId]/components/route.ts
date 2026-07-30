import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

const Body = z.object({
  name: z.string(),
  data: z.unknown(),
});

export async function POST(
  req: Request,
  ctx: { params: Promise<{ siteId: string }> },
) {
  try {
    const { userId } = await requireUser();
    const { siteId } = await ctx.params;
    const site = await prisma.site.findFirst({
      where: {
        id: siteId,
        workspace: { memberships: { some: { userId } } },
      },
    });
    if (!site) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    const body = Body.parse(await req.json());
    const component = await prisma.savedComponent.create({
      data: {
        siteId,
        name: body.name,
        data: body.data as object,
      },
    });
    return NextResponse.json({ component });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}
