import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ButtonStatus, ButtonVariant, getExtraButtonClasses } from "./button";

export interface LinkButtonProps {
  text?: string;
  href: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  status?: ButtonStatus;
  variant?: ButtonVariant;
}

export default function LinkButton({
  status,
  variant,
  href,
  text,
  icon: Icon,
}: LinkButtonProps) {
  const extraClasses = getExtraButtonClasses(
    status || "default",
    variant || "solid"
  );

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer ${extraClasses}`}
    >
      {Icon && (
        <span>
          <Icon className="w-5 h-5" />
        </span>
      )}
      {text && <span>{text}</span>}
    </Link>
  );
}
