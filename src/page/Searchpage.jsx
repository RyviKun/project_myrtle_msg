import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Items from "../component/Items";

function Searchpage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");

  const [data, setData] = useState(null);
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
    search
  )}&apiKey=41857f768da24a858a56e48c2e49bb09`;

  useEffect(() => {
    getData();
  }, [search]); // Include 'search' in the dependency array

  function getData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }

  console.log(data);
  return (
    <div className="searchpage-container">
      <div className="homepage-items">
        {data ? (
          data.map((item) => <Items key={item.id} {...item} />)
        ) : (
          <Items />
        )}
      </div>
    </div>
  );
}

export default Searchpage;
