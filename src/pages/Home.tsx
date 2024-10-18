import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ContactoGif,
  DelfinGif,
  EspadaGif,
  EspiralGif,
  EstrellitaGif,
  MariposaGif,
  preloadGifs,
  BioGif,
  UnicornioGif,
  YinyangGif,
} from "../components/Gifs";
import BackgroundHome from "../components/BackgroundHome";

interface MenuItem {
  id?: string;
  name: string;
  path?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement> & { className?: string }>;
}

const menuItems: MenuItem[] = [
  { id: "zona-de-derrama", name: "ZONA DE DERRAMA", Icon: UnicornioGif },
  { id: "clashes-licking", name: "CLASHES LICKING", Icon: EstrellitaGif },
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
  { name: "BIO", path: "/bio", Icon: BioGif },
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

  React.useEffect(() => {
    preloadGifs();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <BackgroundHome />
      <nav className="text-center">
        <ul className="space-y-6 md:space-y-10">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-md md:text-xl lg:text-4xl 2xl:text-6xl font-bold relative font-mattoneBold"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {hoveredItem === item.name && (
                <>
                  <item.Icon className="hidden md:block absolute right-full top-1/2 transform -translate-y-1/2  h-20 2xl:h-32 max-w-40 2xl:max-w-64" />
                  <item.Icon className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2  h-20 2xl:h-32 max-w-40 2xl:max-w-64" />
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
