import React from "react";
import { Message } from "./Message";

export const Chat = ({ messages, setMessage }) => {
  return (
    <div className="flex-1 overflow-auto mb-1">
      {messages.map((m) => (
        <Message key={m} message={m} />
      ))}
    </div>
  );
};
