import React, { useEffect, useState } from "react";

const Answers = ({
  choice,
  selectedChoice,
  handleSelectedChoice,
  correctAnswer,
  isClicked,
}) => {
  const [buttonClass, setButtonClass] = useState("bg-slate-600");

  useEffect(() => {
    if (selectedChoice) {
      if (choice === correctAnswer) {
        setButtonClass("bg-green-600");
      } else if (choice === selectedChoice) {
        setButtonClass("bg-red-600");
      } else {
        setButtonClass("bg-slate-600");
      }
    } else {
      setButtonClass("bg-slate-600");
    }
  }, [selectedChoice, correctAnswer, selectedChoice]);

  return (
    <>
      <button
        disabled={isClicked}
        onClick={handleSelectedChoice}
        className={`w-full ${buttonClass} py-2 px-4 rounded-full text-left hover:bg-slate-300 hover:text-black transition-all duration-300 ease-out`}>
        {choice}
      </button>
    </>
  );
};

export default Answers;
