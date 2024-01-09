import axios from "axios";

const instanse = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export const foodApi = {
  getMealsCategory() {
    return instanse.get(`categories.php`);
  },
  getMealById(mealsId) {
    return instanse.get(`lookup.php?i=` + mealsId);
  },
  getFilteredCategory(catName) {
    return instanse.get(`filter.php?c=` + catName);
  },
  getMealByName(mealName) {
    return instanse.get(`search.php?s=` + mealName);
  },
};

// export const getMealsCategory = async () => {
//   const response = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/categories.php`
//   );
//   return await response.json();
// };
