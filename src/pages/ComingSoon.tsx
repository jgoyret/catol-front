import React, { useState, useRef } from "react";
import { DerramaGif } from "../components/Gifs";
import useDeviceType from "../hooks/useDeviceType";

const ComingSoon: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const isMobile = useDeviceType();
  const [text, setText] = useState<string>("");

  // Maneja cuando el video comienza a reproducirse
  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  // Maneja cuando hay un error en la carga del video
  const handleError = () => {
    setIsVideoPlaying(false);
  };

  // Reemplazar por una imagen si el video no se reproduce
  const videoSrc =
    "https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/biovideo.mp4?t=2024-10-11T17%3A07%3A38.511Z";
  const fallbackImage =
    "https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/catol-mobile-bio.webp"; // Imagen de fallback o frame del video

  // React.useEffect(() => {
  //   console.log("isVideoPlaying", isVideoPlaying);

  //   setText("EM CONSTRUÇÃO / COMING SOON");
  //   const check_video = setTimeout(() => {
  //     if (isVideoPlaying === false && isMobile) {
  //       videoRef.current?.classList.add("hidden");
  //       console.log("video hidden");
  //       setText("parece joda");
  //     }
  //   }, 5000);

  //   return () => {
  //     clearTimeout(check_video);
  //   };
  // }, [isVideoPlaying]);

  return (
    <>
      <div className="fixed top-0 left-0 overflow-hidden">
        {/* Imagen solo cuando el video no se está reproduciendo */}

        {/* Video solo cuando se reproduce */}
        <video
          ref={videoRef}
          className="w-screen h-screen object-cover hidden lg:block"
          autoPlay
          loop
          muted
          playsInline
          onPlay={handlePlay}
          onError={handleError}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* {!isVideoPlaying && ( */}
        <img
          ref={imgRef}
          src={fallbackImage}
          alt="Fallback Frame"
          className="w-screen h-screen object-cover block lg:hidden"
        />
        {/* )} */}
      </div>
      <div className="absolute w-screen h-full flex items-center justify-center text-xl md:text-4xl xl:text-6xl font-chuchi text-center text-white overflow-x-hidden">
        EM CONSTRUÇÃO / COMING SOON
        <DerramaGif className="hidden lg:block absolute z-10 animate-moveAcross transform translate-x-[-200%] w-1/2 mt-[190%] md:mt-[105%] lg:mt-[33%] 2xl:mt-[21%]" />
      </div>
    </>
  );
};

export default ComingSoon;
