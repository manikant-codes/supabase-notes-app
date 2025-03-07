import React from "react";
import NoteTile from "./note-tile";
import { getAllNotes } from "@/app/(actions)/notes-actions";

export default async function NotesTiles() {
  const notes = await getAllNotes();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {notes?.map((note) => {
        return <NoteTile key={note.id} {...note} />;
      })}
    </div>
  );
}
