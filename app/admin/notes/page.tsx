import PageTitleAdmin from "@/components/admin/page-title-admin";
import Card from "@/components/common/card";
import { getAllNotes } from "./[slug]/actions";
import NotesList from "@/components/admin/notes/notes-list";

export default function AdminNotesPage() {
  return (
    <div className="p-8">
      <PageTitleAdmin
        pageTitle="Notes"
        link={{ href: "/admin/notes/new", text: "Add New" }}
      />
      <NotesList />
    </div>
  );
}
