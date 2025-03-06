"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addNote(formData: FormData) {
  console.log("formData", formData);
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("notes")
    .insert([
      {
        title: formData.get("title"),
        content: formData.get("content"),
        tags: formData.get("tags"),
      },
    ])
    .select();

  if (error) {
    console.log("error", error);
  }

  console.log("data", data);
}

export async function getAllNotes() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("notes").select("*");
  if (error) {
    console.log("error", error);
  }

  console.log("data", data);

  return data;
}

export async function updateNote(formData: FormData) {
  console.log("formData", formData);
}

export async function deleteNote(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    console.log("error", error);
  }

  revalidatePath("/admin/notes");
}
