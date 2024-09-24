import React from "react";

const ProgressBar = ({ numberOfQuestions, currentIndexPage, seconds }) => {
  const percentage = (currentIndexPage / numberOfQuestions) * 100;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white h-2 rounded-lg">
        <div
          className="bg-blue-600 h-full rounded-lg transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <p>
          Question <span className="font-bold">{currentIndexPage}</span> /{" "}
          <span>{numberOfQuestions}</span>
        </p>
        <p className="py-1 px-6 border border-gray-600 rounded-full">
          <span>{seconds}</span> seconds
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
