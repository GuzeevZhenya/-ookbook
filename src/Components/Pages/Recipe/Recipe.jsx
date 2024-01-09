import { useParams } from "react-router-dom";
import { foodApi } from "../../../Api/api";
import { useEffect, useState } from "react";
import { Preloader } from "../../Preloader/Preloader";
import { GoBackButton } from "../../Buttons/GoBackButton";

export const Recipe = () => {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();

  useEffect(() => {
    foodApi.getMealById(id).then((res) => setRecipe(res.data.meals[0]));
  }, []);

  return (
    <>
      <GoBackButton />
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>{recipe.strCategory}</h6>
          {recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
              <tr></tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((el) => {
                if (el.includes("Ingredient") && recipe[el]) {
                  return (
                    <tr key={el}>
                      <td>{recipe[el]}</td>
                      <td>{recipe[`strMeasure${el.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};
