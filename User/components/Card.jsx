import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="p-2 border border-black">{children}</div>
    </>
  );
};

export default Card;
