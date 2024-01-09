import React, { useEffect, useState } from "react";
import { foodApi, getMealsCategory } from "../../../Api/api";
import { Preloader } from "../../Preloader/Preloader";
import { CategoryList } from "../../CategoryList/CategoryList";
import { Search } from "../../Search/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchCategoryTC } from "../../../Redux/Reducers/category-reducer";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [category, setCategory] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryTC());
    // foodApi.getMealsCategory().then((res) => {
    //   setCategory(res.data.categories);
    //   setFilteredCatalog(
    //     search
    //       ? res.data.categories.filter((item) =>
    //           item.strCategory
    //             .toLowerCase()
    //             .includes(search.split("=")[1].toLowerCase())
    //         )
    //       : res.data.categories
    //   );
    // });
  }, [search]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      category.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({ pathname, search: `?search=${str}` });
  };

  return (
    <div>
      <Search cb={handleSearch} />
      {/* {!category.length ? (
        <Preloader />
      ) : (
        <CategoryList category={filteredCatalog} />
      )} */}

      <CategoryList />
    </div>
  );
};
