import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { preloadGifs } from "../components/Gifs";
import { menuItems } from "../data/data.ts";
import BackgroundHome from "../components/BackgroundHome";

// Memoizar cada ítem para evitar renders innecesarios
const MenuItem = React.memo(({ item, hoveredItem, setHoveredItem }: any) => {
  const isHovered = hoveredItem === item.name;

  return (
    <li
      key={item.id}
      className="text-xl md:text-xl lg:text-2xl 2xl:text-4xl relative font-chuchi font-bold hover:italic tracking-widest"
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {isHovered && (
        <>
          <item.icon
            type="hover"
            className="hidden md:block absolute right-full top-1/2 transform -translate-y-1/2 h-20 2xl:h-32 max-w-40 2xl:max-w-64 visible"
          />
          <item.icon
            type="hover"
            className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 h-20 2xl:h-32 max-w-40 2xl:max-w-64 scale-x-[-1] visible"
          />
        </>
      )}
      <Link
        to={item.path || `/project/${item.id}`}
        className="text-white hover:text-catolHover p-5"
      >
        {item.name}
      </Link>
    </li>
  );
});

const Home: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Precarga de GIFs al montar el componente
  useEffect(() => {
    preloadGifs();
  }, []);

  // Memoizamos el contenido del menú
  const memoizedMenuItems = useMemo(() => {
    return menuItems.map((item) => (
      <MenuItem
        key={item.id}
        item={item}
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
      />
    ));
  }, [menuItems, hoveredItem]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <BackgroundHome />
      <h1 className="absolute text-transparent">Catol Teixeira</h1>
      <h2 className="absolute text-transparent">Catol Teixeira portfolio</h2>
      <nav className="text-center">
        <ul className="space-y-6 md:space-y-10">{memoizedMenuItems}</ul>
      </nav>
    </div>
  );
};

export default React.memo(Home);
