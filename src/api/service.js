import { API_BASE } from "./config";
import api from "./instance";
export const loginAPI = (username, password) => {
  return api.post(`${API_BASE}/login`, {
    username: username,
    password: password,
  });
};
