import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import MealsItem from "./MealsItem.jsx/MealsItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://recipe-37b92-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("No fetching data");
      }

      const data = await response.json();

      console.log(data);
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealsItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <div className="w-full h-auto flex items-center justify-center my-8">
      {isLoading ? (
        <ClipLoader
          color="red"
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ul className="w-8/12 h-auto bg-white text-black rounded-xl p-8 flex flex-col gap-4">
          {mealsList}
        </ul>
      )}
    </div>
  );
};

export default AvailableMeals;
