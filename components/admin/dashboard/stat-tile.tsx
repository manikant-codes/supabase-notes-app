import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface StatTileProps {
  id: number;
  title: string;
  count: number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export default function StatTile({
  id,
  title,
  count,
  icon: Icon,
}: StatTileProps) {
  let colorClasses = "";

  switch (id) {
    case 1:
      colorClasses = "text-yellow-400";
      break;
    case 2:
      colorClasses = "text-blue-400";
      break;
    case 3:
      colorClasses = "text-pink-400";
      break;
    case 4:
      colorClasses = "text-green-400";
      break;
    default:
      colorClasses = "text-blue-400";
  }

  return (
    <div>
      <div className={`flex items-center gap-4 ${colorClasses}`}>
        <Icon />
        <p className="text-xl">{title}</p>
      </div>
      <p className="text-5xl mt-4">{count}</p>
    </div>
  );
}
