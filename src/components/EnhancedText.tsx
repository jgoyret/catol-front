import React from "react";

interface EnhancedTextProps {
  children: string;
}

const EnhancedText: React.FC<EnhancedTextProps> = ({ children }) => {
  const renderText = (text: string) => {
    return text.split(/(<enhanced.*?<\/enhanced>)/).map((part, index) => {
      if (part.startsWith("<enhanced")) {
        const style = part.match(/style="(.*?)"/)?.[1];
        const content = part.replace(/<enhanced.*?>(.*?)<\/enhanced>/, "$1");

        switch (style) {
          case "header":
            return (
              <span
                key={index}
                className=" font-bold italic text-pink-500 font-serif whitespace-pre-line"
              >
                {content}
              </span>
            );
          case "highlight":
            return (
              <span
                key={index}
                className="font-bold text-2xl text-pink-500 whitespace-pre-line"
              >
                {content}
              </span>
            );
          default:
            return (
              <span key={index} className="whitespace-pre-line">
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

  return <div className="whitespace-pre-line">{renderText(children)}</div>;
};

export default EnhancedText;
