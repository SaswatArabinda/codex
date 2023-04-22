export const API_ROUTES = {
  ROLES: "v1/roles/",

  LOGIN: "v1/login/",
  REGISTER: "v1/register/",
  LOGOUT: "v1/logout/",

  CHAT_SESSIONS: "v1/chat/sessions/",
  DELETE_CHAT_SESSION: "v1/chat/sessions/",
  CREATE_SESSION: "v1/chat/sessions/",

  GET_MESSAGES_BY_SESSION: "v1/chat/sessions/:sessionId/messages/",
  ADD_MESSAGE_TO_SESSION: "v1/chat/sessions/:sessionId/messages/",
  CREATE_NEW_CHAT_SESSION: "v1/chat/messages/",
};

export const ROUTES = {
  DASHBOARD: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  CHAT_PAGE: "/chat/:sessionId",
};
