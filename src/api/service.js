import { API_BASE, API_CANDI } from "./config";
import api from "./instance";
import axios from 'axios';


export const loginAPI = (username, password) => {
  return api.post(`${API_BASE}/login`, {
    username: username,
    password: password,
  });
};

export function candidateAPI(endpoint, method = 'GET',body) {
  return   axios({
      method: method,
      url: `${API_CANDI}/${endpoint}`,
      data: body
  })
  .catch ((e) => {
    alert.error('Lỗi kết nối');
  })
}
