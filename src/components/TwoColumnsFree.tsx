import React from "react";

interface TwoColumnsFreeProps {
  data: {
    columnLeft: string[];
    columnRight: string[];
  };
}

const TwoColumnsFree: React.FC<TwoColumnsFreeProps> = ({ data }) => {
  const renderContent = (content: string) => {
    if (content.startsWith("http")) {
      return (
        <img
          src={content}
          alt="Writing visual"
          className="w-full h-auto mb-8 "
        />
      );
    }
    return (
      <p className="text-lg md:text-lg 2xl:text-2xl mb-8 whitespace-pre-wrap text-center">
        {content}
      </p>
    );
  };

  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-8">
        {/* Left Column */}
        <div className="space-y-8">
          {[...data.columnLeft].reverse().map((content, index) => (
            <div key={`left-${index}`} className="fade-in">
              {renderContent(content)}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {[...data.columnRight].reverse().map((content, index) => (
            <div key={`right-${index}`} className="fade-in">
              {renderContent(content)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnsFree;
