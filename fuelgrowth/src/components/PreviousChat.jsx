import React from "react";
import { ChatBubbleLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";

export const PreviousChat = () => {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <ChatBubbleLeftIcon className="h-4 w-4" />
        <span className="flex-1 ml-3 whitespace-nowrap">My previous chat</span>
        {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
        <TrashIcon className="h-4 w-4" />
      </a>
    </li>
  );
};
