import NotesList from "@/components/admin/notes/notes-list";
import PageTitleAdmin from "@/components/admin/page-title-admin";
import { Plus } from "lucide-react";

export default function AdminNotesPage() {
  return (
    <div className="p-8">
      <PageTitleAdmin
        pageTitle="Notes"
        link={{ href: "/admin/notes/new", text: "Add New", icon: Plus }}
      />
      <NotesList />
    </div>
  );
}
