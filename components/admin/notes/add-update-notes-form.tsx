import { addNote } from "@/app/admin/notes/[slug]/actions";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Textarea from "@/components/common/textarea";

export default function AddUpdateNotesForm() {
  return (
    <div>
      <form action={addNote} className="flex flex-col gap-4">
        <Input labelText="Title" id="title" name="title" />
        <Textarea labelText="Content" id="content" name="content" />
        <Input labelText="Tags" id="tags" name="tags" />

        <Button type="submit" className="mt-8">
          Save
        </Button>
      </form>
    </div>
  );
}
