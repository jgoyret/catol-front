import React from "react";
import { performances } from "../data/data";
import EnhancedText from "../components/EnhancedText";
EnhancedText;

const Performance: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto w-11/12">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 font-chuchi text-center">
        PERFORMANCE
      </h1>
      <p className="text-lg mb-4 text-center">
        Situational Dances, an approach to improvised dances for various
        “non-theatrical” contexts or in conversations with other artistics
        practices
      </p>
      <div className="space-y-16 ">
        {performances.map((performance, index) => (
          <div
            key={index}
            className="flex flex-col my-20 lg:flex-row items-center md:items-start gap-0 "
          >
            <div className="w-full lg:w-1/2">
              <img
                src={performance.image}
                alt={performance.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              {/* <h2 className="text-2xl font-semibold mb-4 italic">{performance.title}</h2> */}
              <p className="text-lg mx-5 md:mx-5">
                <EnhancedText>{performance.text}</EnhancedText>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
