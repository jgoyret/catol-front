import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/data";

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className=" pl-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="h-96 w-full bg-red-600">
        <img src="" alt="" />
      </div>
      <p className="text-sm text-center  m-10">{project.credits}</p>
      <p className="text-lg text-center  m-10">{project.description}</p>

      {/* Add more project details, images, videos, etc. */}
    </div>
  );
};

export default Project;
