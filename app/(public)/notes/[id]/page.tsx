import { getNote } from "@/app/(actions)/notes-actions";
import PublicPageTitle from "@/components/public/page-title";
import ReactMarkdown from "react-markdown";

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await getNote(id);

  console.log("note", note);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <PublicPageTitle className="mb-2">{note.title}</PublicPageTitle>
      <hr className="mb-6 border border-neutral-700" />
      <ReactMarkdown>{note.content}</ReactMarkdown>
    </div>
  );
}
