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

export function batchPut( endpoint, body)  {
  return api.put(`${API_BASE}/${endpoint}`,body);
};
export function deleteBatch( endpoint)  {
  return api.delete(`${API_BASE}/${endpoint}`,null);
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
export function mentorDG( endpoint)  {
  return api.get(`${API_BASE}/${endpoint}`,null);
};
export function student( endpoint)  {
  return api.get(`${API_BASE}/${endpoint}`,null);
};
export function studentCreate( endpoint, body)  {
  return api.post(`${API_BASE}/${endpoint}`,body);
};
export function dg( endpoint)  {
  return api.get(`${API_BASE}/${endpoint}`,null);
};
export function deleteStudent( endpoint)  {
  return api.delete(`${API_BASE}/${endpoint}`,null);
};
export function editStudent( endpoint, body)  {
  return api.put(`${API_BASE}/${endpoint}`,body);
};