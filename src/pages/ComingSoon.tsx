import React from "react";
import { DerramaGif } from "../components/Gifs";

const ComingSoon: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 overflow-hidden">
        <video
          className="w-screen h-screen object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/biovideo.mp4?t=2024-10-11T17%3A07%3A38.511Z"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute w-screen h-full flex items-center justify-center text-xl md:text-4xl xl:text-6xl font-chuchi text-center text-white overflow-x-hidden">
        EM CONSTRUÇÃO / COMING SOON
        <DerramaGif className="absolute z-10 animate-moveAcross transform translate-x-[-200%] w-1/2 mt-[190%] md:mt-[105%] lg:mt-[33%] 2xl:mt-[21%]" />
        {/* <DerramaGif className="absolute bottom-1/4" /> */}
      </div>
    </>
  );
};

export default ComingSoon;
