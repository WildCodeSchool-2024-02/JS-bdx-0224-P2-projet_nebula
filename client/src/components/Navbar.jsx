import React, { useState } from "react";
import "../styles/Navbar.scss";
import Logo from "../assets/images/logo.svg";
import { IoMdMenu, IoMdCloseCircle } from "react-icons/io";

function Navbar({ setCurrentLocation }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <img src={Logo} alt="Logo" />
      <div>
        <a
          className={isOpen ? "menu1" : "menu"}
          onClick={toggleMenu}
          src={Logo}
          alt="Menu"
        >
          {isOpen ? <IoMdCloseCircle /> : <IoMdMenu />}
        </a>
        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          <li className="close" onClick={toggleMenu}>
            X
          </li>
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
      </div>
    </nav>
  );
}

export default Navbar;
