import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/data";
import EnhancedText from "../components/EnhancedText";
import PoemImageLayout from "../components/PoemImageLayout";

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
            src={`${mediaUrl}?autoplay=1&loop=1&title=0&byline=0&portrait=0`}
            className=" w-full h-[230px] md:h-[440px] lg:h-[540px] xl:h-[660px] 2xl:h-[950px] 3xl:h-[1300px]"
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
    <div className=" lg:pl-10 text-sm md:text-lg 2xl:text-2xl">
      <h1 className="text-4xl 2xl:text-6xl text-center font-mattoneBold font-bold mb-4">
        {project.title}
      </h1>
      <div className="">{renderMedia(project.media.head)}</div>
      <p className="whitespace-pre-line text-center px-2  font-jungaBook">
        <EnhancedText>{project.credits}</EnhancedText>
      </p>
      <p className="whitespace-pre-line  text-center  m-2 mx-5 lg:mx-5 3xl:mx-5 font-jungaBook">
        <EnhancedText>{project.description}</EnhancedText>
      </p>
      {project.usePoemImageLayout && typeof project.poems === "object" && (
        <PoemImageLayout
          poem={project.poems.head}
          imageUrl={project.media.single}
          imageAlt={project.title}
        />
      )}
      {"poems" in project && typeof project.poems === "object" && (
        <p className="whitespace-pre-line  text-center mx-auto mb-10 max-w-2xl">
          <EnhancedText>{project.poems.head}</EnhancedText>
        </p>
      )}
      {project.media.single !== "" && !project.usePoemImageLayout && (
        <div className=" w-full min-h-[500px] md:h-full flex justify-center">
          <img
            src={`${project.media.single}`}
            alt={`${project.title}`}
            className="object-cover"
          />
        </div>
      )}
      {project.media.dual[0] !== "" && project.media.dual[1] !== "" && (
        <div className=" w-full flex flex-col lg:flex-row justify-center lg:space-x-4 my-10">
          <img
            className="w-full min-h-96 lg:w-1/2 object-cover mb-10 lg:mb-0"
            src={`${project.media.dual[0]}`}
            alt={`${project.title}`}
          />
          <img
            className="w-full min-h-96 lg:w-1/2 object-cover"
            src={`${project.media.dual[1]}`}
            alt={`${project.title}`}
          />
        </div>
      )}
      {"poems" in project && typeof project.poems === "object" && (
        <div className=" text-center mx-auto m-10 max-w-2xl">
          <EnhancedText>{project.poems.end}</EnhancedText>
        </div>
      )}
    </div>
  );
};

export default Project;
