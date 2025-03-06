import React from "react";

export type ButtonVariant = "solid" | "outlined" | "ghost";
export type ButtonStatus = "success" | "danger" | "warning" | "default";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  status?: ButtonStatus;
  variant?: ButtonVariant;
}

export function getExtraButtonClasses(status: string, variant: string) {
  let extraClasses = "";

  switch (variant) {
    case "outlined": {
      extraClasses += " bg-transparent border transition-all";
      switch (status) {
        case "success":
          extraClasses += " border-green-800 hover:bg-green-900";
          break;
        case "warning":
          extraClasses += " border-yellow-800 hover:bg-yellow-900";
          break;
        case "danger":
          extraClasses += " border-red-800 hover:bg-red-900";
          break;
        default:
          extraClasses += " border-blue-800 hover:bg-blue-900";
      }
      break;
    }
    case "ghost": {
      extraClasses += " bg-transparent transition-all";
      switch (status) {
        case "success":
          extraClasses += " hover:bg-green-900";
          break;
        case "warning":
          extraClasses += " hover:bg-yellow-900";
          break;
        case "danger":
          extraClasses += " hover:bg-red-900";
          break;
        default:
          extraClasses += " hover:bg-blue-900";
      }
      break;
    }
    default: {
      extraClasses += " transition-all";
      switch (status) {
        case "success":
          extraClasses += " bg-green-800 hover:bg-green-900";
          break;
        case "warning":
          extraClasses += " bg-yellow-800 hover:bg-yellow-900";
          break;
        case "danger":
          extraClasses += " bg-red-800 hover:bg-red-900";
          break;
        default:
          extraClasses += " bg-blue-800 hover:bg-blue-900";
      }
    }
  }

  return extraClasses;
}

export default function Button({
  children,
  status,
  variant,
  ...props
}: ButtonProps) {
  const extraClasses = getExtraButtonClasses(
    status || "default",
    variant || "solid"
  );
  return (
    <button
      {...props}
      className={`cursor-pointer px-4 py-2 rounded ${extraClasses} ${
        props.className || ""
      }`}
    >
      {children}
    </button>
  );
}
