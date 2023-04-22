import { ROUTES } from "../constants/routes";
import { removeSession, setSessions } from "../redux/sessions/actions";
import authService from "../services/auth.service";
import { ChatBubbleLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { generatePath, Link, useParams } from "react-router-dom";

export const SessionRow = ({
  chat_session_id,
  created,
  summary,
  title,
  updated,
}) => {
  const [isActive, setActive] = useState(false);
  const { sessionId } = useParams();
  const dispatch = useDispatch();

  const { CHAT_PAGE } = ROUTES;
  const handleDelete = async (chatSessionId, e) => {
    e.preventDefault();
    try {
      const result = await authService.deleteChatSession(chatSessionId);

      dispatch(removeSession(chatSessionId));
    } catch (error) {
      console.log("ERROR: ", error);
      toast.error(error?.statusText || error?.message);
    }
  };

  useEffect(() => {
    if (!sessionId) return;

    setActive(sessionId === chat_session_id);
  }, [sessionId, chat_session_id]);

  return (
    <li key={`${chat_session_id}${created}`}>
      <Link
        to={generatePath(CHAT_PAGE, {
          sessionId: chat_session_id,
        })}
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
          isActive && "bg-gray-300 50"
        }`}
      >
        {/* <a href="#"> */}
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
        {/* </a> */}
      </Link>
    </li>
  );
};
