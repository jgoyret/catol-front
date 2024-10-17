import React from "react";
import { Link, useLocation } from "react-router-dom";
import useDeviceType from "../hooks/useDeviceType";
import Marquee from "react-fast-marquee";
import { menuItems } from "../data/data";

interface CircleTextProps {
  text: string;
}

const CircleText: React.FC<CircleTextProps> = ({ text }) => {
  const radius = 70; // Radio del círculo
  const characters = text.split(""); // Divide el texto en caracteres individuales
  const angle = 360 / characters.length; // Ángulo entre cada carácter

  const location = useLocation();

  return (
    <div className=" relative flex justify-center font-jungaMedium left-10 2xl:left-3">
      {characters.map((char, index) => {
        const rotation = angle * index;
        const x = radius * Math.cos((rotation * Math.PI) / 180);
        const y = radius * Math.sin((rotation * Math.PI) / 180);

        return (
          <span
            key={index}
            className={`absolute top-3 text-sm font-bold ${
              location.pathname === "/bio" ? "text-white" : "text-black"
            }`}
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

interface HeaderProps {
  icon: React.ElementType;
}

const Header: React.FC<HeaderProps> = ({ icon: Icon }) => {
  const [hovered, setHovered] = React.useState(false);
  const isMobile = useDeviceType();
  const activeItem = menuItems.find((item) => item.path === location.pathname);
  console.log(activeItem);

  const generateIconGrid = () => {
    const icons = [];
    const gridSize = 6; // Cambia este número para modificar el tamaño de la cuadrícula

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        icons.push(<Icon key={`${i}-${j}`} className="text-black h-24 " />);
      }
    }

    return icons;
  };

  return isMobile ? (
    <header className="fixed flex  text-2xl md:text-4xl justify-center items-center text-center top-0 left-0 w-full h-[50px] md:h-[100px] z-10">
      <Link
        to={"/"}
        className="w-full h-full transparent bg-slate-100 border border-b-black"
      >
        <Marquee
          pauseOnHover
          direction={"right"}
          className="h-full mx-auto font-jungaBook"
        >
          <div className="mx-10">HOME</div>
          {activeItem && <activeItem.Icon className="h-5 md:h-10" />}
          <div className="mx-10">HOME</div>
          {activeItem && <activeItem.Icon className="h-5 md:h-10" />}
          <div className="mx-10">HOME</div>
          {activeItem && <activeItem.Icon className="h-5 md:h-10" />}
        </Marquee>
      </Link>
    </header>
  ) : (
    <header className="fixed top-0 left-0 w-1/12 h-full z-10">
      <div className=" mx-auto w-full h-full relative">
        <Link
          to="/"
          className="flex justify-center items-center relative w-full h-48 "
        >
          {/* Este contenedor es el área de hover */}
          <div
            className="inline-block "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <CircleText text="HOME HOME HOME HOME" />
            <Icon className="text-black h-12 ml-14 xl:ml-16 2xl:ml-5" />
          </div>

          {/* Los íconos se renderizan fuera del área de hover */}
          {hovered && (
            <div className="absolute space-x-36 inset-0 z-[-1] grid grid-cols-6 gap-4 w-screen h-screen">
              {generateIconGrid()}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
