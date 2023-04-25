import { ComputerDesktopIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import {
  LineChartComponent,
  BarChartComponent,
  PieChartComponent,
} from "./ReactCharts";
import { TableMessage } from "./ReactTable";
import { ChatLoader } from "./Loader";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/modal/action";
import { MODALS } from "../constants/enums";
import { sendFeedback } from "../services/messageService";
import { updateMessageForSession } from "../redux/sessions/action";

// import { useSelector } from "react-redux";

// import TypeWriter from "typewriter-effect";

/* <TypeWriter
  options={{ cursor: "", delay: 30 }}
  onInit={(typeWriter) => typeWriter.typeString(data).start()}
/> */

export const RowFeedback = ({
  chat_message_id,
  thumbs_up,
  thumbs_down,
  remarks,
  session,
}) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const handleThumbsUpClick = async (e) => {
    e.preventDefault();
    try {
      // Show loader/disable the buttons
      setLoader(true);
      // Send feedback
      await sendFeedback(chat_message_id, {
        thumbs_up: true,
      });

      // Refresh the session
      dispatch(
        updateMessageForSession(session, chat_message_id, {
          thumbs_up: true,
          thumbs_down: false,
        })
      );
    } catch (error) {
      console.log("ERROR: ", error);
      toast.error(error?.statusText || error?.message);
    }

    // Hide loader
    setLoader(false);
  };

  const handleThumbsDownClick = (e) => {
    e.preventDefault();
    dispatch(
      showModal({
        name: MODALS.FEEDBACK_MODAL,
        data: {
          chat_message_id,
          thumbs_up,
          thumbs_down,
          remarks,
          session,
        },
      })
    );
  };
  return (
    <div className="flex justify-between lg:block">
      <div className="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
        {/* <button className="flex ml-auto gap-2 h-full w-full rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        </button> */}
        <button
          className="p-1 rounded-md hover:bg-gray-100 disabled:bg-gray-200 disabled:text-green-700 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
          onClick={(e) => handleThumbsUpClick(e)}
          disabled={thumbs_up || loader}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        </button>
        <button
          className="p-1 rounded-md hover:bg-gray-100 disabled:bg-gray-200 disabled:text-red-700 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
          onClick={(e) => handleThumbsDownClick(e)}
          disabled={thumbs_down}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export const RowTemplate = ({ leftContent, bodyContent, rightContent }) => {
  return (
    <>
      <div className="w-[30px] flex flex-col relative items-end">
        <div
          className="relative h-[30px] w-[30px] p-1 rounded-sm text-gray-400 flex items-center justify-center"
          // style={{ backgroundColor: "rgb(16, 163, 127)" }}
        >
          {leftContent}
        </div>
      </div>
      <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
        <div className="flex flex-grow flex-col gap-3 justify-end">
          <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap break-words">
            <div className="markdown prose w-full break-words dark:prose-invert light">
              {bodyContent}
            </div>
          </div>
        </div>
        {rightContent}
      </div>
    </>
  );
};
export const PromptLoader = () => {
  return (
    <>
      <RowTemplate
        leftContent={<ComputerDesktopIcon />}
        bodyContent={<ChatLoader />}
      />
    </>
  );
};

export const PromptText = ({ chat_message_id, content, is_prompt }) => {
  const { type, data } = content ?? {};
  return (
    <>
      <RowTemplate
        leftContent={<UserCircleIcon />}
        bodyContent={type === "STRING" && <p className="text-sm ">{data}</p>}
      />
    </>
  );
};

export const PromptResponse = ({
  chat_message_id,
  content,
  thumbs_up,
  thumbs_down,
  remarks,
  session,
}) => {
  const { type, data } = content ?? {};
  const FeebpackProps = {
    chat_message_id,
    thumbs_up,
    thumbs_down,
    remarks,
    session,
  };
  return (
    <>
      <RowTemplate
        leftContent={
          <ComputerDesktopIcon
            className="md:h-8 md:w-8 h-6 w-6"
            // style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
          />
        }
        bodyContent={
          <>
            {type === "LINE_CHART" && <LineChartComponent data={data} />}
            {type === "BAR_CHART" && <BarChartComponent data={data} />}
            {type === "PIE_CHART" && <PieChartComponent data={data} />}
            {type === "TABLE" && <TableMessage data={data} />}
            {type === "STRING" && <p className="text-sm ">{data}</p>}
          </>
        }
        rightContent={<RowFeedback {...FeebpackProps} />}
      />
    </>
  );
};

export const MessageWrapper = ({ is_prompt, children }) => {
  let containerClasses = "";
  if (is_prompt) {
    containerClasses =
      "group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 dark:bg-gray-800";
  } else {
    containerClasses =
      "group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]";
  }

  return (
    <>
      <div className={`${containerClasses}`}>
        <div className="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
          {children}
        </div>
      </div>
    </>
    // <div className={`py-5 ${!is_prompt && "bg-[#dadbde]"}`}>
    //   <div className="flex space-x-2 md:space-x-5 px-2 md:px-5 max-w-3xl mx-auto">
    //     {children}
    //   </div>
    // </div>
  );
};

export const Message = ({ message, isLastElement }) => {
  const { is_prompt } = message;

  // const commonStore = useSelector((state) => state.common);
  // const { errorWhileFetchingChatResponse } = commonStore;
  return (
    <>
      {is_prompt ? (
        <MessageWrapper is_prompt={is_prompt}>
          <PromptText {...message} />
        </MessageWrapper>
      ) : (
        <MessageWrapper is_prompt={is_prompt}>
          <PromptResponse {...message} />
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
