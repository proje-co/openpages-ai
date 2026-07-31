import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const Body = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  workspaceName: z.string().min(1).default("My workspace"),
});

export async function POST(req: Request) {
  try {
    const parsed = Body.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid signup data" },
        { status: 400 },
      );
    }
    const body = parsed.data;
    const existing = await prisma.user.findUnique({
      where: { email: body.email.toLowerCase() },
    });
    if (existing) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }
    const passwordHash = await bcrypt.hash(body.password, 10);
    const slugBase = body.workspaceName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 32);
    const slug = `${slugBase || "workspace"}-${Math.random().toString(36).slice(2, 6)}`;

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email.toLowerCase(),
        passwordHash,
        memberships: {
          create: {
            role: "OWNER",
            workspace: {
              create: {
                name: body.workspaceName,
                slug,
                plan: "free",
                aiCredits: 200,
              },
            },
          },
        },
      },
    });

    await prisma.plan.upsert({
      where: { code: "free" },
      create: {
        code: "free",
        name: "Free",
        monthlyPrice: 0,
        aiCredits: 200,
        features: { sites: 1, customDomain: false },
      },
      update: {},
    });
    await prisma.plan.upsert({
      where: { code: "pro" },
      create: {
        code: "pro",
        name: "Pro",
        monthlyPrice: 4900,
        aiCredits: 2000,
        features: { sites: 10, customDomain: true, github: true },
      },
      update: {},
    });
    await prisma.plan.upsert({
      where: { code: "scale" },
      create: {
        code: "scale",
        name: "Scale",
        monthlyPrice: 14900,
        aiCredits: 10000,
        features: { sites: 100, customDomain: true, github: true, audit: true },
      },
      update: {},
    });

    return NextResponse.json({ id: user.id, email: user.email });
  } catch (error) {
    console.error("signup failed", error);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
