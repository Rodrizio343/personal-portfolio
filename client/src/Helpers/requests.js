import axios from 'axios';
import { LOGIN, USER_INFO } from '../Config/config';
import { getToken } from './token';

const config = () => ({
  headers: {
    Authorization: "Bearer " + getToken()
  },
});

export async function login(data) {
  const xhr = await axios.post(LOGIN, data);
  return xhr?.data?.data;
};

export async function getUserInfo() {
  if (!getToken()) return null;
  const res = await axios.get(USER_INFO, config());
  return res?.data?.data;
}