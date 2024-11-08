import React from "react";
import { DerramaGif } from "../components/Gifs";

const ComingSoon: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0">
        <video
          className="w-screen h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/biovideo.mp4?t=2024-10-11T17%3A07%3A38.511Z"
        ></video>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-20" /> */}
      {/* <div className="relative flex font-jungaBook items-start md:items-center justify-center w-full h-screen min-h max-w-xl lg:max-w-4xl 2xl:max-w-7xl mx-auto text-white text-sm lg:text-base 2xl:text-2xl text-center">
        <EnhancedText>{biotext}</EnhancedText>
      </div> */}
      <div className="absolute w-full h-full flex items-center justify-center text-xl md:text-4xl xl:text-6xl font-chuchi text-center text-white overflow-x-hidden">
        EM CONSTRUÇÃO / COMING SOON
        <DerramaGif className="absolute z-10 animate-moveAcross transform translate-x-[-200%] w-1/2 mt-[190%] md:mt-[105%] lg:mt-[33%] 2xl:mt-[21%]" />
        {/* <DerramaGif className="absolute bottom-1/4" /> */}
      </div>
    </>
  );
};

export default ComingSoon;
