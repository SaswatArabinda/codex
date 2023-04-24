import { ComputerDesktopIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  LineChartComponent,
  BarChartComponent,
  PieChartComponent,
} from "./ReactCharts";
import { TableMessage } from "./ReactTable";
import { ChatLoader } from "./ChatLoader";

// import TypeWriter from "typewriter-effect";

/* <TypeWriter
  options={{ cursor: "", delay: 30 }}
  onInit={(typeWriter) => typeWriter.typeString(data).start()}
/> */

export const PromptLoader = () => {
  return (
    <>
      <ComputerDesktopIcon
        className="md:h-8 md:w-8 h-6 w-6"
        style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
      />
      <ChatLoader />
    </>
  );
};

export const PromptText = ({ type, data }) => {
  return (
    <>
      <UserCircleIcon
        className="md:h-8 md:w-8 h-6 w-6"
        style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
      />

      {type === "STRING" && <p className="pt-1 text-sm ">{data}</p>}
    </>
  );
};

export const PromptResponse = ({ type, data }) => {
  return (
    <>
      <ComputerDesktopIcon
        className="md:h-8 md:w-8 h-6 w-6"
        style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
      />

      {type === "LINE_CHART" && <LineChartComponent data={data} />}
      {type === "BAR_CHART" && <BarChartComponent data={data} />}
      {type === "PIE_CHART" && <PieChartComponent data={data} />}
      {type === "TABLE" && <TableMessage data={data} />}

      {type === "STRING" && <p className="pt-1 text-sm ">{data}</p>}
    </>
  );
};

export const MessageWrapper = ({ is_prompt, children }) => {
  return (
    <div className={`py-5 ${!is_prompt && "bg-[#dadbde]"}`}>
      <div className="flex space-x-2 md:space-x-5 px-2 md:px-5 max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export const Message = ({ message, isLastElement }) => {
  const { chat_message_id, content, is_prompt } = message;
  const { type, data } = content ?? {};

  return (
    <>
      {is_prompt ? (
        <MessageWrapper is_prompt={is_prompt}>
          <PromptText type={type} data={data} />
        </MessageWrapper>
      ) : (
        <MessageWrapper is_prompt={is_prompt}>
          <PromptResponse type={type} data={data} />
        </MessageWrapper>
      )}
      {is_prompt && isLastElement ? (
        <MessageWrapper is_prompt={false}>
          <PromptLoader />
        </MessageWrapper>
      ) : null}
    </>
  );
};
