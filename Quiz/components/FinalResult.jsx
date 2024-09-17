import React, { useEffect, useState } from "react";

const FinalResult = ({ score, totalQuestions, onRetry }) => {
  const [isPassed, setIsPassed] = useState(null);

  useEffect(() => {
    if (score > 3) {
      setIsPassed("text-green-600");
    } else {
      setIsPassed("text-red-600");
    }
  }, [score]);

  return (
    <>
      <div className={`h-full w-full ${score === null ? "hidden" : ""}`}>
        <h1 className="text-lg font-semibold">Final Result</h1>
        <hr />
        <p className="my-2">
          <span className={`font-semibold ${isPassed}`}>{score}</span> of{" "}
          <span className="font-semibold">{totalQuestions}</span> correct
        </p>
        <hr />
        <button
          onClick={onRetry}
          className="mt-4 bg-blue-700 text-white w-full py-2 rounded-sm shadow-md">
          Try Again
        </button>
      </div>
    </>
  );
};

export default FinalResult;
