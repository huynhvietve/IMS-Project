import { API_LOGIN } from "./config";
import api from "./instance";
export const loginAPI = (username, password) => {
  return api.post(`${API_LOGIN}/login`, {
    username: username,
    password: password,
  });
};
