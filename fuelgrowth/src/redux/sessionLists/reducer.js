import {
  GET_SESSIONS,
  SET_SESSIONS,
  ADD_SESSION,
  REMOVE_SESSION,
} from "./actionTypes";

const initialState = {
  sessionLists: [],
};

export const sessionListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSIONS: {
      return {
        sessionLists: [...state.sessionLists],
      };
    }
    case SET_SESSIONS: {
      const { sessions } = action.data;
      return {
        sessionLists: [...sessions],
      };
    }
    case ADD_SESSION: {
      const { session } = action.data;

      return {
        sessionLists: [session, ...state.sessionLists],
      };
    }
    case REMOVE_SESSION: {
      const { sessionId } = action.data;

      const filteredSessions = state.sessionLists.filter(
        (session) => session.chat_session_id !== sessionId
      );
      return {
        sessionLists: [...filteredSessions],
      };
    }
    default:
      return state;
  }
};

export default sessionListsReducer;
