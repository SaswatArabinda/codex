import { API_ROUTES } from "../constants/routes";
import http from "../utils/http-client";
import { generatePath } from "react-router-dom";

const {
  ROLES,
  CHAT_SESSIONS,
  DELETE_CHAT_SESSION,
  CREATE_SESSION,
  GET_MESSAGES_BY_SESSION,
  ADD_MESSAGE_TO_SESSION,
  CREATE_NEW_CHAT_SESSION,
} = API_ROUTES;

export const getRoles = () => {
  return http.get(ROLES);
};

export const getChatSessions = () => {
  return http.get(CHAT_SESSIONS);
};

export const deleteChatSession = (sessionId) => {
  return http.deleteMethod(`${DELETE_CHAT_SESSION}${sessionId}`);
};

export const createSessionWithoutPrompt = () => {
  return http.post(CREATE_SESSION);
};

export const getMessagesBySession = (sessionId) => {
  return http.get(generatePath(GET_MESSAGES_BY_SESSION, { sessionId }));
};

export const postMessageToSession = (sessionId, data) => {
  return http.post(
    `${generatePath(ADD_MESSAGE_TO_SESSION, { sessionId })}/`,
    data
  );
};

export const createNewChatSession = (data) => {
  return http.post(CREATE_NEW_CHAT_SESSION, data);
};

const methods = {
  getRoles,
  getChatSessions,
  deleteChatSession,
  createSessionWithoutPrompt,
  getMessagesBySession,
  postMessageToSession,
  createNewChatSession,
};

export default methods;
