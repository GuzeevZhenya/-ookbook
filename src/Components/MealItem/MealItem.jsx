import React from "react";
import { NavLink } from "react-router-dom";

export const MealItem = (props) => {
  const { strMeal, idMeal, strMealThumb } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <NavLink to={`/meal/${idMeal}`} className="btn">
          Watch recipe
        </NavLink>
      </div>
    </div>
  );
};
