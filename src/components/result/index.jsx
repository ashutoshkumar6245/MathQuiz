import React from "react";
import ScoreTracker from "../../assets/modules/components/ScoreTracker";
import { Link } from "react-router-dom";
const Result = ({ score, handleRestart }) => {
  return (
    <div className="flex justify-between  lg:gap-20 gap-2 flex-col">
      <ScoreTracker score={score} />
      <Link to={"/"}>
        <button
          className=" bg-lime-400	 hover:bg-lime-700	 text-white w-full  font-bold py-2 px-4 rounded mb-2"
          onClick={() => handleRestart()}
        >
          Restart Quiz
        </button>
      </Link>
    </div>
  );
};

export default Result;
