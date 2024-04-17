import PropTypes from "prop-types";
import Links from "./Links";
import "../styles/Header.scss";

function TopPlanet({ introPlanet, planetName }) {
  return (
    <section className="titleSlider">
      <h2>{introPlanet}</h2>
      <h1>{planetName}</h1>
      <Links routeLink="/planet" linkName="Découvrir" />
    </section>
  );
}

TopPlanet.propTypes = {
  planetName: PropTypes.string.isRequired,
  introPlanet: PropTypes.string.isRequired,
};
export default TopPlanet;
