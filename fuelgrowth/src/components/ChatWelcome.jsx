import React from "react";
import {
  PresentationChartLineIcon,
  RectangleStackIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

export const ChatWelcome = ({ setPrompt }) => {
  const handleClick = (e) => {
    e.preventDefault();

    console.log(e.target.innerText);
    setPrompt(e.target.innerText);
  };
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-center h-full px-2">
        <h1 className="text-5xl font-bold mb-5">Hi, I'm Fuego!</h1>
        <p className="max-w-xl text-center mb-16">
          Ask me questions related to yours sales, inventory, shipping, and
          customeer data. I'm constantly improving and your feedback helps me
          learn faster.
        </p>
        <div className="flex space-x-2 text-center text-sm">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <PresentationChartLineIcon className="h-8 w-8 " />
              <h2>Sales</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText" onClick={(e) => handleClick(e)}>
                Plot total sales for the first quater of 2023.{" "}
              </p>
              <p className="infoText" onClick={(e) => handleClick(e)}>
                Which product was sold the most in March?
              </p>
              <p className="infoText" onClick={(e) => handleClick(e)}>
                Show me a list of stores with total quantity sold in 2022.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <RectangleStackIcon className="h-8 w-8 " />
              <h2>Inventory</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText" onClick={(e) => handleClick(e)}>
                How many products should I replenish in April?
              </p>
              <p className="infoText" onClick={(e) => handleClick(e)}>
                Show me products that have more than 100 stocks?
              </p>
              <p className="infoText" onClick={(e) => handleClick(e)}>
                Plot total number of stocks in each store.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <CubeIcon className="h-8 w-8 " />
              <h2>Shipping</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText" onClick={(e) => handleClick(e)}>
                How many customers used Cash on Delievery (COD) in April?
              </p>
              <p className="infoText" onClick={(e) => handleClick(e)}>
                Which carrier had the most number of SLA breaches?
              </p>
              <p className="infoText" onClick={(e) => handleClick(e)}>
                How much total shipping charges were paid in March?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
