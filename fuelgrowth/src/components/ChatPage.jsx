import { setMessagesToSession } from "../redux/sessions/action";
import { getMessagesBySession } from "../services";
import { Chat } from "./Chat";
import { ChatInput } from "./ChatInput";
import { ChatWelcome } from "./ChatWelcome";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NEW_SESSION } from "../constants/constant";

// Chat
// Chat Input

export const ChatPage = () => {
  const sessionsState = useSelector((state) => state.sessions);
  const { sessionId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionId) {
      // If there exists sessionId, then user is in chat page.
      (async () => {
        try {
          const result = await getMessagesBySession(sessionId);

          dispatch(setMessagesToSession(sessionId, result.data.results));
        } catch (error) {
          console.log("ERROR: ", error);
          toast.error(error?.statusText || error?.message);
        }
      })();
    }
  }, [sessionId]);

  let messages = [];

  if (sessionId) {
    // Chat session page
    messages = sessionsState.sessions[sessionId];
  } else {
    // Home page - Dashboard messages
    messages = sessionsState.sessions[NEW_SESSION];
  }

  console.log(messages);
  return (
    <>
      <div className="p-4 w-full mt-14 overflow-hidden">
        <div
          // className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 h-full "
          style={{ height: "90vh" }}
        >
          <div className="flex flex-col h-full">
            {Array.isArray(messages) && messages.length > 0 ? (
              <Chat messages={messages} />
            ) : (
              <ChatWelcome />
            )}
            <ChatInput />
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatPage;
