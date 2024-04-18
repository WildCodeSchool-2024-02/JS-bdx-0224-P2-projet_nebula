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
        <Link to="/">Accueil</Link>
        <Link to="/ourDestinations">Nos destinations</Link>
        <Link to="/trafficInfo">Info traffic</Link>
        <Link to="/yourTrip">Votre voyage</Link>
        <Link to="/contact">Nous contacter</Link>
      </section>
    </nav>
    </>
  );
}
export default NavBar;
