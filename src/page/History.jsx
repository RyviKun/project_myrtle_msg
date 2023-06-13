import React from "react";
import FavItem from "../component/FavItem";
import heart from "../pictures/Heart_Hovered.png";

function History() {
  const data = localStorage.getItem("favorites");
  const favorites = data ? JSON.parse(data) : [];

  return (
    <div className="containerof-historypage-container">
      <div className="historypage-container">
        <div className="historypage-history-container">
          <h1 className="favorite-head">
            Favorite <img src={heart} style={{ height: "1em" }} />
          </h1>
          {favorites.map((item) => (
            <FavItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
