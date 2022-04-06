import { API_BASE } from "./config";
import api from "./instance";
import axios from 'axios';


export const loginAPI = (username, password) => {
  return api.post(`${API_BASE}/auth/login`, {
    username: username,
    password: password,
  });
};

export function candidateAPI(endpoint, method = 'GET',body) {
  return   axios({
      method: method,
      url: `${API_BASE}/${endpoint}`,
      data: body
  })
}

