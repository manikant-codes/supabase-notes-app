import { Gauge, NotebookPen, UserRoundCog } from "lucide-react";
import SidebarItem from "./sidebar-item";

const sidebarItems = [
  {
    name: "Dashboard",
    urlSegment: "dashboard",
    icon: Gauge,
  },
  {
    name: "Account",
    urlSegment: "account",
    icon: UserRoundCog,
  },
  {
    name: "Notes",
    urlSegment: "notes",
    icon: NotebookPen,
  },
];

export default function SidebarAdmin() {
  return (
    <nav>
      <ul className="bg-gray-950 h-full">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.urlSegment} {...item} />
        ))}
      </ul>
    </nav>
  );
}
