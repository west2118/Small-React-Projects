import React, { useState } from "react";
import QuizGame from "./components/QuizGame";
import StartGame from "./components/StartGame";

const quizQuestions = [
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the capital of France?",
    choices: ["Rome", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which is the largest mammal?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["O2", "H2O", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    question: "Who wrote 'Hamlet'?",
    choices: [
      "Charles Dickens",
      "J.K. Rowling",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
];

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const gameStart = (name) => {
    setPlayerName(name);
    setStartGame(true);
  };

  return (
    <>
      {startGame ? (
        <QuizGame quizQuestions={quizQuestions} playerName={playerName} />
      ) : (
        <StartGame gameStart={gameStart} />
      )}
    </>
  );
};

export default App;
