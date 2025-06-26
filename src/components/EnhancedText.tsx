import React from "react";
import { Link, useLocation } from "react-router-dom";

interface EnhancedTextProps {
  children: string;
}

const EnhancedText: React.FC<EnhancedTextProps> = ({ children }) => {
  const location = useLocation();

  const renderText = (text: string) => {
    return text.split(/(<enhanced[\s\S]*?<\/enhanced>)/).map((part, index) => {
      if (part.startsWith("<enhanced")) {
        const style = part.match(/style="(.*?)"/)?.[1];
        const linkName = part.match(/link="(.*?)"/)?.[1] || "";
        const content = part.replace(
          /<enhanced.*?>([\s\S]*?)<\/enhanced>/,
          "$1"
        );

        switch (style) {
          case "cutie":
            return (
              <span
                key={index}
                className={`font-chuchi text-xl md:text-2xl 2xl:text-[35px] ${
                  location.pathname === "/bio" ? "text-white" : "text-black"
                } whitespace-pre-line`}
              >
                {content}
              </span>
            );
          case "cutielink":
            return (
              <Link to={linkName} target="_blank" rel="noopener noreferrer">
                <span
                  key={index}
                  className={`font-chuchi text-xl md:text-2xl 2xl:text-[35px] ${
                    location.pathname === "/bio" ? "text-white" : "text-black"
                  } whitespace-pre-line hover:text-catolHover hover:underline`}
                >
                  {content}
                </span>
              </Link>
            );
          case "cutietitle":
            return (
              <span
                key={index}
                className={`uppercase font-chuchi text-xl lg:text-2xl 2xl:text-4xl  ${
                  location.pathname === "/bio" ? "text-white" : "text-black"
                } whitespace-pre-line`}
              >
                {content}
              </span>
            );

          case "readme":
            return (
              <span
                key={index}
                className={`uppercase font-bold font-jungaMedium tracking-widest text-sm md:text-lg lg:text-xl 2xl:text-2xl ${
                  location.pathname === "/bio" ? "text-white" : "text-black"
                } whitespace-pre-line`}
              >
                {content}
              </span>
            );
          case "blackbold":
            return (
              <span
                key={index}
                className=" font-jungaMedium text-black whitespace-pre-line"
              >
                {content}
              </span>
            );
          default:
            return (
              <span key={index} className="whitespace-pre-line ">
                {content}
              </span>
            );
        }
      }
      return (
        <span key={index} className="whitespace-pre-line">
          {part}
        </span>
      );
    });
  };

  return (
    <div key={React.useId()} className="whitespace-pre-line">
      {renderText(children)}
    </div>
  );
};

export default EnhancedText;
