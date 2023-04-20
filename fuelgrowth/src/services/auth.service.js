import http from "../utils/http-client";
import { API_ROUTES } from "../constants/routes";

const { LOGIN, REGISTER, ROLES, LOGOUT, CHAT_SESSIONS } = API_ROUTES;
const login = (data) => {
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

const register = (data) => {
  return http.post(REGISTER, data);
};

const getRoles = () => {
  return http.get(ROLES);
};

const getChatSessions = () => {
  return http.get(CHAT_SESSIONS);
};

const logout = () => {
  return http.get(LOGOUT, null, {
    transformResponse: [
      (result) => {
        localStorage.removeItem("authUser");
        return JSON.parse(result);
      },
    ],
  });
};

const getAuthUser = () => {
  return JSON.parse(localStorage.getItem("authUser"));
};

const methods = {
  login,
  register,
  getRoles,
  getChatSessions,
  logout,
  getAuthUser,
};

export default methods;
