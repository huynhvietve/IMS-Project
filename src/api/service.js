import { API_BASE, API_BASE1 } from "./config";
import api from "./instance";
import axios from "axios";

export const loginAPI = (username, password) => {
  return api.post(`${API_BASE}/auth/login`, {
    username: username,
    password: password,
  });
};
export function batchAPI(endpoint) {
  return api.get(`${API_BASE}/${endpoint}`, null);
}
export function batchHome(endpoint) {
  return api.get(`${API_BASE}/${endpoint}`, null);
}
export function batchCreate(endpoint, body) {
  return api.post(`${API_BASE}/${endpoint}`, body);
}
export function candidateAPI(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${API_BASE1}/${endpoint}`,
    data: body,
  });
}

export function mentorAPI(endpoint) {
  return api.get(`${API_BASE}/${endpoint}`, null);
}

export function mentorCreate(endpoint, body) {
  return api.post(`${API_BASE}/${endpoint}`, body);
}

export const sendEmail = (data) => {
  return api.post(`http://10.78.0.165:5000/sendeMail/`, data);
};

export const saveDataInterview = (id, data) => {
  return api.put(`http://10.78.0.165:5000/candidate/${id}`, data);
};
