import React from "react";
import Header from "./Header";
import Question from "./Question";
import FinalResult from "./FinalResult";

const QuizGame = ({ playerName, quizQuestions }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center text-center">
      <div className="h-auto w-5/6 xl:w-2/5">
        <Header playerName={playerName} />
        <div className="h-full w-full p-5 shadow-2xl rounded-md">
          <Question quizQuestions={quizQuestions} />
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
