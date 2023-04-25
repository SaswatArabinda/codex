import { NEW_SESSION } from "../../constants/constant";
import { ADD_MESSAGE, SET_MESSAGES, ASSIGN_SESSION_ID } from "./actionTypes";

const initialState = {
  sessions: {},
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      const { sessionId, messages } = action.data;
      return {
        sessions: { ...state.sessions, ...{ [sessionId]: messages } },
      };
    }
    case ADD_MESSAGE: {
      const { sessionId, message } = action.data;
      const getExistingSession = state.sessions[sessionId] ?? [];
      console.log("ADD_MESSAGE", message, state.sessions);
      return {
        sessions: {
          ...state.sessions,
          ...{ [sessionId]: [...getExistingSession, message] },
        },
      };
    }

    case ASSIGN_SESSION_ID: {
      const { sessionId } = action.data;
      // const newlyCreatedSession = state.sessions["__session__"] ?? [];
      const sessions = { ...state.sessions };
      sessions[sessionId] = state.sessions[NEW_SESSION] ?? [];
      delete sessions[NEW_SESSION];

      return {
        sessions: { ...sessions },
      };
    }

    default:
      return state;
  }
};

export default sessionReducer;
