import { combineReducers } from "redux";
import {
  GET_SESSIONS,
  SET_SESSIONS,
  ADD_SESSION,
  REMOVE_SESSION,
} from "./actionTypes";

const initialState = {
  sessions: [],
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSIONS: {
      return {
        sessions: [...state.sessions],
      };
      break;
    }
    case SET_SESSIONS: {
      const { sessions } = action.data;
      return {
        sessions: [...sessions],
      };
      break;
    }
    case ADD_SESSION: {
      const { session } = action.data;

      return {
        sessions: [session, ...state.sessions],
      };
      break;
    }
    case REMOVE_SESSION: {
      const { sessionId } = action.data;

      const filteredSessions = state.sessions.filter(
        (session) => session.chat_session_id !== sessionId
      );
      return {
        sessions: [...filteredSessions],
      };
      break;
    }
    default:
      return state;
  }
};

export default sessionReducer;
