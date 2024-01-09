import React from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { useSelector } from "react-redux";

export const CategoryList = () => {
  const category = useSelector((state) => state.category.category);

  return (
    <div>{category && category.map((el) => <CategoryItem {...el} />)}</div>
  );
};
