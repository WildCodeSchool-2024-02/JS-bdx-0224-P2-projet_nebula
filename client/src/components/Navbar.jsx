import React from "react";
import "../styles/Navbar.scss";
import Logo from "../assets/images/logo.svg";

function Navbar({ setCurrentLocation }) {
  return (
    <nav className="navbar">
      <img src={Logo} />
      <ul>
        <li>
          <a onClick={() => setCurrentLocation("/")}>Accueil</a>
        </li>
        <li>
          <a onClick={() => setCurrentLocation("/vehicule")}>Vehicule</a>
        </li>
        <li>
          <a onClick={() => setCurrentLocation("/info")}>Info traffic</a>
        </li>
        <li>
          <a onClick={() => setCurrentLocation("/voyage")}>Votre voyage</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
