import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://crudcrud.com/api/12d80a50f60e47fe9b6d38c5a0b4092e/"
});

const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
};

export default api;
