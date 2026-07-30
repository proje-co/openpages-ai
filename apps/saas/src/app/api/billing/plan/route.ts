import { NextResponse } from "next/server";
import { z } from "zod";
import { grantCredits } from "@/lib/credits";
import { prisma } from "@/lib/prisma";
import { getDefaultWorkspace, requireUser } from "@/lib/session";

export async function GET() {
  const plans = await prisma.plan.findMany({ orderBy: { monthlyPrice: "asc" } });
  if (!plans.length) {
    return NextResponse.json({
      plans: [
        { code: "free", name: "Free", monthlyPrice: 0, aiCredits: 200 },
        { code: "pro", name: "Pro", monthlyPrice: 4900, aiCredits: 2000 },
        { code: "scale", name: "Scale", monthlyPrice: 14900, aiCredits: 10000 },
      ],
    });
  }
  return NextResponse.json({ plans });
}

const Body = z.object({
  planCode: z.enum(["free", "pro", "scale"]),
});

export async function POST(req: Request) {
  try {
    const { userId } = await requireUser();
    const workspace = await getDefaultWorkspace(userId);
    if (!workspace) return NextResponse.json({ error: "NO_WORKSPACE" }, { status: 400 });
    const body = Body.parse(await req.json());
    const credits = body.planCode === "free" ? 200 : body.planCode === "pro" ? 2000 : 10000;
    const updated = await prisma.workspace.update({
      where: { id: workspace.id },
      data: { plan: body.planCode, aiCredits: credits },
    });
    await grantCredits({
      workspaceId: workspace.id,
      amount: 0,
      reason: `plan_set_${body.planCode}`,
    });
    return NextResponse.json({
      workspace: updated,
      note: "Stripe/Polar webhook hooks live here in production (Open SaaS pattern).",
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}
