import React from "react";

const QuizDifficulty = ({ difficulty }) => {
  return (
    <div className="py-2 px-10 bg-green-800 text-white rounded-full mt-4 mb-6">
      <p>{difficulty ? difficulty : "Random"} Quiz</p>
    </div>
  );
};

export default QuizDifficulty;
