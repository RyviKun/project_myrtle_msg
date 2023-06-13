import React, { useState, useEffect } from "react";
import Items from "../component/Items";
import ArrLeft from "../pictures/Arrow_Left.png";
import ArrRight from "../pictures/Arrow_Right.png";

function Homepage() {
  const [data, setData] = useState([]);
  const [random, setRandom] = useState([]);
  const [i, setI] = useState(0);
  const url =
    "https://api.spoonacular.com/recipes/complexSearch?cuisine=Asian&apiKey=41857f768da24a858a56e48c2e49bb09";
  const urlrandom =
    "https://api.spoonacular.com/recipes/random?apiKey=41857f768da24a858a56e48c2e49bb09&number=3";

  useEffect(() => {
    getData();
    getRandomData();
  }, []);

  function getData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }

  function getRandomData() {
    fetch(urlrandom)
      .then((response) => response.json())
      .then((data) => {
        const modifiedData = data.recipes.map((recipe) => {
          const { image, title, id } = recipe;
          return { image, title, id };
        });
        setRandom(modifiedData);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }

  function shiftLeft() {
    setI((prevI) => (prevI === 0 ? 2 : prevI - 1));
    console.log(i);
  }

  function shiftRight() {
    setI((prevI) => (prevI === 2 ? 0 : prevI + 1));
    console.log(i);
  }

  return (
    <div className="homepage-container">
      <div className="homepage-recomendedContainer">
        <div onClick={shiftLeft} className="homepage-left">
          <img src={ArrLeft} />
        </div>
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <img
            className="homepage-recommended-img"
            src={random.length > 0 ? random[i].image : ""}
            alt="Homepage"
          />
        </div>
        <div onClick={shiftRight} className="homepage-right">
          <img src={ArrRight} />
        </div>
      </div>
      <div className="homepage-items">
        {data ? (
          data.map((item, index) => (
            <Items key={item.id} {...item} show={index === i} />
          ))
        ) : (
          <Items />
        )}
      </div>
    </div>
  );
}

export default Homepage;
