import { addNote, updateNote } from "@/app/admin/notes/[slug]/actions";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Textarea from "@/components/common/textarea";

interface AddUpdateNotesFormProps {
  slug: string;
}

export default function AddUpdateNotesForm({ slug }: AddUpdateNotesFormProps) {
  const isAdd = slug === "new";

  return (
    <div>
      <form
        action={isAdd ? addNote : updateNote}
        className="flex flex-col gap-4"
      >
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
