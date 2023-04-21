import http from "../utils/http-client";
import { API_ROUTES } from "../constants/routes";

const {
  LOGIN,
  REGISTER,
  ROLES,
  LOGOUT,
  CHAT_SESSIONS,
  DELETE_CHAT_SESSION,
  CREATE_SESSION,
} = API_ROUTES;

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

const deleteChatSession = (sessionId) => {
  return http.deleteMethod(`${DELETE_CHAT_SESSION}${sessionId}`);
};

const createSessionWithoutPrompt = () => {
  return http.post(CREATE_SESSION);
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
  deleteChatSession,
  createSessionWithoutPrompt,
};

export default methods;
