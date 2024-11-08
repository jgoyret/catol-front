import React, { useState } from "react";
import { Link } from "react-router-dom";
import { preloadGifs } from "../components/Gifs";
import { menuItems } from "../data/data.ts";
import BackgroundHome from "../components/BackgroundHome";

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
              className="text-xl md:text-2xl lg:text-4xl 2xl:text-6xl relative  font-chuchi font-bold hover:italic tracking-widest"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {hoveredItem === item.name && (
                <>
                  <item.icon
                    type="hover"
                    className="hidden md:block absolute right-full top-1/2 transform -translate-y-1/2  h-20 2xl:h-32 max-w-40 2xl:max-w-64"
                  />
                  <item.icon
                    type="hover"
                    className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2  h-20 2xl:h-32 max-w-40 2xl:max-w-64 scale-x-[-1]"
                  />
                </>
              )}
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-white hover:text-catolHover p-5"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={`/project/${item.id}`}
                  className="text-white hover:text-catolHover p-5"
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
