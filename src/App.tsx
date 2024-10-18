import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import {
  ContactoGif,
  DelfinGif,
  EspadaGif,
  EspiralGif,
  EstrellitaGif,
  MariposaGif,
  BioGif,
  UnicornioGif,
  YinyangGif,
} from "./components/Gifs";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import WritingDancingAround from "./pages/WritingDancingAround";
import Performance from "./pages/Performance";
import Bio from "./pages/Bio";
import InterviewsAndPress from "./pages/InterviewsAndPress";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import ZonaDeDerremaChapters from "./pages/ZonaDeDerramaChapters";

const Layout = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ElementType;
}) => (
  <div className="flex lg:space-x-48 bg-gray-100">
    <div className="inline-block ">
      <Header icon={icon} />
    </div>
    <main className="mt-20 md:mt-36 lg:mt-10 px-0 xl:px-4 py-8 w-full h-full">
      {children}
    </main>
  </div>
);

const projectIcons = {
  "clashes-licking": EstrellitaGif,
  "zona-de-derrama-1": UnicornioGif,
  "zona-de-derrama-2": UnicornioGif,
  "la-peaux-entre-les-doigts": MariposaGif,
};

const ProjectWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const Icon = projectIcons[id as keyof typeof projectIcons] || EstrellitaGif;
  return (
    <Layout icon={Icon}>
      <Project />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/:id",
    element: <ProjectWrapper />,
  },
  {
    path: "/project/zona-de-derrama",
    element: <ZonaDeDerremaChapters />,
  },
  {
    path: "/writing-dancing-around",
    element: (
      <Layout icon={EspadaGif}>
        <WritingDancingAround />
      </Layout>
    ),
  },
  {
    path: "/performance",
    element: (
      <Layout icon={YinyangGif}>
        <Performance />
      </Layout>
    ),
  },
  {
    path: "/bio",
    element: (
      <Layout icon={BioGif}>
        <Bio />
      </Layout>
    ),
  },
  {
    path: "/interviews-and-press",
    element: (
      <Layout icon={EspiralGif}>
        <InterviewsAndPress />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout icon={ContactoGif}>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/cv",
    element: (
      <Layout icon={DelfinGif}>
        <CV />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
