import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { prisma } from "./prisma";

export async function requireUser() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) throw new Error("UNAUTHORIZED");
  return { session, userId };
}

export async function requireWorkspaceMember(workspaceId: string) {
  const { userId, session } = await requireUser();
  const membership = await prisma.membership.findUnique({
    where: {
      workspaceId_userId: { workspaceId, userId },
    },
  });
  if (!membership) throw new Error("FORBIDDEN");
  return { userId, session, membership };
}

export async function getDefaultWorkspace(userId: string) {
  const membership = await prisma.membership.findFirst({
    where: { userId },
    include: { workspace: true },
    orderBy: { workspace: { createdAt: "asc" } },
  });
  return membership?.workspace ?? null;
}
