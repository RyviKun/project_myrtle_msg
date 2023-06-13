import React from "react";

const Cards = (props) => {
  return (
    <div className="aboutpage-item-container">
      <img src={props.image} className="aboutpage-item-image" />
      <h2 className="aboutpage-item-name">{props.name}</h2>
      <p className="aboutpage-item-desc">{props.desc}</p>
    </div>
  );
};

export default Cards;
