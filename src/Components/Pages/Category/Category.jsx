import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { foodApi } from "../../../Api/api";
import { Preloader } from "../../Preloader/Preloader";
import { MealList } from "../../MealList/MealList";
import { useDispatch } from "react-redux";
import { fetchMealsTC } from "../../../Redux/Reducers/meal-reducer";
import { useSelector } from "react-redux";

export const Category = () => {
  const { name } = useParams();
  const dispacth = useDispatch();
  const meals = useSelector((state) => state.meal.meals);

  useEffect(() => {
    dispacth(fetchMealsTC(name));
  }, [name]);

  return <div>{meals && !meals.length ? <Preloader /> : <MealList />}</div>;
};
