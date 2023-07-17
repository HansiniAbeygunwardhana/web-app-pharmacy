import axios from "axios";

const FILE_BASE_REST_API_URL = "http://localhost:8080/api/v1/files";

class FileService {
  static getAllFiles() {
    return axios.get(`${FILE_BASE_REST_API_URL}`);
  }

  static createfile(file) {
    return axios.post(`${FILE_BASE_REST_API_URL}/upload`, file);
  }
}

export default FileService;
