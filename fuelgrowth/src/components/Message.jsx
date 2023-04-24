import { ComputerDesktopIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  LineChartComponent,
  BarChartComponent,
  PieChartComponent,
} from "./ReactCharts";
import { TableMessage } from "./ReactTable";

// import TypeWriter from "typewriter-effect";

export const Message = ({ message }) => {
  const { chat_message_id, content, is_prompt } = message;
  const { type, data } = content ?? {};

  return (
    <div className={`py-5 ${!is_prompt && "bg-[#dadbde]"}`}>
      <div className="flex space-x-2 md:space-x-5 px-2 md:px-5 max-w-3xl mx-auto">
        {is_prompt ? (
          <UserCircleIcon
            className="md:h-8 md:w-8 h-6 w-6"
            style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
          />
        ) : (
          <ComputerDesktopIcon
            className="md:h-8 md:w-8 h-6 w-6"
            style={{ minWidth: "1.5rem", minHeight: "1.5rem" }}
          />
        )}

        {type === "LINE_CHART" && <LineChartComponent data={data} />}
        {type === "BAR_CHART" && <BarChartComponent data={data} />}
        {type === "PIE_CHART" && <PieChartComponent data={data} />}
        {type === "TABLE" && <TableMessage data={data} />}

        {type === "STRING" && <p className="pt-1 text-sm ">{data}</p>}

        {/* <p className="pt-1 text-sm ">{data}</p> */}
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
