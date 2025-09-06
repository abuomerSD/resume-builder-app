import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Summary from "../components/Summary";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Languages from "../components/Languages";
import App from "../App";

const routes: RouteObject[] = [
  {
    path: "/summary",
    element: <Summary />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/certifications",
    element: <Certifications />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/languages",
    element: <Languages />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

export default router;
