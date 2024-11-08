import React, { useState, useRef } from "react";
import { DerramaGif } from "../components/Gifs";

const ComingSoon: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Maneja cuando el video comienza a reproducirse
  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  // Maneja cuando hay un error en la carga del video
  const handleError = () => {
    setIsVideoPlaying(false);
  };

  // Verifica si el video puede empezar a reproducirse
  const handleCanPlay = () => {
    setIsVideoPlaying(true);
  };

  // Reemplazar por una imagen si el video no se reproduce
  const videoSrc =
    "https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/biovideo.mp4?t=2024-10-11T17%3A07%3A38.511Z";
  const fallbackImage =
    "https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/laPeau02.jpg"; // Imagen de fallback o frame del video

  return (
    <>
      <div className="fixed top-0 left-0 overflow-hidden">
        {/* Imagen solo cuando el video no se está reproduciendo */}
        {!isVideoPlaying && (
          <img
            ref={imgRef}
            src={fallbackImage}
            alt="Fallback Frame"
            className="w-screen h-screen object-cover"
          />
        )}

        {/* Video solo cuando se reproduce */}
        <video
          ref={videoRef}
          className="w-screen h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
          onPlay={handlePlay}
          onError={handleError}
          onCanPlay={handleCanPlay} // Asegura que el video puede empezar
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="absolute w-screen h-full flex items-center justify-center text-xl md:text-4xl xl:text-6xl font-chuchi text-center text-white overflow-x-hidden">
        EM CONSTRUÇÃO / COMING SOON {isVideoPlaying.toString()}
        <DerramaGif className="hidden md:absolute z-10 animate-moveAcross transform translate-x-[-200%] w-1/2 mt-[190%] md:mt-[105%] lg:mt-[33%] 2xl:mt-[21%]" />
      </div>
    </>
  );
};

export default ComingSoon;
