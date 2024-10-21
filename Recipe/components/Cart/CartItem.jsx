import React from "react";

const CartItem = ({ name, price, amount, onAdd, onRemove }) => {
  return (
    <>
      <li className="flex items-center justify-between">
        <div className="my-4">
          <div className="flex items-center gap-10">
            <h3 className="font-bold text-2xl">{name}</h3>
            <p className="py-1 px-4 border border-black rounded-xl">
              x {amount}
            </p>
          </div>
          <p className="text-xl text-orange-800 font-bold mt-3">${price}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="px-6 py-1 border border-orange-800 font-bold rounded-md"
            onClick={onRemove}>
            -
          </button>
          <button
            className="px-6 py-1 border border-orange-800 font-bold rounded-md"
            onClick={onAdd}>
            +
          </button>
        </div>
      </li>
      <hr className="w-full border border-orange-800 mb-4" />
    </>
  );
};

export default CartItem;
