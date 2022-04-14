import { API_BASE} from "./config";
import api from "./instance";
import axios from 'axios';


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
export function candidateAPI(endpoint, method = 'GET',body) {
  return   axios({
      method: method,
      url: `${API_BASE}/${endpoint}`,
      data: body
  })
}

export function mentorAPI( endpoint)  {
  return api.get(`${API_BASE}/${endpoint}`,null);
};

export function mentorCreate( endpoint,body)  {
  return api.post(`${API_BASE}/${endpoint}`,body);
};