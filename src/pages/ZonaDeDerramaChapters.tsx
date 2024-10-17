import React from "react";
import { Link } from "react-router-dom";

const ZonaDeDerremaChapters: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 overflow-hidden">
        <video
          className="w-screen h-screen object-cover "
          autoPlay
          loop
          muted
          playsInline
          src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/zonabackvideo.mp4`}
        ></video>
      </div>
      <div className="absolute w-full h-full bg-black opacity-20" />
      <div className="absolute w-full text-white font-mattoneBold space-y-10 flex flex-col items-center justify-center min-h-screen">
        <Link
          to="/project/zona-de-derrama-1"
          className="text-2xl font-semibold hover:text-catolPink transition-colors drop-shadow-md shadow-black"
        >
          ZONA DE DERRAMA - first chapter
        </Link>
        <Link
          to="/project/zona-de-derrama-2"
          className="text-2xl font-semibold hover:text-catolPink transition-colors drop-shadow-md shadow-black"
        >
          ARREBENTAÇÃO - last chapter
        </Link>
      </div>
    </>
  );
};

export default ZonaDeDerremaChapters;
