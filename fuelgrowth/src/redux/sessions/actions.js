import {
  ADD_SESSION,
  GET_SESSIONS,
  REMOVE_SESSION,
  SET_SESSIONS,
} from "./actionTypes";

export const getSessions = () => ({
  type: GET_SESSIONS,
  data: {},
});

export const setSessions = (sessions) => ({
  type: SET_SESSIONS,
  data: { sessions },
});

export const addSession = (session) => ({
  type: ADD_SESSION,
  data: { session },
});

export const removeSession = (sessionId) => ({
  type: REMOVE_SESSION,
  data: { sessionId },
});
