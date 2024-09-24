import React, { useState } from "react";
import QuizHeader from "./QuizHeader";
import QuizDifficulty from "./QuizDifficulty";
import QandA from "./QandA";
import ProgressBar from "./ProgressBar";
import StartGame from "./StartGame";
import Result from "./Result";

const QuizContainer = () => {
  const [onStart, setOnStart] = useState(false);
  const [username, setUsername] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [isHome, setIsHome] = useState(true);
  const [triviaData, setTriviaData] = useState(null);
  const [isFinish, setIsFinish] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [currentIndexPage, setCurrentIndexPage] = useState(0);
  const [seconds, setSeconds] = useState(30);

  const handleStart = (name, quesitions, difficulty) => {
    if (name && quesitions) {
      setUsername(name);
      setNumberOfQuestions(quesitions);
      setDifficulty(difficulty);
      setOnStart(true);
      setIsHome(false);

      fetchTrivia(quesitions, difficulty);
    }
  };

  const fetchTrivia = async (quesitions, difficulty) => {
    const apiUrl = `https://opentdb.com/api.php?amount=${quesitions}&${
      difficulty ? `difficulty=${difficulty}&` : ""
    }type=multiple`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTriviaData(data.results);
      console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleQuizFinish = (quiz) => {
    setIsFinish(quiz);
  };

  const handleTotalScore = (score) => {
    setTotalScore(score);
  };

  const handleQuestionIndex = (index) => {
    setCurrentIndexPage(index);
  };

  const handleTimer = (timer) => {
    setSeconds(timer);
  };

  const handlePlayAgain = async () => {
    setTriviaData([]); // Set the Data to null to remove the previous data
    fetchTrivia(numberOfQuestions, difficulty); // Fetch new API questions / new Data
    setNumberOfQuestions(triviaData.length); // Reset number of questions
    setIsFinish(false); // Set the quiz finish state to false
    setTotalScore(0); // Reset the score
    setCurrentIndexPage(0); // Reset current question index
    setSeconds(30); // Reset timer
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-gray-800 text-white">
      <div className="w-9/12 flex items-center justify-center flex-col">
        <QuizHeader isHome={isHome} username={username} />
        {!onStart ? (
          <StartGame handleStart={handleStart} />
        ) : (
          <>
            {!isFinish ? (
              <>
                <ProgressBar
                  numberOfQuestions={numberOfQuestions}
                  currentIndexPage={currentIndexPage + 1}
                  seconds={seconds}
                />
                <QuizDifficulty difficulty={difficulty} />
                <QandA
                  triviaData={triviaData}
                  handleQuizFinish={handleQuizFinish}
                  handleTotalScore={handleTotalScore}
                  handleQuestionIndex={handleQuestionIndex}
                  handleTimer={handleTimer}
                  seconds={seconds}
                />
              </>
            ) : (
              <Result
                totalScore={totalScore}
                triviaData={triviaData}
                handlePlayAgain={handlePlayAgain}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizContainer;
