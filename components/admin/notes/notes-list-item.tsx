import LinkButton from "@/components/common/link-button";
import { Pencil } from "lucide-react";
import DeleteNoteButton from "./delete-note-button";

interface NotesListItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  note: any;
}

export default function NotesListItem({ note }: NotesListItemProps) {
  return (
    <li className="flex items-center px-4 py-2 border border-neutral-700 rounded">
      <p className="grow">{note.title}</p>
      <div className="flex space-x-2 shrink-0">
        <LinkButton
          variant="ghost"
          icon={Pencil}
          href={`/admin/notes/${note.id}`}
        />
        <DeleteNoteButton id={note.id} />
      </div>
    </li>
  );
}
