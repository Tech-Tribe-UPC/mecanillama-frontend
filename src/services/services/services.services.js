import http from "../../core/services/http-common";

export class ServicesApiService {
  getById(id) {
    return http.get(`/services/${id}`);
  }
  getByMechanicId(mechanicId) {
    return http.get(`/mechanics/${mechanicId}/services`);
  }
  create(data) {
    return http.post("/services", data);
  }
  update(id, data) {
    return http.put(`/services/${id}`, data);
  }
  delete(id) {
    return http.delete(`/services/${id}`);
  }
}
