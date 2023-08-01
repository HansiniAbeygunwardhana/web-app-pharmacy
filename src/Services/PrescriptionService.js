import axios from "axios";
import { api } from "../Auth/AuthInterceptor";

const PRESCRIPTION_BASE_REST_API_URL =
  "http://localhost:8080/api/v1/prescriptions";

class PrescriptionService {
  static createPrescription(prescription) {
    return api.post(`${PRESCRIPTION_BASE_REST_API_URL}/add`, prescription);
  }
  static getPrescriptionDetails() {
    return api.get(`${PRESCRIPTION_BASE_REST_API_URL}/getPrescriptionDetails`);
  }
  static getAllPrescriptionDetails() {
    return api.get(`${PRESCRIPTION_BASE_REST_API_URL}/all`);
  }
}

export default PrescriptionService;
