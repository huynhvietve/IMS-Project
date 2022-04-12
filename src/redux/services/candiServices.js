import api from "../../api/instance";
import { API_BASE2 } from "../../api/config";

export class CandiService {
  getCandi() {
    return api.get(API_BASE2);
  }
  deleteCandi(idCandidate) {
    return api.delete(`${API_BASE2}/candidate/${idCandidate}`);
  }
}