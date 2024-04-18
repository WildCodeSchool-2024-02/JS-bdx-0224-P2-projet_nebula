import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

function NavBar() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
    <img className="logo" src="/src/assets/images/nebula-logo.svg" alt="" />
    <nav>
      <button
        type="button"
        aria-label="burgerMenu"
        className="burgerMenu"
        onClick={updateMenu}
      >
        <img
          className={burgerClass}
          src="/src/assets/images/rectangle-Nav.svg"
          alt=""
        />
        <img
          className={burgerClass}
          src="/src/assets/images/rectangle-Nav.svg"
          alt=""
        />
        <img
          className={burgerClass}
          src="/src/assets/images/rectangle-Nav.svg"
          alt=""
        />
      </button>
      <section className={menuClass}>
        <Link to="/" onClick={updateMenu}>Accueil</Link>
        <Link to="/ourDestinations" onClick={updateMenu}>Nos destinations</Link>
        <Link to="/trafficInfo" onClick={updateMenu}>Info traffic</Link>
        <Link to="/yourTrip" onClick={updateMenu}>Votre voyage</Link>
        <Link to="/contact" onClick={updateMenu}>Nous contacter</Link>
      </section>
    </nav>
    </>
  );
}
export default NavBar;
