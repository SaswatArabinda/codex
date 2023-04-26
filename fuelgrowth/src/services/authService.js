import { API_ROUTES } from "../constants/routes";
import http from "../utils/http-client";
import { generatePath } from "react-router-dom";

const { LOGIN, REGISTER, LOGOUT } = API_ROUTES;

const addAuthDetailsInLocalStorage = (result) => {
  const parsed = JSON.parse(result);
  console.log("Has JWT token", !!parsed.refresh);
  if (parsed.refresh) localStorage.setItem("authUser", JSON.stringify(parsed));
  return parsed;
};

export const login = (data) => {
  return http.post(LOGIN, data, {
    transformResponse: [addAuthDetailsInLocalStorage],
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
