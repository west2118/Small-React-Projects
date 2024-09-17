import React from "react";

const NextButton = ({ handleNextQuestion }) => {
  return (
    <>
      <button
        onClick={handleNextQuestion}
        className="bg-blue-700 text-white w-full py-2 rounded-sm shadow-md mt-4">
        Next Question
      </button>
    </>
  );
};

export default NextButton;
