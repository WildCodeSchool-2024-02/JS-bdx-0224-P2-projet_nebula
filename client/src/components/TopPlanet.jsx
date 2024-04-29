import { useState } from "react";
import PropTypes from "prop-types";
import Links from "./Links";
import Slogan from "./Slogan";
import "../styles/Header.scss";

function TopPlanet({ introPlanet }) {
  const [titleUrl, setTitleUrl] = useState(" ");

  fetch("https://api.star-citizen.wiki/api/galactapedia/Rvl7EggdAr")
    .then((response) => response.json())
    .then((data) => {
      setTitleUrl(data.data.title);
    });

  return (
    <section
      id="header"
      className="titleSlider"
    >
      <Slogan />
      <h2>{introPlanet}</h2>
      <h2>{titleUrl}</h2>
      <Links
        labelName="link to the planet description"
        routeLink="/ourDestinations"
        linkName="Discover"
      />
    </section>
  );
}

export default TopPlanet;

TopPlanet.propTypes = {
  introPlanet: PropTypes.string.isRequired,
};
