import React, { useEffect, useState } from "react";

const AnswerButtons = ({
  choice,
  answer,
  selectedChoice,
  onAnswerSelection,
  isClicked,
}) => {
  const [buttonClass, setButtonClass] = useState("bg-slate-100");

  useEffect(() => {
    if (selectedChoice) {
      if (choice === answer) {
        setButtonClass("bg-green-200");
      } else if (choice === selectedChoice) {
        setButtonClass("bg-red-200");
      } else {
        setButtonClass("bg-slate-100");
      }
    } else {
      setButtonClass("bg-slate-100");
    }
  }, [choice, answer, selectedChoice]);

  return (
    <>
      <button
        disabled={isClicked}
        onClick={onAnswerSelection}
        className={`${buttonClass} w-full py-2 rounded-sm hover:bg-black hover:text-white hover:shadow-lg transition duration-300`}
        value={choice}>
        {choice}
      </button>
    </>
  );
};

export default AnswerButtons;
