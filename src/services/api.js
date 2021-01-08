import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://crudcrud.com/api/bc2d4bc3a85441f3ac6a81d45aaa0a28/"
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
