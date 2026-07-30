import { creditCost } from "@openpages/media";
import { prisma } from "./prisma";

export async function spendCredits(input: {
  workspaceId: string;
  userId?: string;
  kind: "image" | "video" | "chat" | "tool";
  reason: string;
  meta?: Record<string, unknown>;
}) {
  const cost = creditCost(input.kind);
  const workspace = await prisma.workspace.findUniqueOrThrow({
    where: { id: input.workspaceId },
  });
  if (workspace.aiCredits < cost) {
    throw new Error("INSUFFICIENT_CREDITS");
  }
  const updated = await prisma.workspace.update({
    where: { id: input.workspaceId },
    data: { aiCredits: { decrement: cost } },
  });
  await prisma.aiCreditLedger.create({
    data: {
      workspaceId: input.workspaceId,
      userId: input.userId,
      delta: -cost,
      reason: input.reason,
      meta: (input.meta ?? {}) as object,
    },
  });
  return { remaining: updated.aiCredits, spent: cost };
}

export async function grantCredits(input: {
  workspaceId: string;
  amount: number;
  reason: string;
}) {
  const updated = await prisma.workspace.update({
    where: { id: input.workspaceId },
    data: { aiCredits: { increment: input.amount } },
  });
  await prisma.aiCreditLedger.create({
    data: {
      workspaceId: input.workspaceId,
      delta: input.amount,
      reason: input.reason,
    },
  });
  return updated.aiCredits;
}
