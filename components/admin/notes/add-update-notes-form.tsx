"use client";

import { addNote, getNote, updateNote } from "@/app/(actions)/notes-actions";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import MDEditor from "@uiw/react-md-editor";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddUpdateNotesForm() {
  const { id } = useParams();

  console.log("id", id);

  const isAdd = id === "new";

  const [formState, setFormState] = useState({
    title: "",
    content: "",
    tags: "",
  });

  console.log("formstate", formState);

  useEffect(() => {
    const fetchNoteData = async () => {
      const note = await getNote(id as string);

      console.log("note", note);

      if (note) {
        setFormState(note);
      }
    };

    if (!isAdd) {
      fetchNoteData();
    }
  }, [id]);

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleEditorChange(value?: string) {
    setFormState((prev) => ({
      ...prev,
      content: value || "",
    }));
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();

    for (const key in formState) {
      formData.append(key, (formState as any)[key]);
    }

    if (isAdd) {
      addNote(formData);
    } else {
      updateNote(formData);
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <Input
          labelText="Title"
          id="title"
          name="title"
          value={formState.title}
          onChange={handleFormChange}
        />
        <MDEditor value={formState.content} onChange={handleEditorChange} />
        <Input
          labelText="Tags"
          id="tags"
          name="tags"
          value={formState.tags}
          onChange={handleFormChange}
        />

        <Button type="submit" className="mt-8">
          Save
        </Button>
      </form>
    </div>
  );
}
