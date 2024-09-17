import React from "react";

const Header = ({ playerName }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold">QUIZ GAME</h1>
      <hr className="m-2" />
      <p className="mb-2">
        Welcome, <span>{playerName}</span>
      </p>
    </>
  );
};

export default Header;
