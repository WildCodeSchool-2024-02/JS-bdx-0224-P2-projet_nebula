import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

function NavBar() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const allLinks = useRef(null);

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

  useEffect(() => {
    if (!isMenuClicked) {
      allLinks.current.focus();
    }
  }, [isMenuClicked]);

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
        <ul className={menuClass} ref={allLinks}>
          <li>
            <Link to="/" onClick={updateMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/ourDestinations" onClick={updateMenu}>
              Nos destinations
            </Link>
          </li>
          <li>
            <Link to="/trafficInfo" onClick={updateMenu}>
              Info traffic
            </Link>
          </li>
          <li>
            <Link to="/yourTrip" onClick={updateMenu}>
              Votre voyage
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={updateMenu}>
              Nous contacter
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
