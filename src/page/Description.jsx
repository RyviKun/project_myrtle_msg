import React, { useState, useEffect } from "react";
import Items from "../component/Items";
import { useLocation } from "react-router-dom";
import msg from "../pictures/Food_MSG.png";

function Description() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const image = searchParams.get("image");
  const title = searchParams.get("title");

  const [data, setData] = useState([]);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (id) {
      fetchSummary();
    }
  }, [id]);

  function getData() {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${
      title.split(" ")[0]
    }&apiKey=41857f768da24a858a56e48c2e49bb09`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }

  function fetchSummary() {
    const urlId = `https://api.spoonacular.com/recipes/${id}/summary?apiKey=41857f768da24a858a56e48c2e49bb09`;

    fetch(urlId)
      .then((response) => response.json())
      .then((summaryData) => {
        setSummary(summaryData.summary);
      })
      .catch(() => {
        console.log("Error fetching summary data");
      });
  }

  function addFav() {
    // Retrieve the existing favorites array from localStorage
    const existingFavorites = localStorage.getItem("favorites");
    let favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    // Check if the item already exists in the favorites array
    const existingIndex = favorites.findIndex(
      (item) => item.id === parseInt(id)
    );

    if (existingIndex !== -1) {
      // Item already exists, remove it from the favorites array
      favorites.splice(existingIndex, 1);
      console.log("Item removed from favorites:", { id, image, title });
    } else {
      // Item does not exist, add it to the favorites array
      const newFavorite = { id: parseInt(id), image, title };
      favorites.push(newFavorite);
      console.log("Item added to favorites:", newFavorite);
    }

    // Update the favorites array in localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Perform any additional logic or UI updates as needed
    // ...
  }

  function createMarkup(htmlString) {
    return { __html: htmlString };
  }

  return (
    <div className="description-container">
      <div className="description-info-container">
        <img className="description-info-image" src={image} alt="Recipe" />
        <h1
          className="description-info-title"
          style={{ gridArea: "desc-title", color: "white" }}
        >
          {title}
        </h1>
        <p
          dangerouslySetInnerHTML={createMarkup(summary)}
          className="description-info-desc"
          style={{ gridArea: "desc-desc", color: "white" }}
        ></p>
        <div onClick={addFav} className="homepage-item-favorite"></div>
      </div>
      <h2 style={{ color: "white" }}>You might also like</h2>
      <div className="description-recommended-container">
        {data && data.length > 0 ? (
          data.map((item) => <Items key={item.id} {...item} />)
        ) : (
          <Items />
        )}
      </div>
    </div>
  );
}

export default Description;
