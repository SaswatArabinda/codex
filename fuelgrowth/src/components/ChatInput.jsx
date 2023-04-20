import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ChatInput = ({ messages, setMessage }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage([...messages, { prompt, isChatGPT: false }]);
    setPrompt("");
    const response = await fetch("https://codex-2p0v.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim();
      console.log(parsedData);
      setResponse([{ prompt: parsedData, isChatGPT: true }]);
    } else {
      setResponse([{ prompt: "Something went wrong", isChatGPT: true }]);
    }
  };

  useEffect(() => {
    setMessage([...messages, ...response]);
  }, [response]);

  return (
    <div className="bg-gray-300/50  rounded-lg text-sm flex">
      <form className="p-5 space-x-5 flex-1 flex" onSubmit={handleSubmit}>
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-700"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here...."
        />
        <button
          type="submit"
          disabled={!prompt}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-700 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
};
