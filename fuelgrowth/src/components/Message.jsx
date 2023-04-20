import { ComputerDesktopIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import bot from "../assets/bot.svg";
import user from "../assets/user.svg";
import TypeWriter from "typewriter-effect";

export const Message = ({ message }) => {
  const { isChatGPT, prompt } = message;
  return (
    <div className={`py-5 ${isChatGPT && "bg-[#dadbde]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        {isChatGPT ? (
          <UserCircleIcon className="h-8 w-8" />
        ) : (
          <ComputerDesktopIcon className="h-8 w-8" />
        )}

        {isChatGPT ? (
          <p className="pt-1 text-sm ">
            <TypeWriter
              options={{ cursor: "", delay: 30 }}
              onInit={(typeWriter) => typeWriter.typeString(prompt).start()}
            />
          </p>
        ) : (
          <p className="pt-1 text-sm ">{prompt}</p>
        )}
      </div>
    </div>
  );
};
