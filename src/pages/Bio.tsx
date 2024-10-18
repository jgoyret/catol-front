import React from "react";
import { biotext } from "../data/data";
import EnhancedText from "../components/EnhancedText";

const Bio: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 overflow-hidden">
        <video
          className="w-screen h-screen object-cover "
          autoPlay
          loop
          muted
          playsInline
          src="https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/biovideo.mp4?t=2024-10-11T17%3A07%3A38.511Z"
        ></video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
      <div className="relative flex font-jungaBook items-start md:items-center justify-center w-full h-screen min-h max-w-xl lg:max-w-4xl 2xl:max-w-7xl mx-auto text-white text-sm lg:text-base 2xl:text-2xl text-center">
        <EnhancedText>{biotext}</EnhancedText>
      </div>
    </>
  );
};

export default Bio;
