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

  const handleChangeLanguage = (font) => {
    document.documentElement.style.setProperty("--font-family", font);
  };

  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="/src/assets/images/nebula-logo.svg"
          alt="logo nebula"
        />
      </a>
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
            <Link
              to="/"
              onClick={updateMenu}
              aria-label="link to the Home page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/ourDestinations"
              onClick={updateMenu}
              aria-label="link to Our destinations page"
            >
              Our destinations
            </Link>
          </li>
          <li>
            <Link to="/OurVehicles" aria-label="link to the our vehicles page">
              Our vehicles
            </Link>
          </li>
          <li>
            <Link
              to="/trafficInfo"
              onClick={updateMenu}
              aria-label="link to the Traffic info page"
            >
              Traffic info
            </Link>
          </li>
          <li>
            <Link
              to="/yourTrip"
              onClick={updateMenu}
              aria-label="link to the Your trip page"
            >
              Your trip
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={updateMenu}
              aria-label="link to the Contact page"
            >
              Contact us
            </Link>
          </li>
          <li>
            <button
              type="button"
              aria-label="change to Engligh"
              className="language"
              onClick={() => handleChangeLanguage("Varela Round, sans-serif")}
            >
              <img src=".\src\assets\images\British-flag.png" alt="" />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="change to alien"
              className="language"
              onClick={() => handleChangeLanguage("Alien Sans Latin basic")}
            >
              <img src=".\src\assets\images\Alien-flag.png" alt="" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
