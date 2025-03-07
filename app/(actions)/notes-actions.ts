"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addNote(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("notes")
    .insert([
      {
        title: formData.get("title"),
        content: formData.get("content"),
        tags: formData.get("tags"),
        author: user?.id,
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

  const { data, error } = await supabase.from("notes").select("*").range(0, 9);

  if (error) {
    console.log("error", error);
  }

  return data;
}

export async function getAllUserNotes() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("author", user?.id)
    .range(0, 9);

  if (error) {
    console.log("error", error);
  }

  return data;
}

export async function getNote(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log("error", error);
  }

  return data;
}

export async function updateNote(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("notes")
    .update({
      title: formData.get("title"),
      content: formData.get("content"),
      tags: formData.get("tags"),
    })
    .eq("id", formData.get("id"))
    .select();

  if (error) {
    console.log("error", error);
  }

  console.log("data", data);
}

export async function deleteNote(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    console.log("error", error);
  }

  revalidatePath("/admin/notes");
}
