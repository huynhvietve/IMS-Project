import { API_BASE } from "./config";
import api from "./instance";
import * as Config from "./config";
import axios from "axios";
export const loginAPI = (username, password) => {
  return api.post(`${API_BASE}/auth/login`, {
    username: username,
    password: password,
  });
};
export function batchAPI( endpoint)  {
  return api.get(`${API_BASE}/${endpoint}`,null);
};
export function batchHome( endpoint)  {
  return api.get(`${API_BASE}/${endpoint}`,null);
};
export function batchCreate( endpoint, body)  {
  return api.post(`${API_BASE}/${endpoint}`,body);
};
export function mentorAPI(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_BASE}/${endpoint}`,
    data: body,
  }).catch((e) => {
    alert.error("Lỗi kết nối");
    console.log(e);
  });
}
