import { useEffect, useState } from "react";
import Answers from "./Answers";
import BeatLoader from "react-spinners/BeatLoader";

const QandA = ({
  triviaData,
  handleQuizFinish,
  handleTotalScore,
  handleQuestionIndex,
  handleTimer,
  seconds,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (triviaData && triviaData.length > 0) {
      const currentQuestion = triviaData[currentQuestionIndex];
      const allAnswers = [
        currentQuestion.correct_answer,
        ...currentQuestion.incorrect_answers,
      ];
      // Shuffle answers only when the current question changes
      setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
    }
  }, [currentQuestionIndex, triviaData]);

  useEffect(() => {
    if (triviaData) {
      if (seconds > 0) {
        const interval = setInterval(() => {
          handleTimer((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(interval);
      } else if (seconds === 0) {
        handleNextQuestion();
      }
    }
  }, [seconds, currentQuestionIndex, triviaData]);

  if (!triviaData)
    return (
      <BeatLoader
        color="green"
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  const handleNextQuestion = () => {
    if (currentQuestionIndex >= triviaData.length - 1) {
      handleQuizFinish(true);
    } else {
      setCurrentQuestionIndex((prevQuesIndex) => prevQuesIndex + 1);
      setSelectedChoice(null);
      setIsClicked(false);
      handleQuestionIndex(currentQuestionIndex + 1);
      handleTimer(30);
    }
  };

  const handleSelectedChoice = (choice) => {
    setSelectedChoice(choice);
    setIsClicked(true);

    if (choice === triviaData[currentQuestionIndex].correct_answer) {
      setPlayerScore((prevScore) => prevScore + 1);
      handleTotalScore(playerScore + 1);
    }

    handleTimer(3);

    // Call handleNextQuestion after 3 seconds
    setTimeout(() => {
      handleNextQuestion();
    }, 3000);
  };

  return (
    <div className="w-full">
      <p className="font-semibold">
        {triviaData[currentQuestionIndex].question}
      </p>
      <div className="w-full flex justify-between flex-col gap-2 my-2">
        {shuffledAnswers.map((choice) => (
          <Answers
            isClicked={isClicked}
            key={choice}
            choice={choice}
            selectedChoice={selectedChoice}
            handleSelectedChoice={() => handleSelectedChoice(choice)}
            correctAnswer={triviaData[currentQuestionIndex].correct_answer}
          />
        ))}
      </div>
    </div>
  );
};

export default QandA;
