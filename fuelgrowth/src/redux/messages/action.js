import { createHash } from "../../utils/createHash";
import { SET_MESSAGES, ADD_MESSAGE, ASSIGN_SESSION_ID } from "./actionTypes";

export const setMessages = (sessionId, messages) => ({
  type: SET_MESSAGES,
  data: { sessionId, messages },
});

export const addChatMessage = (sessionId, text, isPrompt = true) => ({
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

export const addMessage = (sessionId, message) => ({
  type: ADD_MESSAGE,
  data: { sessionId, message },
});

export const assignSessionID = (sessionId) => ({
  type: ASSIGN_SESSION_ID,
  data: { sessionId },
});
