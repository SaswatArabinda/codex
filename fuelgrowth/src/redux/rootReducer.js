import { messageReducer } from "./messages/reducer";
import { sessionReducer } from "./sessions/reducer";
import { modalReducer } from "./modal/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sessions: sessionReducer,
  messages: messageReducer,
  modals: modalReducer,
});

export default rootReducer;
