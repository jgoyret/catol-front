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
import ZonaDeDerremaChapters from "./pages/ZonaDeDerramaChapters";
import PageTransition from "./components/PageTransition";
import ComingSoon from "./pages/ComingSoon";
import Calendar from "./pages/Calendar";


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
  <div className="bg-gray-100">
    <Header icon={Icon} />
    <main className="lg:w-10/12 lg:ml-auto mt-20 md:mt-36 lg:mt-10 px-0 xl:px-4 py-8 h-full">
      {children}
    </main>
  </div>
);

const projectIcons = {
  "clashes-licking": ClashesGif,
  "zona-de-derrama-1": DerramaGif,
  "zona-de-derrama-2": DerramaGif,
  "zona-de-derrama-3": DerramaGif,
  "la-peau-entre-les-doigts": LaPeauGif,
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
    element: (
      <PageTransition>
        <Home />
      </PageTransition>
    ),
  },
  {
    path: "/project/:id",
    element: (
      <PageTransition>
        <ProjectWrapper />
      </PageTransition>
    ),
  },
  {
    path: "/project/zona-de-derrama",
    element: (
      <PageTransition>
        <ZonaDeDerremaChapters />
      </PageTransition>
    ),
  },
  {
    path: "/writing-dancing-around",
    element: (
      <PageTransition>
        <Layout icon={WritingsGif}>
          <WritingDancingAround />
        </Layout>
      </PageTransition>
    ),
  },
  {
    path: "/performance",
    element: (
      <PageTransition>
        <Layout icon={PerfoGif}>
          <Performance />
        </Layout>
      </PageTransition>
    ),
  },
  {
    path: "/bio",
    element: (
      <PageTransition>
        <Layout icon={BioGif}>
          <Bio />
        </Layout>
      </PageTransition>
    ),
  },
  {
    path: "/interviews-and-press",
    element: (
      <PageTransition>
        <Layout icon={InterviewGif}>
          <InterviewsAndPress />
        </Layout>
      </PageTransition>
    ),
  },
  {
    path: "/contact",
    element: (
      <PageTransition>
        <Layout icon={ContactoGif}>
          <Contact />
        </Layout>
      </PageTransition>
    ),
  },
  {
    path: "/calendar",
    element: (
      <PageTransition>
        <Layout icon={CalendarGif}>
          <Calendar />
        </Layout>
      </PageTransition>
    ),
  },
]);

function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setIsReady(true);
  }, []);

  return <>{isReady ? <RouterProvider router={router} /> : <ComingSoon />}</>;
}

export default App;
