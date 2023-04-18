import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function NewChat() {
  return (
    // <div className="border-grey-700 border chatRow">
    //   <PlusIcon className="h-4 w-4" />
    //   <p>New Chat</p>
    // </div>

    <li>
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
