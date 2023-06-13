import react from "react";
import { NavLink } from "react-router-dom";

function NavbarDesktop() {
  return (
    <div className="navbar-container">
      <NavLink to="/homepage/history" className="navbar-history">
        Favorite
      </NavLink>
      <NavLink to="/homepage/about" className="navbar-about">
        About
      </NavLink>
    </div>
  );
}

export default NavbarDesktop;
