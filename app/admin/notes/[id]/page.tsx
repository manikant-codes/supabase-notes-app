import AddUpdateNotesForm from "@/components/admin/notes/add-update-notes-form";
import PageTitleAdmin from "@/components/admin/page-title-admin";
import Card from "@/components/common/card";

export default async function AdminAddUpdateNotesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const isAdd = slug === "new";

  return (
    <div className="p-8">
      <PageTitleAdmin pageTitle={isAdd ? "Add Note" : "Update Note"} />

      <Card>
        <AddUpdateNotesForm slug={slug} />
      </Card>
    </div>
  );
}
