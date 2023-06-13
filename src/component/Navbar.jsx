import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import searchButton from "../pictures/SearchBtn.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [input, setInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  function handleChange(event) {
    setInput(event.target.value);
    console.log(input);
  }

  function handleDropdownToggle() {
    setIsDropdownOpen((prevState) => !prevState);
  }

  return (
    <div className="navbar">
      <div
        className={`navbar-dropdown-container ${
          isDropdownOpen ? "open" : "closed"
        }`}
      >
        <div
          onClick={() => navigate("/homepage/about")}
          className="navbar-dropdown-container-text"
        >
          About
        </div>
        <div
          onClick={() => navigate("/homepage/history")}
          className="navbar-dropdown-container-text"
        >
          Favorite
        </div>
      </div>
      <div className="search">
        <input
          className="searchInput"
          placeholder=" What would you like today?"
          onChange={handleChange}
        ></input>
        <button
          className="searchButton"
          onClick={() =>
            navigate(`/homepage/searchpage?search=${encodeURIComponent(input)}`)
          }
        >
          <img src={searchButton} style={{ height: "20px" }} />
        </button>
      </div>

      <NavbarDesktop />

      <div className="navbar-container-mobile">
        <div onClick={handleDropdownToggle} className="navbar-dropdown">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
