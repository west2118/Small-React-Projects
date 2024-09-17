import React, { useState } from "react";

const StartGame = ({ gameStart }) => {
  const [playerName, setPlayerName] = useState("");

  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  const startGameWithName = () => {
    playerName ? gameStart(playerName) : alert("Please Put A Name");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center text-center flex-col">
      <h1 className="text-6xl font-semibold">QuizBeh</h1>
      <div className="h-auto w-5/6 xl:w-2/5 shadow-2xl flex items-center justify-center flex-col p-8 mt-5 bg-white">
        <h1 className="text-xl font-semibold">Enter Your Name</h1>
        <input
          type="text"
          value={playerName}
          onChange={handlePlayerName}
          className="my-4 w-2/5 border border-black text-base py-2 px-4 text-center"
        />
        <button
          className="w-2/5 py-2 bg-blue-700 text-white"
          onClick={startGameWithName}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartGame;
