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
      return (
        <img
          src={mediaUrl}
          alt={project.title}
          className="w-full mb-8 h-screen object-cover"
        />
      );
    }
  };

  return (
    <div className=" lg:pl-10 text-sm md:text-lg 2xl:text-2xl">
      <h1 className="text-4xl 2xl:text-6xl text-center font-mattoneBold font-bold mb-4">
        {project.title}
      </h1>
      {project.media.head !== "" && (
        <div className="">{renderMedia(project.media.head)}</div>
      )}
      <p className="whitespace-pre-line  text-center  m-2 mx-5 lg:mx-5 3xl:mx-5 font-jungaBook">
        <EnhancedText>{project.description}</EnhancedText>
      </p>
      {project.usePoemImageLayout &&
        typeof project.poems === "object" &&
        project.media.dual[0] !== "" &&
        project.poems.head !== "" && (
          <PoemImageLayout
            poem={project.poems.head}
            imageUrl={project.media.dual[0]}
            imageAlt={project.title}
            layout="imageRight"
          />
        )}
      {project.usePoemImageLayout &&
        typeof project.poems === "object" &&
        project.media.dual[1] !== "" &&
        project.poems.end !== "" && (
          <PoemImageLayout
            poem={project.poems.end}
            imageUrl={project.media.dual[1]}
            imageAlt={project.title}
            layout="imageLeft"
          />
        )}
      {"poems" in project &&
        typeof project.poems === "object" &&
        !project.usePoemImageLayout && (
          <p className="whitespace-pre-line mx-auto text-center my-5 mb-10 max-w-2xl">
            <EnhancedText>{project.poems.head}</EnhancedText>
          </p>
        )}
      {project.media.single !== "" && !project.usePoemImageLayout && (
        <div className=" w-full  md:h-full flex justify-center">
          <img
            src={`${project.media.single}`}
            alt={`${project.title}`}
            className=" aspect-w-16 aspect-h-9 w-screen h-full object-cover"
          />
        </div>
      )}
      {project.media.dual[0] !== "" &&
        project.media.dual[1] !== "" &&
        !project.usePoemImageLayout && (
          <div className=" w-full flex flex-col lg:flex-row justify-center lg:space-x-4 overflow-hidden my-10">
            <img
              className="w-screen h-full md:min-h-96 lg:w-1/2 object-cover object-center mb-10 lg:mb-0"
              src={`${project.media.dual[0]}`}
              alt={`${project.title}`}
            />
            <img
              className="w-screen h-full md:min-h-96 lg:w-1/2 object-cover object-center"
              src={`${project.media.dual[1]}`}
              alt={`${project.title}`}
            />
          </div>
        )}
      {"poems" in project && typeof project.poems === "object" && (
        <div className=" text-center mx-5 md:mx-auto m-10 max-w-2xl">
          <EnhancedText>{project.poems.end}</EnhancedText>
        </div>
      )}

      <p className="whitespace-pre-line text-center px-2  font-jungaBook">
        <EnhancedText>{project.credits}</EnhancedText>
      </p>
    </div>
  );
};

export default Project;
