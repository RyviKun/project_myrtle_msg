import React from "react";
import { useNavigate } from "react-router-dom";
import defHeart from "../pictures/Heart_Default.png";
import hovHeart from "../pictures/Heart_Hovered.png";

function Items({ id, image, title }) {
  const navigate = useNavigate();

  function goToDescription() {
    navigate(`/homepage/description?id=${id}&title=${title}&image=${image}`);
  }

  function addFav(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent div

    // Retrieve the existing favorites array from localStorage
    const existingFavorites = localStorage.getItem("favorites");
    let favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    // Filter out null/empty objects from the favorites array
    favorites = favorites.filter(
      (item) => item && Object.keys(item).length > 0
    );

    // Check if the item already exists in the favorites array
    const existingIndex = favorites.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      // Item already exists, remove it from the favorites array
      favorites.splice(existingIndex, 1);
      console.log("Item removed from favorites:", { id, image, title });
    } else {
      // Item does not exist, add it to the favorites array
      const newFavorite = { id, image, title };
      favorites.push(newFavorite);
      console.log("Item added to favorites:", newFavorite);
    }

    // Update the favorites array in localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Perform any additional logic or UI updates as needed
    // ...
  }

  return (
    <div onClick={goToDescription} className="homepage-item">
      <img
        src={hovHeart}
        onClick={addFav}
        className="homepage-item-favorite-hov"
      />
      <img
        src={defHeart}
        onClick={addFav}
        className="homepage-item-favorite-def"
      />
      <img src={image} className="homepage-item-image"></img>
      <div className="homepage-item-title">{title}</div>
    </div>
  );
}

export default Items;
