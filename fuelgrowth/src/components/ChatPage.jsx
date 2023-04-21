import React, { useState } from "react";
import { Chat } from "./Chat";
import { ChatInput } from "./ChatInput";
import { ChatWelcome } from "./ChatWelcome";
// Chat
// Chat Input

export const ChatPage = () => {
  const [messages, setMessage] = useState([]);
  return (
    <>
      <div className="p-4 sm:ml-64 mt-14 overflow-hidden">
        <div
          className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 h-full "
          style={{ height: "90vh" }}
        >
          <div className="flex flex-col h-full">
            {messages.length > 0 ? (
              <Chat messages={messages} setMessage={setMessage} />
            ) : (
              <ChatWelcome />
            )}
            <ChatInput messages={messages} setMessage={setMessage} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatPage;
