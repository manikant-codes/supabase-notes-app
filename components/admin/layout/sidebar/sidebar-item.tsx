import { LucideProps } from "lucide-react";
import Link from "next/link";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

export default function SidebarItem({
  name,
  urlSegment,
  icon: Icon,
}: {
  name: string;
  urlSegment: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <li className="px-8 py-4 hover:bg-slate-800">
      <Link href={`/admin/${urlSegment}`} className="flex items-center gap-4">
        <span>
          <Icon className="w-5 h-5" />
        </span>
        <span>{name}</span>
      </Link>
    </li>
  );
}
