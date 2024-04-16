import PropTypes from "prop-types";
import Links from "./Links";
import "../styles/Header.scss";

function Header({ planetName }) {
  return (
    <hgroup className="titleSlider">
      <h2>Décollez pour</h2>
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
};
export default Header;
