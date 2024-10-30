import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import {
  ContactoGif,
  CalendarGif,
  WritingsGif,
  InterviewGif,
  ClashesGif,
  LaPeauGif,
  BioGif,
  DerramaGif,
  PerfoGif,
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

export const CursorContext = React.createContext<{
  setCurrentIcon: (icon: React.ElementType | null) => void;
}>({ setCurrentIcon: () => {} });

const Layout = ({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: React.ElementType;
}) => (
  <div className="flex lg:space-x-48 bg-gray-100">
    <Header icon={Icon} />
    <main className="mt-20 md:mt-36 lg:mt-10 px-0 xl:px-4 py-8 w-full h-full">
      {children}
    </main>
  </div>
);

const projectIcons = {
  "clashes-licking": ClashesGif,
  "zona-de-derrama-1": DerramaGif,
  "zona-de-derrama-2": DerramaGif,
  "zona-de-derrama-3": DerramaGif,
  "la-peaux-entre-les-doigts": LaPeauGif,
};

const ProjectWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const Icon = projectIcons[id as keyof typeof projectIcons] || ClashesGif;
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
      <Layout icon={WritingsGif}>
        <WritingDancingAround />
      </Layout>
    ),
  },
  {
    path: "/performance",
    element: (
      <Layout icon={PerfoGif}>
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
      <Layout icon={InterviewGif}>
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
    path: "/calendar",
    element: (
      <Layout icon={CalendarGif}>
        <CV />
      </Layout>
    ),
  },
]);

function App() {
  // const [currentIcon, setCurrentIcon] =
  //   React.useState<React.ElementType | null>(null);

  return (
    // <CursorContext.Provider value={{ setCurrentIcon }}>
    /* <CustomCursor activeIcon={currentIcon} /> */
    <RouterProvider router={router} />
    // </CursorContext.Provider>
  );
}

export default App;
