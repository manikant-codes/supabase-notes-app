"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getServerStats() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("notes")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.log("error", error);
  }

  return data || 0;
}
