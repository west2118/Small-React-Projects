import React, { useRef } from "react";

const MealsItemForm = ({ addToCartHandler }) => {
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    addToCartHandler(enteredAmountNumber);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={submitHandler}>
      <div className="flex items-center justify-center">
        <p className="font-bold text-xl">Amount</p>
        <input
          ref={amountInputRef}
          type="number"
          defaultValue={1}
          max="10"
          min="1"
          className="border border-black ml-4 w-14 py-1 px-2 rounded"
        />
      </div>
      <button className="w-auto py-2 px-4 bg-red-950 text-white rounded-full font-bold">
        + Add
      </button>
    </form>
  );
};

export default MealsItemForm;
