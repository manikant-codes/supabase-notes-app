import FooterAdmin from "@/components/admin/layout/footer-admin";
import HeaderAdmin from "@/components/admin/layout/header-admin";
import SidebarAdmin from "@/components/admin/layout/sidebar/sidebar-admin";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <html>
      <body>
        <HeaderAdmin />
        <div className="grid grid-cols-[256px_1fr]">
          <SidebarAdmin />
          <main>{children}</main>
        </div>
        <FooterAdmin />
      </body>
    </html>
  );
}
