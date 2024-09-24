import React from "react";

const QuizHeader = ({ isHome, username }) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">
        TRIVIA <span className="text-yellow-400">QUIZ</span>
      </h1>
      {!isHome && (
        <p className="mb-4">
          Welcome! <span>{username}</span>
        </p>
      )}
    </>
  );
};

export default QuizHeader;
