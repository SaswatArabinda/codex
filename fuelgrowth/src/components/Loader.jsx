import React from "react";
import { Spinner } from "flowbite-react";

export const ChatLoader = () => {
  let circleCommonClasses =
    "h-1 w-1 bg-current rounded-full  text-gray-800 mt-2";

  return (
    <div className="flex items-center">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div class="flex h-full">
      <div class="m-auto">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    </div>
  );
};
