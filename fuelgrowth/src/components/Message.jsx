import bot from "../assets/bot.svg";
import user from "../assets/user.svg";
import { ComputerDesktopIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import TypeWriter from "typewriter-effect";

export const Message = ({ message }) => {
  const { chat_message_id, content, is_prompt } = message;
  const { type, data } = content ?? {};

  return (
    <div className={`py-5 ${!is_prompt && "bg-[#dadbde]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        {is_prompt ? (
          <UserCircleIcon className="h-8 w-8" />
        ) : (
          <ComputerDesktopIcon className="h-8 w-8" />
        )}

        <p className="pt-1 text-sm ">{data}</p>
        {/* {is_prompt ? (
          
        ) : (
          <p className="pt-1 text-sm ">
            <TypeWriter
              options={{ cursor: "", delay: 30 }}
              onInit={(typeWriter) => typeWriter.typeString(data).start()}
            />
          </p>
        )} */}
      </div>
    </div>
  );
};
