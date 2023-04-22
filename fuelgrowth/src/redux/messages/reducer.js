import { ADD_MESSAGE, SET_MESSAGES, ASSIGN_SESSION_ID } from "./actionTypes";

const initialState = {
  messages: {},
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      const { sessionId, messages } = action.data;
      return {
        messages: { ...state.messages, ...{ [sessionId]: messages } },
      };
    }
    case ADD_MESSAGE: {
      const { sessionId, message } = action.data;
      const getExistingSession = state.messages[sessionId] ?? [];

      return {
        messages: {
          ...state.messages,
          ...{ [sessionId]: [...getExistingSession, message] },
        },
      };
    }

    case ASSIGN_SESSION_ID: {
      const { sessionId } = action.data;
      // const newlyCreatedSession = state.messages["__session__"] ?? [];
      const messages = { ...state.messages };
      messages[sessionId] = state.messages["__session__"] ?? [];
      delete messages["__session__"];

      return {
        messages: { ...messages },
      };
    }

    default:
      return state;
  }
};

export default messageReducer;
