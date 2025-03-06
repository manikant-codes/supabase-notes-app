import FooterAdmin from "@/components/admin/layout/footer-admin";
import HeaderAdmin from "@/components/admin/layout/header-admin";
import SidebarAdmin from "@/components/admin/layout/sidebar/sidebar-admin";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeaderAdmin />
      <div className="grid grid-cols-[256px_1fr]">
        <SidebarAdmin />
        <main>{children}</main>
      </div>
      <FooterAdmin />
    </div>
  );
}
