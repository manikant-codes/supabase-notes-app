import Card from "@/components/common/card";
import LinkButton from "@/components/common/link-button";
import ReactMarkdown from "react-markdown";

interface NoteTileProps {
  id: string;
  title: string;
  content: string;
  views: number;
  description: string;
}

export default function NoteTile({
  id,
  title,
  content,
  views,
  description,
}: NoteTileProps) {
  return (
    <Card className="p-4!">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 line-clamp-3">{description}</p>
      <LinkButton
        href={`/notes/${id}`}
        text="Read More"
        className="mt-4 w-fit"
        variant="outlined"
      />
    </Card>
  );
}
