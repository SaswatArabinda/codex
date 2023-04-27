import { addNewSessionInStore } from "../redux/sessions/action";
import { getMessagesBySession } from "../services";
import { Chat } from "./Chat";
import { ChatInput } from "./ChatInput";
import { ChatWelcome } from "./ChatWelcome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NEW_SESSION } from "../constants/constant";
import { setError } from "../utils/errors";
import { PageLoader } from "./Loader";
import { StaticChatpageAlert } from "./Alerts";
import { getIntegrationListsHelper } from "../helper/getIntegrationListsHelper";

// Chat
// Chat Input

export const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [loader, setLoader] = useState(false);
  const [showAlertBanner, setAlertBanner] = useState(false);
  const sessionsState = useSelector((state) => state.sessions);
  const { sessionId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionId) {
      // If there exists sessionId, then user is in chat page.
      (async () => {
        setLoader(true);
        try {
          const result = await getMessagesBySession(sessionId);
          dispatch(addNewSessionInStore(sessionId, result.data.results));
        } catch (error) {
          setError(error);
        }
        setLoader(false);
      })();
    }
  }, [sessionId, setLoader]);

  // Fetch integration list to check if user has already integrated with Omnirio platform
  useEffect(() => {
    (async () => {
      try {
        // Fetch the integration lists
        const result = await getIntegrationListsHelper();

        // Loop through the integration and check if omnirio integration already done
        result.forEach((list) => {
          console.log(list);
          if (list.name === "Omnirio") {
            setAlertBanner(!list.is_integrated);
          }
        });
      } catch (error) {
        setError(error);
      }
    })();
  }, [setAlertBanner]);

  let messages = [];

  if (sessionId) {
    // Chat session page
    messages = sessionsState.sessions[sessionId];
  } else {
    // Home page - Dashboard messages
    messages = sessionsState.sessions[NEW_SESSION];
  }

  const chatInputProps = {
    prompt,
    setPrompt,
  };
  const chatWelcomeProps = {
    setPrompt,
  };

  return (
    <>
      <div className="w-full mt-14 overflow-hidden relative">
        <div style={{ height: "90vh" }}>
          {/* Show loader when `loader` is true and there should not any previous chat sessions */}
          {loader && !(Array.isArray(messages) && messages.length > 0) ? (
            <PageLoader />
          ) : (
            <div className="flex flex-col h-full">
              {/* Alert badge */}
              {showAlertBanner && <StaticChatpageAlert />}

              {/* Load chat data */}
              {Array.isArray(messages) && messages.length > 0 ? (
                <Chat messages={messages} />
              ) : (
                <ChatWelcome {...chatWelcomeProps} />
              )}
              <ChatInput {...chatInputProps} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default ChatPage;
