import { ROUTES } from "../constants/routes";
import {
  addMessage,
  addPromptMessage,
  assignSessionID,
} from "../redux/messages/action";
import authService from "../services/auth.service";
import { createHash } from "../utils/createHash";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";

export const ChatInput = () => {
  const { CHAT_PAGE } = ROUTES;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sessionId) {
      // Incase of existing session, call addMessageToSession
      try {
        dispatch(addPromptMessage(sessionId, prompt));
        const result = await authService.addMessageToSession(sessionId, {
          content: prompt,
          is_prompt: true,
        });

        dispatch(addMessage(sessionId, result.data));
      } catch (error) {
        console.log("ERROR: ", error);
        toast.error(error.statusText || error.message);
      }
    } else {
      // Create a new session and add message to that session
      const newSessionId = `__session__`;
      dispatch(addPromptMessage(newSessionId, prompt));
      const result = await authService.createNewChatSession({
        content: prompt,
        is_prompt: true,
      });

      // Replace the session with ID: __session__ with newly created session
      const { session_id } = result.data;
      dispatch(assignSessionID(session_id));
      // Add message to the session
      dispatch(addMessage(session_id, result.data));
      // Redirect the user to the new session
      navigate(
        generatePath(CHAT_PAGE, {
          sessionId: session_id,
        })
      );
      // update the session store
    }

    setPrompt("");
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
        />
        <button
          type="submit"
          disabled={!prompt}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-700 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
};
