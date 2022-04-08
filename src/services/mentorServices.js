import api from "../api/instance";
import { API_BASE,API_Mentor } from "../api/config";
export class MentorService {
  getMentor() {
    return api.get(API_BASE);
  }
  deleteMentor(id) {
    return api.delete(`${API_Mentor}/mentor/${id}`);
  }
}
