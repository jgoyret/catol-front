import React from "react";
import { performances } from "../data/data";
import EnhancedText from "../components/EnhancedText";
EnhancedText;

const Performance: React.FC = () => {
  return (
    <div className="mx-auto w-11/12">
      <h1 className="text-6xl lg:text-8xl 2xl:text-9xl mb-4 font-chuchi text-center">
        PERFORMANCE
      </h1>
      <p className="text-2xl lg:text-4xl 2xl:text-6xl text-center font-chuchi uppercase">
        _ Situational Dances, an approach to improvised dances for various
        “non-theatrical” contexts or in conversations with other artistics
        practices _
      </p>
      <div className="space-y-16 ">
        {performances.map((performance, index) => (
          <div
            key={index}
            className="flex flex-col my-20 lg:flex-row items-center md:items-start gap-0"
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
              <p className="text-sm md:text-lg 2xl:text-2xl mx-5 md:mx-5">
                <EnhancedText>{performance.text}</EnhancedText>
              </p>
              <p className="text-sm md:text-lg 2xl:text-2xl mx-5 md:mx-5 mt-5">
                {typeof performance.credits === "object" &&
                  `${performance.credits.activity}: ${performance.credits.names}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
