import { lazy } from "react";
import { route } from "../Helpers/utils";
const App = lazy(() => import("../Components/Pages/App"));

const routers = [
  route("/", { component: App })
];

export default routers;
