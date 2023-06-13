import React from "react";
import { useNavigate } from "react-router-dom";

function FavItem({ id, image, title }) {
  const navigate = useNavigate();
  function goToDescription() {
    navigate(`/homepage/description?id=${id}&title=${title}&image=${image}`);
  }
  return (
    <div onClick={goToDescription} className="favorite-container">
      <img src={image} className="favorite-image" />
      <h1 className="favorite-title">{title}</h1>
    </div>
  );
}

export default FavItem;
