import { sessionReducer } from "./sessions/reducer";
import { sessionListsReducer } from "./sessionLists/reducer";
import { modalReducer } from "./modal/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sessionLists: sessionListsReducer,
  sessions: sessionReducer,
  modals: modalReducer,
});

export default rootReducer;
