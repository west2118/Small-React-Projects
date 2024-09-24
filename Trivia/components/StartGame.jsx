import React, { useState } from "react";

const StartGame = ({ handleStart }) => {
  const [username, setUsername] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="w-6/12 flex items-center justify-center flex-col">
      <form
        className="flex items-center justify-between flex-col gap-4 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleStart(username, numberOfQuestions, difficulty);
        }}>
        <input
          type="text"
          name="name"
          className="w-full p-2 rounded-sm bg-transparent border border-white"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          name="questions"
          className="w-full p-2 rounded-sm bg-transparent border border-white"
          placeholder="Number of Questions"
          min={1}
          max={50}
          onChange={(e) => setNumberOfQuestions(e.target.value)}
        />
        <select
          value={difficulty}
          className="w-full p-2 rounded-sm bg-transparent border border-white"
          onChange={(e) => setDifficulty(e.target.value)}>
          <option value="" className="text-black">
            Any Difficulty
          </option>
          <option value="easy" className="text-black">
            Easy
          </option>
          <option value="medium" className="text-black">
            Medium
          </option>
          <option value="hard" className="text-black">
            Hard
          </option>
        </select>
        <input
          type="submit"
          className="w-full bg-slate-950 py-2 rounded cursor-pointer"
          value="Start Quiz"
        />
      </form>
    </div>
  );
};

export default StartGame;
