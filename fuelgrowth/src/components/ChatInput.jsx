import { ROUTES } from "../constants/routes";
import {
  pushMessageToSession,
  createNewMessageAndAddToSession,
  assignSessionID,
} from "../redux/sessions/action";
import { setSessions } from "../redux/sessionLists/actions";
import {
  postMessageToSession,
  createNewChatSession,
  getAuthUser,
  getChatSessions,
} from "../services";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { NEW_SESSION } from "../constants/constant";
import { setError } from "../utils/errors";
// import { setErrorWhileFetchingMEssages } from "../redux/common/action";

export const ChatInput = () => {
  const { CHAT_PAGE } = ROUTES;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const [prompt, setPrompt] = useState("");
  const [loader, setLoader] = useState(false);
  const authUser = getAuthUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(setErrorWhileFetchingMEssages(false));
    if (!prompt.trim()) return;
    const text = prompt.trim();

    try {
      setLoader(true);

      if (sessionId) {
        // Incase of existing session, call pushMessageToSession
        dispatch(createNewMessageAndAddToSession(sessionId, text));

        const result = await postMessageToSession(sessionId, {
          content: text,
          is_prompt: true,
        });

        dispatch(pushMessageToSession(sessionId, result.data));
      } else {
        // Create a new session and add message to that session
        dispatch(createNewMessageAndAddToSession(NEW_SESSION, text));
        const result = await createNewChatSession({
          content: text,
          is_prompt: true,
        });

        // Replace the session with ID: __session__ with newly created session
        const { session_id } = result.data;
        dispatch(assignSessionID(session_id));
        // Add message to the session
        dispatch(pushMessageToSession(session_id, result.data));
        // Redirect the user to the new session
        navigate(
          generatePath(CHAT_PAGE, {
            sessionId: session_id,
          })
        );
        // update the session store

        const chatSessionsData = await getChatSessions();

        dispatch(setSessions(chatSessionsData.data.results));
      }
    } catch (error) {
      setError(error);
      // Create a new session and add ERROR message to that session
      dispatch(
        createNewMessageAndAddToSession(
          sessionId ? sessionId : NEW_SESSION,
          "Something went wrong!",
          false
        )
      );
    }
    setPrompt("");
    setLoader(false);
  };

  return (
    <div className="bg-gray-300/50  rounded-lg text-sm flex">
      <form className="p-5 space-x-5 flex-1 flex" onSubmit={handleSubmit}>
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-700"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here...."
          disabled={!authUser || loader}
        />
        <button
          type="submit"
          disabled={!prompt || !authUser || loader}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-700 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
};
