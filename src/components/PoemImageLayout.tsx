import React from "react";

interface PoemImageLayoutProps {
  poem: string;
  imageUrl: string;
  imageAlt: string;
}

const PoemImageLayout: React.FC<PoemImageLayoutProps> = ({
  poem,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 my-8">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="prose max-w-none">
          <p className="whitespace-pre-wrap">{poem}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default PoemImageLayout;
