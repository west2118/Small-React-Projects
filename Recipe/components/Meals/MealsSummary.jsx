import React from "react";

const MealsSummary = () => {
  return (
    <div className="w-full h-auto text-black flex items-center justify-cente flex-col -mt-36">
      <div className="bg-black text-white w-7/12 text-center py-8 px-4 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-8">
          Delicious Food, Delivered To You
        </h1>
        <p className="my-4">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default MealsSummary;
