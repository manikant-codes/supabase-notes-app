import Stats from "@/components/admin/dashboard/stats";
import PageTitleAdmin from "@/components/admin/page-title-admin";

export default function AdminDashboardPage() {
  return (
    <div className="p-8">
      <PageTitleAdmin pageTitle="Dashboard" />
      <Stats />
    </div>
  );
}
