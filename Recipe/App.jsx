import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "../../../Todo-list React/ReactProjects/Recipe/components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "../../../Todo-list React/ReactProjects/Recipe/store/CartProvider";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      <div className="w-full h-auto">
        {showModal && <Cart hideModalHandler={hideModalHandler} />}
        <Header showModalHandler={showModalHandler} />
        <Meals />
      </div>
    </CartProvider>
  );
};

export default App;
