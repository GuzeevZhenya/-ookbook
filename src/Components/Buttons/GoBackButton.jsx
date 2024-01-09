import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const GoBackButton = () => {
  const navigate = useNavigate();
  return <NavLink onClick={() => navigate(-1)}>go back</NavLink>;
};
