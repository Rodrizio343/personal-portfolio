import { getToken } from "../Helpers/token";

const API_URL = process.env.REACT_APP_API_URL;
const LOGIN = `${API_URL}/login`;
const USER_INFO = `${API_URL}/user?token=${getToken()}`;

export { API_URL, LOGIN, USER_INFO };