import axios from "axios";
import authService from "../services/authService";
import { setError } from "./errors";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const authUser = authService.getAuthUser();
    if (authUser) {
      config.headers["authorization"] = `Bearer ${authUser.access}`;
    }
    return config;
  },
  (error) => {
    setError(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("authUser");
      window.location.reload();
    } else {
      return Promise.reject(error.response);
    }
  }
);

const get = (url, params, config = {}) =>
  instance.get(url, { params, ...config });
const post = (url, data, config = {}) => instance.post(url, data, config);
const deleteMethod = (url, params, config = {}) =>
  instance.delete(url, params, config);
const put = (url, params, config = {}) => instance.put(url, params, config);

const methods = { get, post, deleteMethod, put };

export default methods;
