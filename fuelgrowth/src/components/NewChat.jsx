import { ROUTES } from "../constants/routes";
import { addSession } from "../redux/sessionLists/actions";
import { createSessionWithoutPrompt } from "../services";
import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { setError } from "../utils/errors";

export default function NewChat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { CHAT_PAGE } = ROUTES;
  const createNewSession = async (e) => {
    e.preventDefault();
    try {
      const result = await createSessionWithoutPrompt();

      dispatch(addSession(result.data));

      const { chat_session_id } = result.data;
      navigate(
        generatePath(CHAT_PAGE, {
          sessionId: chat_session_id,
        })
      );
    } catch (error) {
      setError(error);
    }
  };
  return (
    <li onClick={(e) => createNewSession(e)}>
      <a
        href="#"
        className="border-grey-700 border flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <PlusIcon className="h-5 w-5" />
        <span className="ml-3">New Chat</span>
      </a>
    </li>
  );
}
