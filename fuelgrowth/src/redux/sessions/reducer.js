import { NEW_SESSION } from "../../constants/constant";
import {
  ADD_MESSAGE,
  ADD_NEW_SESSION_TO_STORE,
  ASSIGN_SESSION_ID,
  UPDATE_MESSAGE,
} from "./actionTypes";

const initialState = {
  sessions: {},
};

// Mostly used in side bar where we fetch session details
export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_SESSION_TO_STORE: {
      const { sessionId, messages } = action.data;
      return {
        sessions: { ...state.sessions, ...{ [sessionId]: messages } },
      };
    }
    case ADD_MESSAGE: {
      const { sessionId, message } = action.data;
      const getExistingSession = state.sessions[sessionId] ?? [];

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

    case UPDATE_MESSAGE: {
      // Updates particular message of session
      const { sessionId, messageId, data } = action.data;

      return {
        sessions: {
          ...state.sessions,
          ...{
            [sessionId]: state.sessions[sessionId].map((message, i) => {
              if (message.chat_message_id == messageId) {
                return { ...message, ...data };
              }
              return message;
            }),
          },
        },
      };
    }

    default:
      return state;
  }
};

export default sessionReducer;
