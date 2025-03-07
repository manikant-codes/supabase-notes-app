import Card from "@/components/common/card";
import { Eye, LayoutGrid, Notebook, Star } from "lucide-react";
import StatTile from "./stat-tile";

const tiles = [
  { id: 1, title: "Notes", count: 0, icon: Notebook },
  { id: 2, title: "Views", count: 0, icon: Eye },
  { id: 3, title: "Categories", count: 0, icon: LayoutGrid },
  { id: 4, title: "Avg. Rating", count: 0, icon: Star },
];

export default async function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tiles.map((tile) => {
        return (
          <Card key={tile.id}>
            <StatTile key={tile.id} {...tile} />
          </Card>
        );
      })}
    </div>
  );
}
