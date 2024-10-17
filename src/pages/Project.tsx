import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/data";
import EnhancedText from "../components/EnhancedText";

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }
  const renderMedia = (mediaUrl: string) => {
    if (mediaUrl.includes("vimeo.com")) {
      return (
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            src={`${mediaUrl}?autoplay=1&loop=1`}
            className=" w-full h-[210px] md:h-[420px] lg:h-[540px] xl:h-[660px] 2xl:h-[1300px]"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
      );
    } else {
      return <img src={mediaUrl} alt={project.title} className="w-full mb-8" />;
    }
  };

  return (
    <div className=" lg:pl-10">
      <h1 className="text-4xl 2xl:text-6xl text-center font-jungaMedium font-bold mb-4">
        {project.title}
      </h1>
      <div className="">{renderMedia(project.media.head)}</div>
      <p className="whitespace-pre-line text-center text-base 2xl:text-xl font-jungaBook">
        <EnhancedText>{project.credits}</EnhancedText>
      </p>
      <p className="whitespace-pre-line text-2xl text-center  m-10 font-jungaBook">
        <EnhancedText>{project.description}</EnhancedText>
      </p>

      {"poems" in project && typeof project.poems === "object" && (
        <p className="whitespace-pre-line text-lg 2xl:text-2xl text-center mx-auto m-10 max-w-2xl">
          {project.poems.head}
        </p>
      )}
      {project.media.single !== "" && (
        <div className=" w-full flex justify-center">
          <img src={`${project.media.single}`} alt={`${project.title}`} />
        </div>
      )}
      {project.media.dual[0] !== "" && project.media.dual[1] !== "" && (
        <div className=" w-full flex justify-center space-x-2">
          <img
            className="w-1/2"
            src={`${project.media.dual[0]}`}
            alt={`${project.title}`}
          />
          <img
            className="w-1/2"
            src={`${project.media.dual[1]}`}
            alt={`${project.title}`}
          />
        </div>
      )}

      <div className="text-lg text-center mx-auto m-10 max-w-2xl">
        <EnhancedText>{project.poems.end}</EnhancedText>
      </div>
    </div>
  );
};

export default Project;
