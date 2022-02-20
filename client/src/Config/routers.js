import { lazy } from "react";
import { route } from "../Helpers/utils";
import Login from "../Components/Pages/Login";
const App = lazy(() => import("../Components/Pages/App"));
const Projects = lazy(() => import("../Components/Pages/Projects"));
const Contact = lazy(() => import("../Components/Pages/Contact"));
const Skills = lazy(() => import("../Components/Pages/Skills"));

const resetCss = "justify-content-start align-items-start";
const routers = [
  route("/", { component: App }),
  route("/login", { component: Login, redirect: true, layout: false }),
  route("/contacto", { component: Contact }),
  route("/proyectos", {
    component: Projects,
    layoutClassName: resetCss,
  }),
  route("/habilidades", {
    component: Skills,
    layoutClassName: resetCss,
  }),
];

export default routers;
