"use client";

import { deleteNote } from "@/app/admin/notes/[slug]/actions";
import Button from "@/components/common/button";
import { Trash2 } from "lucide-react";

interface DeleteNoteButtonProps {
  id: string;
}

export default function DeleteNoteButton({ id }: DeleteNoteButtonProps) {
  return (
    <div>
      <Button
        status="danger"
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => {
          deleteNote(id);
        }}
      >
        <Trash2 className="w-5 h-5" />
      </Button>
    </div>
  );
}
