import { API_ROUTES } from "../constants/routes";
import http from "../utils/http-client";
import { generatePath } from "react-router-dom";

const { LOGIN, REGISTER, LOGOUT } = API_ROUTES;

export const login = (data) => {
  return http.post(LOGIN, data, {
    transformResponse: [
      (result) => {
        const parsed = JSON.parse(result);

        localStorage.setItem("authUser", JSON.stringify(parsed));
        return parsed;
      },
    ],
  });
};

export const register = (data) => {
  return http.post(REGISTER, data);
};

export const logout = () => {
  return http.post(LOGOUT, null, {
    transformResponse: [
      (result) => {
        localStorage.removeItem("authUser");
        return JSON.parse(result);
      },
    ],
  });
};

export const getAuthUser = () => {
  return JSON.parse(localStorage.getItem("authUser"));
};

const methods = {
  login,
  register,
  logout,
  getAuthUser,
};

export default methods;
