import React from "react";
import { Link } from "react-router-dom";
const Difficulty = () => {
  return (
    <div className=" flex justify-center">
      <div className="lg:w-11/12 w-full flex  justify-center lg:p-16 p-0 border lg:h-screen">
        <div className=" border  lg:w-2/5 w-full lg:h-[22.25rem] flex flex-col gap-10 p-10">
          <div>
            <h2 className="lg:text-3xl  text-sm">To Start the Quiz Select</h2>
          </div>
          <Link to={"/quiz/1"}>
            <div className="bg-lime-400	 hover:bg-lime-700	 text-white w-full  font-bold py-2 px-4 rounded">
              Easy
            </div>
          </Link>
          <Link to={"/quiz/2"}>
            <div className="bg-yellow-400	 hover:bg-lime-700	 text-white w-full  font-bold py-2 px-4 rounded">
              Medium
            </div>
          </Link>
          <Link to={"/quiz/3"}>
            <div className="bg-red-400	 hover:bg-lime-700	 text-white w-full  font-bold py-2 px-4 rounded">
              Hard
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Difficulty;
