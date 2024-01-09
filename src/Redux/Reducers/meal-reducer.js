import { foodApi } from "../../Api/api";

const initialState = {
  meals: [],
};

export const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH-MEALS": {
      console.log(action);
      return {
        ...state,
        meals: action.meals,
      };
    }
    default:
      return state;
  }
};

export const fetchMeals = (meals) => ({
  type: "FETCH-MEALS",
  meals,
});

export const fetchMealsTC = (name) => {
  return (dispatch) => {
    foodApi
      .getFilteredCategory(name)
      .then((res) => dispatch(fetchMeals(res.data.meals)));
  };
};
