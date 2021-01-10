import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://crudcrud.com/api/65bb8f974e064a4687ecab14731b0c74/"
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
