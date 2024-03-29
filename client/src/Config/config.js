import { getToken } from "../Helpers/token";

const API_URL = process.env.REACT_APP_API_URL;
const LOGIN = `${API_URL}/login`;
const USER_INFO = `${API_URL}/user?token=${getToken()}`;
const PROJECTS = `${API_URL}/project`;

const WEB_TECHNOLOGIES = [
  "ReactJS",
  "NextJS",
  "Redux",
  "Storybook",
  "NodeJS",
  "HTML5",
  "CSS3",
  "Javascript",
  "SASS",
  "ExpressJS",
  "MongoDB + Mongoose",
  "PHP",
  "Lumen",
  "GraphQL",
  "TypeScript",
  "StyledComponents"
];

// email config
const EMAILJS = {
  SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID_FOR_USER: process.env.REACT_APP_TEMPLATE_ID_FOR_USER,
  TEMPLATE_ID_FOR_ME: process.env.REACT_APP_TEMPLATE_ID_FOR_ME,
  USER_ID: process.env.REACT_APP_USER_ID,
};

export { API_URL, LOGIN, USER_INFO, PROJECTS, WEB_TECHNOLOGIES, EMAILJS };