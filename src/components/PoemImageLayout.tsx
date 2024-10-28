import React from "react";
import EnhancedText from "./EnhancedText";

interface PoemImageLayoutProps {
  poem: string;
  imageUrl: string;
  imageAlt: string;
  layout: "imageLeft" | "imageRight";
}

const PoemImageLayout: React.FC<PoemImageLayoutProps> = ({
  poem,
  imageUrl,
  imageAlt,
  layout,
}) => {
  const isImageLeft = layout === "imageLeft";

  return (
    <div className="flex flex-col lg:flex-row gap-8 my-5 lg:my-20">
      {/* Imagen izquierda o derecha según el layout */}
      <div className={`w-full lg:w-1/2 ${isImageLeft ? "order-1" : "order-2"}`}>
        <img src={imageUrl} alt={imageAlt} className="w-full mx-auto" />
      </div>

      {/* Texto en el lado opuesto */}
      <div className={`w-full lg:w-1/2 ${isImageLeft ? "order-2" : "order-1"}`}>
        <div className="prose max-w-none h-full">
          <p className="whitespace-pre-line text-center h-full text-sm md:text-lg xl:text-xl 2xl:text-2xl mx-5 2xl:mx-24 mt-auto">
            <EnhancedText>{poem}</EnhancedText>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemImageLayout;
