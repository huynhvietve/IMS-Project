import { API_BASE } from "./config";
import api from "./instance";
import axios from "axios";
import * as Config from "./config";
export const loginAPI = (username, password) => {
  return api.post(`${API_BASE}/login`, {
    username: username,
    password: password,
  });
};
export function  CallAPI(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch((e) => {
    console.error("lỗi kết nối");
  });
}
