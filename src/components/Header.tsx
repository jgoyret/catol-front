import React from "react";
import { Link } from "react-router-dom";

interface CircleTextProps {
  text: string;
}

const CircleText: React.FC<CircleTextProps> = ({ text }) => {
  const radius = 80; // Radio del círculo
  const characters = text.split(""); // Divide el texto en caracteres individuales
  const angle = 360 / characters.length; // Ángulo entre cada carácter

  return (
    <div className=" relative flex justify-center  ">
      {characters.map((char, index) => {
        const rotation = angle * index;
        const x = radius * Math.cos((rotation * Math.PI) / 180);
        const y = radius * Math.sin((rotation * Math.PI) / 180);

        return (
          <span
            key={index}
            className="absolute top-3 text-xl font-bold"
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

  const generateIconGrid = () => {
    const icons = [];
    const gridSize = 10; // Cambia este número para modificar el tamaño de la cuadrícula

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        icons.push(
          <Icon key={`${i}-${j}`} className="text-black h-24  m-2  " />
        );
      }
    }

    return icons;
  };

  return (
    <header className="fixed top-0 left-0 w-1/12 h-full z-10">
      <div className=" mx-auto w-full h-full relative">
        <Link
          to="/"
          className="flex justify-center items-center relative w-full h-48 "
        >
          {/* Este contenedor es el área de hover */}
          <div
            className="inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <CircleText text="HOME HOME HOME HOME" />
            <Icon className="text-black h-12   " />
          </div>

          {/* Los íconos se renderizan fuera del área de hover */}
          {hovered && (
            <div className="absolute space-x-24 inset-0 z-[-1] grid grid-cols-6 gap-2 w-screen h-screen">
              {generateIconGrid()}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
