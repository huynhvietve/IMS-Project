import api from "../../api/instance";
import { API_BASE2 } from "../../api/config";

export class CandiService {

  deleteCandi(idCandidate) {
    return api.delete(`${API_BASE2}/candidate/${idCandidate}`);
  }
  updateCandi(idCandidate, item) {
    return api.put(`${API_BASE2}/${idCandidate}`, item);
  }
}