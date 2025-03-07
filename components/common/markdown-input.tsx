import MDEditor from "@uiw/react-md-editor";
import React from "react";

interface MarkdownInputProps extends React.ComponentProps<typeof MDEditor> {
  labelText: string;
}

export default function MarkdownInput({
  labelText,
  ...props
}: MarkdownInputProps) {
  return (
    <div>
      <label className="text-gray-200 inline-block mb-1">{labelText}</label>
      <MDEditor {...props} />
    </div>
  );
}
