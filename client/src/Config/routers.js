import { lazy } from "react";
import { route } from "../Helpers/utils";
import Login from "../Components/Pages/Login";
const App = lazy(() => import("../Components/Pages/App"));

const routers = [
  route("/", { component: App }),
  route("/login", { component: Login, redirect: true, layout: false })
];

export default routers;
