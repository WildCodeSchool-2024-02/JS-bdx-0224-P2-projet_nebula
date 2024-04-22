import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

function NavBar() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleTabNavigation = (e) => {
      if (e.key === "Tab" && menuRef.current) {
        const menuLinks = menuRef.current.querySelectorAll("a, button");
        const firstLink = menuLinks[0];
        const lastLink = menuLinks[menuLinks.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstLink) {
            e.preventDefault();
            lastLink.focus();
          }
        }
        if (document.activeElement === lastLink) {
          e.preventDefault();
          firstLink.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTabNavigation);

    return () => {
      window.removeEventListener("keydown", handleTabNavigation);
    };
  }, []);

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
      <nav ref={menuRef}>
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
        <ul className={menuClass}>
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
