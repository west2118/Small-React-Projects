import React from "react";
import HeaderButton from "./HeaderButton";
import mealsBackground from "../../assets/1843937.jpg";

const Header = ({ showModalHandler }) => {
  return (
    <div className="w-full h-auto">
      <header className="flex items-center justify-between py-4 px-20 bg-red-950">
        <h1 className="font-bold text-3xl">Meals Sissy</h1>
        <HeaderButton showModalHandler={showModalHandler} />
      </header>
      <div className="w-full h-96 overflow-hidden">
        <img src={mealsBackground} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Header;
