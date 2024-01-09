import { foodApi } from "../../Api/api";

const initialState = {
  category: [],
  filteredCatalog: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-CATEGORY": {
      return {
        ...state,
        category: action.category,
        filteredCatalog: action.category,
      };
    }
    default:
      return state;
  }
};

export const setCategoryes = (category) => ({
  type: "SET-CATEGORY",
  category,
});

export const fetchCategoryTC = () => {
  return (dispatch) => {
    foodApi
      .getMealsCategory()
      .then((res) => dispatch(setCategoryes(res.data.categories)));
  };
};
