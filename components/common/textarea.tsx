import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string;
}

export default function Textarea({ labelText, ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id} className="text-gray-200 mb-[2px]">
        {labelText}
      </label>
      <textarea
        id={props.id}
        name={props.name}
        rows={props.rows || 3}
        className="p-2 border-2 border-neutral-500 focus:border-blue-700 outline-none rounded"
        {...props}
      />
    </div>
  );
}
