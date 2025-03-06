import AddUpdateNotesForm from "@/components/admin/notes/add-update-notes-form";
import PageTitleAdmin from "@/components/admin/page-title-admin";
import Card from "@/components/common/card";

export default function AdminAddUpdateNotesPage() {
  return (
    <div className="p-8">
      <PageTitleAdmin pageTitle="Add/Update Notes" />

      <Card>
        <AddUpdateNotesForm />
      </Card>
    </div>
  );
}
