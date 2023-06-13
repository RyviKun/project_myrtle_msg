import React from "react";
import { useNavigate } from "react-router-dom";
import Food_MSG from "../pictures/Food_MSG.png";

function Tohome() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/homepage`)} className="tohome-container">
      <img src={Food_MSG} className="tohome-image" />
    </div>
  );
}

export default Tohome;
