import { API_ROUTES } from "../constants/routes";
import http from "../utils/http-client";
import { generatePath } from "react-router-dom";

const {
  LOGIN,
  REGISTER,
  ROLES,
  LOGOUT,
  CHAT_SESSIONS,
  DELETE_CHAT_SESSION,
  CREATE_SESSION,
  GET_MESSAGES_BY_SESSION,
  ADD_MESSAGE_TO_SESSION,
  CREATE_NEW_CHAT_SESSION,
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

const getMessagesBySession = (sessionId) => {
  return http.get(generatePath(GET_MESSAGES_BY_SESSION, { sessionId }));
};

const addMessageToSession = (sessionId, data) => {
  return http.post(
    `${generatePath(ADD_MESSAGE_TO_SESSION, { sessionId })}/`,
    data
  );
};

const createNewChatSession = (data) => {
  return http.post(CREATE_NEW_CHAT_SESSION, data);
};

const logout = () => {
  return http.post(LOGOUT, null, {
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
  getMessagesBySession,
  addMessageToSession,
  createNewChatSession,
};

export default methods;
