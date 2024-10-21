import React, { useContext } from "react";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../store/cart-context";

const MealsItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      price,
      amount,
    });
  };

  return (
    <li className="flex justify-between items-center flex-col">
      <div className="w-full flex justify-between items-center">
        <div>
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="italic my-1">{description}</p>
          <p className="text-xl text-orange-800 font-bold">
            ${price.toFixed(2)}
          </p>
        </div>
        <MealsItemForm addToCartHandler={addToCartHandler} />
      </div>
      <hr className="w-full border border-black mt-4" />
    </li>
  );
};

export default MealsItem;
