import React from "react";

import { ChatPage } from "./ChatPage";

export const Container = () => {
  return (
    <>
      <div className="p-4 sm:ml-64 mt-14 overflow-hidden">
        <div
          className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 h-full "
          style={{ height: "90vh" }}
        >
          <ChatPage />
        </div>
      </div>
    </>
  );
};
export default Container;
