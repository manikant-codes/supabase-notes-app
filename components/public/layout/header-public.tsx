import LinkButton from "@/components/common/link-button";
import { COMPANY_NAME } from "@/consts";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function HeaderPublic() {
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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/notes">Notes</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          {!user ? (
            <LinkButton
              href="/login"
              variant="outlined"
              text="Log In / Sign Up"
            />
          ) : (
            <LinkButton
              href="/admin/dashboard"
              variant="outlined"
              text="Dashboard"
            />
          )}
        </li>
      </ul>
    </header>
  );
}
