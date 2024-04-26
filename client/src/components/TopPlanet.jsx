import { useState } from "react";
import PropTypes from "prop-types";
import Links from "./Links";
import Slogan from "./Slogan";
import "../styles/Header.scss";

function TopPlanet({ introPlanet }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(" ");
  const [titleUrl, setTitleUrl] = useState(" ");

  fetch("https://api.star-citizen.wiki/api/galactapedia/VarZxj1Qav")
    .then((response) => response.json())
    .then((data) => {
      setThumbnailUrl(data.data.thumbnail);
      setTitleUrl(data.data.title);
    });

  return (
    <section id="header"
      className="titleSlider"
      style={{ backgroundImage: `url(${thumbnailUrl})` }}
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
