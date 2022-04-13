import api from "../../api/instance";
import { API_BASE } from "../../api/config";

export class CandiService {
  getCandi() {
    return api.get(API_BASE);
  }
  deleteCandi(idCandidate) {
    return api.delete(`${API_BASE}/candidate/${idCandidate}`);
  }
  updateCandi(idCandidate, item) {
    return api.put(`${API_BASE}/${idCandidate}`, item);
  }
}