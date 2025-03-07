import Card from "@/components/common/card";
import LinkButton from "@/components/common/link-button";
import ReactMarkdown from "react-markdown";

interface NoteTileProps {
  id: string;
  title: string;
  content: string;
  views: number;
}

export default function NoteTile({ id, title, content, views }: NoteTileProps) {
  return (
    <Card className="p-4!">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
      <LinkButton
        href={`/notes/${id}`}
        text="Read More"
        className="mt-4 w-fit"
        variant="outlined"
      />
    </Card>
  );
}
