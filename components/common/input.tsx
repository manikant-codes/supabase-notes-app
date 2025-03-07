import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export default function Input({ labelText, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id} className="text-neutral-200 mb-[2px]">
        {labelText}
      </label>
      <input
        id={props.id}
        type={props.type || "text"}
        name={props.name}
        className="p-2 border-2 border-neutral-500 focus:border-blue-700 outline-none rounded"
        {...props}
      />
    </div>
  );
}
