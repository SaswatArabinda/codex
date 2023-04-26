import React from "react";

export const ChatLoader = () => {
  let circleCommonClasses = "h-1 w-1 bg-current rounded-full  text-gray-800";

  return (
    <div className="flex items-center">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};
