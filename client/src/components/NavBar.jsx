
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

function NavBar() {
  // const [burgerClass, SetBurgerClass] = useState("burger-bar unclicked");
  // const [menuClass, SetMenuClass] = useState("menu hidden");
  // const [isMenuClicked, SetIsMenuClicked] = useState(false);

  return (
    <nav>
      <section className="burgerMenu">
        <img
          // className={burgerClass}
          src="/src/assets/images/rectangle-Nav.svg"
          alt=""
        />
        <img
         
          src="/src/assets/images/rectangle-Nav.svg"
          alt=""
        />
        <img
          
          src="/src/assets/images/rectangle-Nav.svg"
          alt=""
        />
      </section>
      <section >
        <Link to="/">Accueil</Link>
        <Link to="/ourDestinations">Nos destinations</Link>
        <Link to="/trafficInfo">Info traffic</Link>
        <Link to="/yourTrip">Votre voyage</Link>
      </section>
    </nav>
  );
}
export default NavBar;
