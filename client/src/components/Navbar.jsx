import { useState } from "react";
import PropTypes from "prop-types";
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
          <li className="close">
            <button type="button" onClick={toggleMenu}>
              X
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setCurrentLocation("/")}>
              Accueil
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setCurrentLocation("/vehicule")}
            >
              Vehicule
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setCurrentLocation("/info")}>
              Info traffic
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setCurrentLocation("/voyage")}>
              Votre voyage
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setCurrentLocation: PropTypes.func.isRequired,
};
export default Navbar;
