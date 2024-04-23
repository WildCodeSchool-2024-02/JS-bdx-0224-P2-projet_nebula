import { useState } from "react";
import TopPlanet from "../components/TopPlanet";
import HomeCards from "../components/HomeCards";
import Slogan from "../components/Slogan";
import ReservationModule from "../components/ReservationModule";
import { GalactapediaProvider } from "../Contexts/GalactapediaContext";
import "../styles/app.scss";

function Home() {
  const [thumbnailUrl1, setThumbnailUrl1] = useState(" ");
  const [titleUrl1, setTitleUrl1] = useState(" ");

  const [thumbnailUrl2, setThumbnailUrl2] = useState(" ");
  const [titleUrl2, setTitleUrl2] = useState(" ");

  const [thumbnailUrl3, setThumbnailUrl3] = useState(" ");
  const [titleUrl3, setTitleUrl3] = useState(" ");

  const [thumbnailUrl4, setThumbnailUrl4] = useState(" ");
  const [titleUrl4, setTitleUrl4] = useState(" ");

  const [thumbnailUrl5, setThumbnailUrl5] = useState(" ");
  const [titleUrl5, setTitleUrl5] = useState(" ");

  const [thumbnailUrl6, setThumbnailUrl6] = useState(" ");
  const [titleUrl6, setTitleUrl6] = useState(" ");

  fetch("https://api.star-citizen.wiki/api/galactapedia/0Qlx4dQnxL")
    .then((response) => response.json())
    .then((data) => {
      setThumbnailUrl1(data.data.thumbnail);
      setTitleUrl1(data.data.title);
    });

  fetch("https://api.star-citizen.wiki/api/galactapedia/RegWGPlxqy")
    .then((response) => response.json())
    .then((data) => {
      setThumbnailUrl2(data.data.thumbnail);
      setTitleUrl2(data.data.title);
    });

  fetch("https://api.star-citizen.wiki/api/galactapedia/RX3rnQ3XqM")
    .then((response) => response.json())
    .then((data) => {
      setThumbnailUrl3(data.data.thumbnail);
      setTitleUrl3(data.data.title);
    });

  fetch("https://api.star-citizen.wiki/api/galactapedia/VarAoYEQYd")
    .then((response) => response.json())
    .then((data) => {
      setThumbnailUrl4(data.data.thumbnail);
      setTitleUrl4(data.data.title);
    });

  fetch("https://api.star-citizen.wiki/api/galactapedia/RkGGjdOwQz")
    .then((response) => response.json())
    .then((data) => {
      setThumbnailUrl5(data.data.thumbnail);
      setTitleUrl5(data.data.title);
    });

  fetch("https://api.star-citizen.wiki/api/galactapedia/0qaPo2JOj1")
    .then((response) => response.json())
    .then((data) => {
      setThumbnailUrl6(data.data.thumbnail);
      setTitleUrl6(data.data.title);
    });

  return (
    <>
      <header>
        <GalactapediaProvider>
          <TopPlanet introPlanet="Décollez pour" planetName="Neptune" />
        </GalactapediaProvider>
      </header>
      <GalactapediaProvider>
        <ReservationModule />
      </GalactapediaProvider>
      <HomeCards
        sectionTitle="Populaires"
        planetTitleLeft={titleUrl1}
        planetTitleMid={titleUrl2}
        planetTitleRight={titleUrl3}
        imageLeft={thumbnailUrl1}
        imageMid={thumbnailUrl2}
        imageRight={thumbnailUrl3}
      />
      <HomeCards
        sectionTitle="Proches de vous"
        planetTitleLeft={titleUrl4}
        planetTitleMid={titleUrl5}
        planetTitleRight={titleUrl6}
        imageLeft={thumbnailUrl4}
        imageMid={thumbnailUrl5}
        imageRight={thumbnailUrl6}
      />
      <Slogan />
    </>
  );
}

export default Home;
