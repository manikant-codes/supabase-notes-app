import { COMPANY_NAME } from "@/consts";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import SignoutButton from "./signout-button";

export default async function HeaderAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="bg-gray-900 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">
        <Link href="/">{COMPANY_NAME}</Link>
      </h1>
      <ul className="flex items-center gap-8">
        <li>Welcome, {user?.email}</li>
        <li>
          <SignoutButton />
        </li>
      </ul>
    </header>
  );
}
