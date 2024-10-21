import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderButton = ({ showModalHandler }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numbersOfCartItem = items.reduce((accu, curr) => {
    return accu + curr.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      onClick={showModalHandler}
      className={`bg-white ${
        isHighlighted ? "bump" : ""
      } hover:bg-black hover:text-white text-black py-2 px-12 rounded-full text-base font-bold flex items-center justify-center`}>
      Your Cart{" "}
      <span className="bg-red-800 text-white py-1 px-4 rounded-full text-center ml-3 flex justify-center items-center">
        {numbersOfCartItem}
      </span>
    </button>
  );
};

export default HeaderButton;
