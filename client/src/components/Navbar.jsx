import React, { useState } from "react";
import "../styles/Navbar.scss";
import { IoMdMenu, IoMdCloseCircle } from "react-icons/io";
import Logo from "../assets/images/logo.svg";

function Navbar({ setCurrentLocation }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <img src={Logo} alt="Logo" />
      <div>
        <input type="button" />
        className={isOpen ? "menu1" : "menu"}
        onClick={toggleMenu}
        src={Logo}
        alt="Menu"
        {isOpen ? <IoMdCloseCircle /> : <IoMdMenu />}
        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          <li className="close" onClick={toggleMenu}>
            X
          </li>
          <li>
            <button onClick={() => setCurrentLocation("/")}>Accueil</button>
          </li>
          <li>
            <button onClick={() => setCurrentLocation("/vehicule")}>
              Vehicule
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentLocation("/info")}>
              Info traffic
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentLocation("/voyage")}>
              Votre voyage
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
