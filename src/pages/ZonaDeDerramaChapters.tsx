import React from "react";
import { Link } from "react-router-dom";

const ZonaDeDerremaChapters: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 overflow-hidden">
        <video
          className="w-screen h-screen object-cover transform filter blur-md invert"
          autoPlay
          loop
          muted
          playsInline
          src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/zonabackvideo.mp4`}
        ></video>
      </div>
      <div className="absolute w-full h-full bg-black opacity-20" />
      <div className="absolute w-full text-white font-chuchi font-bold space-y-10 flex flex-col items-center justify-center min-h-screen">
        <Link
          to="/project/zona-de-derrama-1"
          className="text-xl md:text-2xl lg:text-4xl 2xl:text-6xl hover:text-catolHover hover:italic transition-colors drop-shadow-md shadow-black"
        >
          ZONA DE DERRAMA - first chapter
        </Link>
        <Link
          to="/project/zona-de-derrama-2"
          className="text-xl md:text-2xl lg:text-4xl 2xl:text-6xl hover:text-catolHover hover:italic transition-colors drop-shadow-md shadow-black"
        >
          ARREBENTAÇÃO - last chapter
        </Link>
        {/* <Link
          to="/project/zona-de-derrama-3"
          className="text-xl md:text-2xl lg:text-4xl 2xl:text-6xl hover:text-catolHover hover:italic transition-colors drop-shadow-md shadow-black"
        >
          Before it starts, after it's finished
        </Link> */}
      </div>
    </>
  );
};

export default ZonaDeDerremaChapters;
