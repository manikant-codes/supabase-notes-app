import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  status?: "success" | "danger" | "warning";
  variant?: "solid" | "outlined" | "ghost";
}

export default function Button({
  children,
  status,
  variant,
  ...props
}: ButtonProps) {
  let extraClasses = "";

  if (status) {
    if (status === "success") {
      extraClasses += " bg-green-500 hover:bg-green-600";
    } else if (status === "danger") {
      extraClasses += " bg-red-500 hover:bg-red-600";
    } else if (status === "warning") {
      extraClasses += " bg-yellow-500 hover:bg-yellow-600";
    }
  }

  if (variant) {
    if (variant === "outlined") {
      extraClasses += " border border-neutral-700";
    } else if (variant === "ghost") {
      extraClasses += " bg-transparent";
    }
  }

  return (
    <button
      {...props}
      className={`bg-blue-700 hover:bg-blue-800 cursor-pointer px-4 py-2 rounded ${extraClasses} ${
        props.className || ""
      }`}
    >
      {children}
    </button>
  );
}
