import React from "react";
import { useParams } from "react-router-dom";
import { projects, ProjectType } from "../data/data";

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className=" pl-10">
      <h1 className="text-4xl text-center font-bold mb-4">{project.title}</h1>
      <div className="h-96 w-full bg-red-600">
        <img src="" alt="" />
      </div>
      <p className="whitespace-pre-line text-center">{project.credits}</p>
      <p className="whitespace-pre-line text-2xl text-center  m-10">
        {project.description}
      </p>

      {"poems" in project && typeof project.poems === "object" && (
        <p className="whitespace-pre-line text-lg text-center mx-auto m-10 max-w-96">
          {project.poems.head}
        </p>
      )}
      <div className="h-96 w-full bg-red-600">
        <img src="" alt="" />
      </div>
      {"poems" in project && typeof project.poems === "object" && (
        <p className="whitespace-pre-line text-lg text-center mx-auto m-10 max-w-96">
          {project.poems.end}
        </p>
      )}

      {/* Add more project details, images, videos, etc. */}
    </div>
  );
};

export default Project;
