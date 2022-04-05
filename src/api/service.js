import { API_BASE } from "./config";
import api from "./instance";
import axios from "axios";
import * as Config from "./config";
export const loginAPI = (username, password) => {
  return api.post(`${API_BASE}/auth/login`, {
    username: username,
    password: password,
  });
};
export function batchAPI( endpoint)  {
  return api.get(`${API_BASE}/${endpoint}`,null);
};
export function batchCreate( endpoint, body)  {
  return api.post(`${API_BASE}/${endpoint}`,body);
};
