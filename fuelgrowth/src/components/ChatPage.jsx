import React, { useState } from "react";
import { Chat } from "./Chat";
import { ChatInput } from "./ChatInput";
import { ChatWelcome } from "./ChatWelcome";
// Chat
// Chat Input
export const ChatPage = () => {
  const [messages, setMessage] = useState([]);
  return (
    <div className="flex flex-col h-full">
      {messages.length > 0 ? (
        <Chat messages={messages} setMessage={setMessage} />
      ) : (
        <ChatWelcome />
      )}
      <ChatInput messages={messages} setMessage={setMessage} />
    </div>
  );
};
