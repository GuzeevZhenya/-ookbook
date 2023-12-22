import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Movie = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      {title}
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};
