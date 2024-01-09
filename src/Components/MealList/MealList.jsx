import React from "react";
import { MealItem } from "../MealItem/MealItem";

import { useSelector } from "react-redux";
import { GoBackButton } from "../Buttons/GoBackButton";

export const MealList = () => {
  const meals = useSelector((state) => state.meal.meals);

  return (
    <>
      <GoBackButton />
      <div className="list">
        {meals && meals.map((el) => <MealItem key={el.idMeal} {...el} />)}
      </div>
    </>
  );
};
