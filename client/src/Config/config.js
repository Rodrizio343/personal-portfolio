import { getToken } from "../Helpers/token";

const API_URL = process.env.REACT_APP_API_URL;
const LOGIN = `${API_URL}/login`;
const USER_INFO = `${API_URL}/user?token=${getToken()}`;
const PROJECTS = `${API_URL}/project`;

const WEB_TECHNOLOGIES = [
  "ReactJS",
  "NextJS",
  "NodeJS",
  "HTML5",
  "CSS3",
  "Javascript",
  "SASS",
  "ExpressJS",
  "MongoDB + Mongoose",
  "PHP"
];

export { API_URL, LOGIN, USER_INFO, PROJECTS, WEB_TECHNOLOGIES };