import { createHash } from "../../utils/createHash";
import {
  ADD_NEW_SESSION_TO_STORE,
  ADD_MESSAGE,
  ASSIGN_SESSION_ID,
  UPDATE_MESSAGE,
} from "./actionTypes";

export const addNewSessionInStore = (sessionId, messages) => ({
  type: ADD_NEW_SESSION_TO_STORE,
  data: { sessionId, messages },
});

export const createNewMessageAndAddToSession = (
  sessionId,
  text,
  isPrompt = true
) => ({
  type: ADD_MESSAGE,
  data: {
    sessionId,
    message: {
      chat_message_id: `__chat__${createHash()}`,
      is_prompt: isPrompt,
      content: { data: text, type: "STRING" },
    },
  },
});

export const pushMessageToSession = (sessionId, message) => ({
  type: ADD_MESSAGE,
  data: { sessionId, message },
});

export const assignSessionID = (sessionId) => ({
  type: ASSIGN_SESSION_ID,
  data: { sessionId },
});

export const updateMessageForSession = (sessionId, messageId, data) => {
  return {
    type: UPDATE_MESSAGE,
    data: { sessionId, messageId, data },
  };
};
