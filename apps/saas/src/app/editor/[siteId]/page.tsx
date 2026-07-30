import { EditorShell } from "./EditorShell";

export default async function EditorPage({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) {
  const { siteId } = await params;
  return <EditorShell siteId={siteId} />;
}
