import Button from "@/components/common/button";

interface NotesListItemProps {
  note: any;
}

export default function NotesListItem({ note }: NotesListItemProps) {
  return (
    <li className="p-4 border flex items-center border-neutral-700 rounded">
      <p className="grow">{note.title}</p>
      <div className="space-x-2">
        <Button variant="ghost">Edit</Button>
        <Button status="danger" variant="ghost">
          Delete
        </Button>
      </div>
    </li>
  );
}
