import React, { useState } from "react";
import { ChatBubbleLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import toast from "react-hot-toast";
import authService from "../services/auth.service";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeSession, setSessions } from "../redux/sessions/actions";

export const PreviousSessions = () => {
  const dispatch = useDispatch();
  const sessionsState = useSelector((state) => state.sessions);
  const { sessions } = sessionsState;
  const handleDelete = async (chatSessionId, e) => {
    try {
      const result = await authService.deleteChatSession(chatSessionId);
      console.log("Post delete", result);
      dispatch(removeSession(chatSessionId));
    } catch (error) {
      console.log("ERROR: ", error);
      toast.error(error.data.message);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const result = await authService.getChatSessions();

        dispatch(setSessions(result.data.results));
      } catch (error) {
        console.log("ERROR: ", error);
        toast.error(error.data.message);
      }
    })();
  }, []);

  console.log(sessions);
  return (
    <>
      {Array.isArray(sessions) &&
        sessions.map((session) => {
          const { chat_session_id, created, summary, title, updated } = session;
          return (
            <li key={`${chat_session_id}${created}`}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ChatBubbleLeftIcon className="h-4 w-4" />
                <span
                  className="flex-1 ml-3 whitespace-nowrap truncate"
                  title={summary}
                >
                  {summary}
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        3
                      </span> */}
                <TrashIcon
                  className="h-4 w-4"
                  onClick={(e) => handleDelete(chat_session_id, e)}
                />
              </a>
            </li>
          );
        })}
    </>
  );
};
