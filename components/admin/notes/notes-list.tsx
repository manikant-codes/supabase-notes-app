import { getAllUserNotes } from "@/app/(actions)/notes-actions";
import Card from "@/components/common/card";
import NotesListItem from "./notes-list-item";

export default async function NotesList() {
  const notes = await getAllUserNotes();

  return (
    <Card>
      {!notes || notes.length === 0 ? (
        <p>No notes to show...</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note: any) => {
            return <NotesListItem key={note.id} note={note} />;
          })}
        </ul>
      )}
    </Card>
  );
}
