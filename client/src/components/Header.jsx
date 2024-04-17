import PropTypes from "prop-types";
import Links from "./Links";
import "../styles/Header.scss";

function Header({ introPlanet, planetName }) {
  return (
    <hgroup className="titleSlider">
      <h2>{introPlanet}</h2>
      <h1>{planetName}</h1>
      <Links 
      routeLink="/planet"
      linkName="Découvrir"
      />
    </hgroup>
  );
}

Header.propTypes = {
  planetName: PropTypes.string.isRequired,
  introPlanet: PropTypes.string.isRequired,
};
export default Header;
