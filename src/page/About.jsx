import React from "react";
import Cards from "../component/Cards";
import c from "../pictures/credster.jpg";
import r from "../pictures/rypster.jpg";
import k from "../pictures/kenndster.jpg";

function About() {
  return (
    <div class="aboutpage-container">
      <Cards
        image={c}
        name="Credo Mappadang"
        desc="God put 'height: 50%;' in my css"
      />
      <Cards image={r} name="Ryvi Nender" desc="Follow pixiv ku bang" />
      <Cards image={k} name="Kenndy Susio" desc="uoh" />
    </div>
  );
}

export default About;
