import React from "react";
import { biotext } from "../data/data";
import EnhancedText from "../components/EnhancedText";

const Bio: React.FC = () => {
  React.useEffect(() => {
    return () => console.log("Document Ready State", document.readyState);
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 overflow-hidden bg-black">
        <video
          className="w-screen h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/biovideo.mp4?t=2024-10-11T17%3A07%3A38.511Z"
        ></video>
        {/* <img
          src="https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia//bioImage1.webp"
          alt="catol sitting in the floor performing"
          className="w-screen h-screen object-cover opacity-60"
        /> */}
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-20" /> */}
      {/* <div className="relative flex font-jungaBook items-start md:items-center justify-center w-full h-screen min-h max-w-xl lg:max-w-4xl 2xl:max-w-7xl mx-auto text-white text-sm lg:text-base 2xl:text-2xl text-center">
        <EnhancedText>{biotext}</EnhancedText>
      </div> */}
      <div className="absolute top-5 left-0 lg:left-32 m-10 md:m-40 lg:m-52 2xl:m-80 3xl:m-96 text-md md:text-lg xl:text-xl 3xl:text-2xl text-center text-white">
        <EnhancedText>{biotext}</EnhancedText>
        <div className="h-96"></div>
      </div>
    </>
  );
};

export default Bio;
