import { Message } from "./Message";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const Chat = ({ messages }) => {
  const bottomDiv = useRef(null);
  const scrollToBottom = () => {
    bottomDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom());

  return (
    <div className="flex-1 overflow-auto mb-1 overflow-x-hidden">
      {messages.map((message) => (
        <Message key={message.chat_message_id} message={message} />
      ))}

      <div style={{ float: "left", clear: "both" }} ref={bottomDiv}></div>
    </div>
  );
};
