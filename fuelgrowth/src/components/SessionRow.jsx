import { ROUTES } from "../constants/routes";
import { removeSession, setSessions } from "../redux/sessionLists/actions";
import { deleteChatSession } from "../services";
import { ChatBubbleLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { generatePath, Link, useNavigate, useParams } from "react-router-dom";
import { setError } from "../utils/errors";

export const SessionRow = ({
  chat_session_id,
  created,
  summary,
  title,
  updated,
}) => {
  const [isActive, setActive] = useState(false);
  const [loader, setLoader] = useState(false);
  const { sessionId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { CHAT_PAGE, DASHBOARD } = ROUTES;
  const handleDelete = async (chatSessionId, e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const result = await deleteChatSession(chatSessionId);
      dispatch(removeSession(chatSessionId));
      // Redirect to dashboard
      navigate(DASHBOARD);
    } catch (error) {
      setError(error);
    }
    setLoader(false);
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
        // className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
        //   isActive && "bg-gray-300 50"
        // }`}
        className={`flex p-2 items-center text-sm gap-3 relative rounded-md cursor-pointer break-all text-gray-900  group ${
          isActive && "bg-gray-300 pr-7"
        } ${!isActive && "hover:bg-gray-100"}`}
      >
        {/* <ChatBubbleLeftIcon className="h-4 w-4" /> */}
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <div
          className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"
          title={summary}
        >
          {summary}
          {isActive && (
            <div className="absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-gray-300 "></div>
          )}
        </div>
        {isActive && (
          <div className="absolute flex right-1 z-10 text-gray-700/50 visible">
            {/* <button className="p-1 hover:text-white">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button> */}
            <button
              className="p-1 hover:text-black"
              onClick={(e) => handleDelete(chat_session_id, e)}
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        )}
      </Link>
    </li>
  );
};
