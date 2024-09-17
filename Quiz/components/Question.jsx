import React, { useState } from "react";
import AnswerButtons from "./AnswerButtons";
import NextButton from "./NextButton";
import FinalResult from "./FinalResult";

const Question = ({ quizQuestions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelection = (choice) => {
    setSelectedChoice(choice);
    setIsClicked(true);
    setIsAnswered(true);

    if (choice === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex >= quizQuestions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
      setIsClicked(false);
      setIsAnswered(false);
    }
  };

  const onRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedChoice(null);
    setIsClicked(false);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <>
      {!quizFinished ? (
        <>
          <h1 className="mb-4 font-semibold">
            Question <span>{currentQuestionIndex + 1}</span>
          </h1>
          <hr />
          <p className="py-2">{currentQuestion.question}</p>
          <hr />
          <div className="flex items-center justify-center flex-col gap-4 my-4">
            {currentQuestion.choices.map((choice) => (
              <AnswerButtons
                key={choice}
                isClicked={isClicked}
                answer={currentQuestion.correctAnswer}
                choice={choice}
                selectedChoice={selectedChoice}
                onAnswerSelection={() => handleAnswerSelection(choice)}
              />
            ))}
            {isAnswered && (
              <NextButton handleNextQuestion={handleNextQuestion} />
            )}
          </div>
          <hr />
        </>
      ) : (
        <FinalResult
          totalQuestions={quizQuestions.length}
          score={score}
          onRetry={onRetry}
        />
      )}
    </>
  );
};

export default Question;
