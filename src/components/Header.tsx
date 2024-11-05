import React from "react";
import { Link, useLocation } from "react-router-dom";
import useDeviceType from "../hooks/useDeviceType";
import Marquee from "react-fast-marquee";

interface HeaderProps {
  icon: React.ElementType;
}

const Header: React.FC<HeaderProps> = ({ icon: Icon }) => {
  const [hovered, setHovered] = React.useState(false);
  const isMobile = useDeviceType();
  const location = useLocation();
  // const activeItem = menuItems.find((item) => item.path === location.pathname);
  // console.log(activeItem);

  const generateIconGrid = () => {
    const icons = [];
    const gridSize = 8; // Cambia este número para modificar el tamaño de la cuadrícula

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        icons.push(
          <Icon
            key={`${i}-${j}`}
            type="hover"
            className="text-black h-full w-full image-crisp"
          />
        );
      }
    }

    return icons;
  };

  return isMobile ? (
    <header className="fixed flex  text-2xl md:text-4xl justify-center items-center text-center top-0 left-0 w-full h-[50px] md:h-[80px] z-10">
      <Link
        to={"/"}
        className="w-full h-full transparent bg-slate-100 border border-b-black"
      >
        <Marquee
          pauseOnHover
          direction={"right"}
          className="h-full mx-auto font-jungaBook"
        >
          <div className="mx-10 font-mattoneBold">HOME</div>
          <Icon type="hover" className="h-10 md:h-16" />
          <div className="mx-10 font-mattoneBold">HOME</div>
          <Icon type="hover" className="h-10 md:h-16 " />
          <div className="mx-10 font-mattoneBold">HOME</div>
          <Icon type="hover" className="h-10 md:h-16" />
        </Marquee>
      </Link>
    </header>
  ) : (
    <header className="fixed top-0 left-0 w-2/12 h-full z-10 ">
      <div
        className={`mx-auto relative p-5 ${
          location.pathname !== "/bio" && "bg-slate-100"
        }`}
      >
        <Link to="/" className="flex justify-center items-center relative ">
          {/* Este contenedor es el área de hover */}
          <div
            className=""
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Icon type="home" className="text-black" />
          </div>

          {hovered && (
            <div className="absolute inset-0 z-[-1]  grid grid-cols-6 gap-40 2xl:gap-72 w-screen h-screen">
              {generateIconGrid()}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
