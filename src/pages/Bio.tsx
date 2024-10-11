import React from "react";
import { biotext } from "../data/data";
import EnhancedText from "../components/EnhancedText";

const Bio: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-0 overflow-hidden">
        <video
          className="w-screen h-screen object-cover "
          autoPlay
          loop
          muted
          playsInline
          src="https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/biovideo.mp4?t=2024-10-11T17%3A07%3A38.511Z"
        ></video>
      </div>
      <div className="relative flex justify-center text-lg 2xl:text-xl items-center text-center  w-full h-full max-w-4xl 2xl:max-w-6xl mx-auto text-white">
        <EnhancedText>{biotext}</EnhancedText>
      </div>
    </>
  );
};

export default Bio;
