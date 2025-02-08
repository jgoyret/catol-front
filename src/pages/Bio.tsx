import React from "react";
import { biotext } from "../data/data";
import EnhancedText from "../components/EnhancedText";
import { getBioInfo } from "../utils/get-bio";

const Bio: React.FC = () => {
  const [bioInfo, setBioInfo] = React.useState<any>(null);

  React.useEffect(() => {
    getBioInfo().then((res) => {
      setBioInfo(res);
    });
    return () => console.log("Document Ready State", document.readyState);
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 overflow-hidden">
        <video
          className="w-screen h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://qermkkrhilxobhfrefim.supabase.co/storage/v1/object/public/catolmedia/biovideo.mp4?t=2024-10-11T17%3A07%3A38.511Z"
        ></video>
      </div>
      <div className="absolute top-5 left-0 lg:left-32 m-10 md:m-40 lg:m-52 2xl:m-80 3xl:m-96 text-md md:text-lg xl:text-xl 2xl:text-2xl text-center text-white">
        {bioInfo && bioInfo.length > 0 ? (
          // bioInfo.map((paragraph: any, index: number) => (
          //   <p key={index}>
          //     {paragraph.children[0].text} <br />
          //   </p>
          // ))
          <EnhancedText>{bioInfo}</EnhancedText>
        ) : (
          <p>...</p>
        )}
        <div className="h-96"></div>
      </div>
    </>
  );
};

export default Bio;
