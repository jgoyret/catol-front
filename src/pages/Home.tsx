import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ContactoGif,
  WritingsGif,
  InterviewGif,
  ClashesGif,
  LaPeauGif,
  BioGif,
  DerramaGif,
  PerfoGif,
  CalendarGif,
  preloadGifs,
} from "../components/Gifs";
import BackgroundHome from "../components/BackgroundHome";

interface MenuItem {
  id?: string;
  name: string;
  path?: string;
  Icon: React.FC<
    React.SVGProps<SVGSVGElement> & { className?: string; type?: string }
  >;
}

const menuItems: MenuItem[] = [
  {
    id: "zona-de-derrama",
    name: "ZONA DE DERRAMA",
    Icon: (props) => <DerramaGif {...props} type="hover" />,
  },
  {
    id: "clashes-licking",
    name: "CLASHES LICKING",
    Icon: (props) => <ClashesGif {...props} type="hover" />,
  },
  {
    id: "la-peaux-entre-les-doigts",
    name: "LA PEAUX ENTRE LES DOIGTS",
    Icon: (props) => <LaPeauGif {...props} type="hover" />,
  },
  {
    name: "WRITING DANCING AROUND",
    path: "/writing-dancing-around",
    Icon: (props) => <WritingsGif {...props} type="hover" />,
  },
  {
    name: "PERFORMANCE",
    path: "/performance",
    Icon: (props) => <PerfoGif {...props} type="hover" />,
  },
  {
    name: "BIO",
    path: "/bio",
    Icon: (props) => <BioGif {...props} type="hover" />,
  },
  {
    name: "INTERVIEWS AND PRESS",
    path: "/interviews-and-press",
    Icon: (props) => <InterviewGif {...props} type="hover" />,
  },
  {
    name: "CONTACT",
    path: "mailto:catol.teixeira@protonmail.com?subject=(your%20subject%20here)&body=(your%20question%20here)",
    Icon: (props) => <ContactoGif {...props} type="hover" />,
  },
  {
    name: "CALENDAR",
    path: "/calendar",
    Icon: (props) => <CalendarGif {...props} type="hover" />,
  },
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
                  className="text-white hover:text-catolHoverLight transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={`/project/${item.id}`}
                  className="text-white hover:text-catolHoverLight transition-colors"
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
