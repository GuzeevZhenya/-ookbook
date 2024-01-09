import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { categoryReducer } from "./Redux/Reducers/category-reducer";
import { mealReducer } from "./Redux/Reducers/meal-reducer";

import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  category: categoryReducer,
  meal: mealReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

window.store = store;
