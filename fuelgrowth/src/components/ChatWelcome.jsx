import React from "react";
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export const ChatWelcome = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-center h-full px-2">
        <h1 className="text-5xl font-bold mb-5">Welcome to FuelGrowth</h1>
        <p className="max-w-xl text-center mb-16">
          Get started by writing a task and Chat can do the rest. Not sure where
          to start? Check out the Prompt Library for inspiration.
        </p>
        <div className="flex space-x-2 text-center">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8 " />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Lorem ipsum, dolor sit amet </p>
              <p className="infoText">
                consectetur adipisicing elit. Voluptates dolores
              </p>
              <p className="infoText">
                Voluptates dolores, neque officiis sequi tempora{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8 " />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                consectetur! Iste eos inventore dolorem?
              </p>
              <p className="infoText">
                dolores non voluptatum accusantium ipsa natus ratione impedit
                nulla iusto voluptas dolore doloribus sunt
              </p>
              <p className="infoText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8 " />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                placeat, cupiditate blanditiis tempore, id enim quas dicta
              </p>
              <p className="infoText">
                voluptatibus voluptatum, nemo neque odit! Distinctio laborum
              </p>
              <p className="infoText">
                cupiditate facilis, temporibus nihil officiis cum eum id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
