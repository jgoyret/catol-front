import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ContactoGif,
  DelfinGif,
  EspadaGif,
  EspiralGif,
  EstrellitaGif,
  MariposaGif,
  TesoroGif,
  UnicornioGif,
  YinyangGif,
} from "../components/Gifs";

interface MenuItem {
  id?: string;
  name: string;
  path?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement> & { className?: string }>;
}

const menuItems: MenuItem[] = [
  { id: "clashes-licking", name: "CLASHES LICKING", Icon: EstrellitaGif },
  { id: "zona-de-derrama", name: "ZONA DE DERRAMA", Icon: UnicornioGif },
  {
    id: "la-peaux-entre-les-doigts",
    name: "LA PEAUX ENTRE LES DOIGTS",
    Icon: MariposaGif,
  },
  {
    name: "WRITING DANCING AROUND",
    path: "/writing-dancing-around",
    Icon: EspadaGif,
  },
  { name: "PERFORMANCE", path: "/performance", Icon: YinyangGif },
  { name: "BIO", path: "/bio", Icon: TesoroGif },
  {
    name: "INTERVIEWS AND PRESS",
    path: "/interviews-and-press",
    Icon: EspiralGif,
  },
  { name: "CONTACT", path: "/contact", Icon: ContactoGif },
  { name: "CV", path: "/cv", Icon: DelfinGif },
];

const Home: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950">
      <nav className="text-center">
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-6xl font-bold relative font-mattoneBold"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {hoveredItem === item.name && (
                <>
                  <item.Icon className="absolute right-full top-1/2 transform -translate-y-1/2  h-20 max-w-40" />
                  <item.Icon className="absolute left-full top-1/2 transform -translate-y-1/2  h-20 max-w-40" />
                </>
              )}
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-white hover:text-catolPink transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={`/project/${item.id}`}
                  className="text-white hover:text-catolPink transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
