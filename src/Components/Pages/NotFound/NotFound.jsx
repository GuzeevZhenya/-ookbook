import React from "react";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <img src="https://example.com/404-image.jpg" alt="Page not found" />
      <NavLink exact to="/" activeClassName="link-active" className="link">
        Главная
      </NavLink>
    </div>
  );
};
