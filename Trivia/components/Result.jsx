import React, { useEffect, useState } from "react";

const Result = ({ totalScore, triviaData, handlePlayAgain }) => {
  const [isPassed, setIsPassed] = useState(null);
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    if (totalScore >= triviaData.length / 2) {
      setIsPassed("green");
      setResultText("Congratulations you passed the quiz!");
    } else {
      setIsPassed("red");
      setResultText("Nice try!");
    }
  }, [totalScore]);

  return (
    <div className="flex justify-center items-center flex-col border border-white p-5 w-6/12">
      <h1 className="text-3xl font-semibold mb-4">Quiz Result</h1>
      <p>
        Total Questions: <span>{triviaData.length}</span>
      </p>
      <p className="my-2">
        Correct Answers: <span>{totalScore}</span>
      </p>
      <p className={`text-${isPassed}-600`}>{resultText}</p>
      <button
        onClick={handlePlayAgain}
        className={`w-full bg-${isPassed}-600 mt-4 py-2`}>
        Play Again
      </button>
    </div>
  );
};

export default Result;
