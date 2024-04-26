import { useEffect, useState } from "react";
import TopPlanet from "../components/TopPlanet";
import HomeCards from "../components/HomeCards";
import ReservationModule from "../components/ReservationModule";
import "../styles/app.scss";

function Home() {
  const [thumbnail1, setThumbnail1] = useState({ url: "", title: "" });

  const [thumbnailUrl2, setThumbnailUrl2] = useState({ url: "", title: "" });

  const [thumbnailUrl3, setThumbnailUrl3] = useState({ url: "", title: "" });

  const [thumbnailUrl4, setThumbnailUrl4] = useState({ url: "", title: "" });

  const [thumbnailUrl5, setThumbnailUrl5] = useState({ url: "", title: "" });

  const [thumbnailUrl6, setThumbnailUrl6] = useState({ url: "", title: "" });

  useEffect(() => {
    fetch("https://api.star-citizen.wiki/api/galactapedia/0Qlx4dQnxL")
      .then((response) => response.json())
      .then((data) => {
        setThumbnail1({ url: data.data.thumbnail, title: data.data.title });
      });

    fetch("https://api.star-citizen.wiki/api/galactapedia/RegWGPlxqy")
      .then((response) => response.json())
      .then((data) => {
        setThumbnailUrl2({ url: data.data.thumbnail, title: data.data.title });
      });

    fetch("https://api.star-citizen.wiki/api/galactapedia/RX3rnQ3XqM")
      .then((response) => response.json())
      .then((data) => {
        setThumbnailUrl3({ url: data.data.thumbnail, title: data.data.title });
      });

    fetch("https://api.star-citizen.wiki/api/galactapedia/VarAoYEQYd")
      .then((response) => response.json())
      .then((data) => {
        setThumbnailUrl4({ url: data.data.thumbnail, title: data.data.title });
      });

    fetch("https://api.star-citizen.wiki/api/galactapedia/RkGGjdOwQz")
      .then((response) => response.json())
      .then((data) => {
        setThumbnailUrl5({ url: data.data.thumbnail, title: data.data.title });
      });

    fetch("https://api.star-citizen.wiki/api/galactapedia/0qaPo2JOj1")
      .then((response) => response.json())
      .then((data) => {
        setThumbnailUrl6({ url: data.data.thumbnail, title: data.data.title });
      });
  }, []);

  return (
    <>
      <header>
        <TopPlanet introPlanet="Take off for" />
      </header>
      <ReservationModule />
      <HomeCards
        sectionTitle="Popular"
        planetTitleLeft={thumbnail1.title}
        planetTitleMid={thumbnailUrl2.title}
        planetTitleRight={thumbnailUrl3.title}
        imageLeft={thumbnail1.url}
        imageMid={thumbnailUrl2.url}
        imageRight={thumbnailUrl3.url}
        descriptionCards="Discover the 3 Humans' Favorite Planets"
      />
      <HomeCards
        sectionTitle="Close to you"
        planetTitleLeft={thumbnailUrl4.title}
        planetTitleMid={thumbnailUrl5.title}
        planetTitleRight={thumbnailUrl6.title}
        imageLeft={thumbnailUrl4.url}
        imageMid={thumbnailUrl5.url}
        imageRight={thumbnailUrl6.url}
        descriptionCards="Discover the 3 planets closest to you"
      />
    </>
  );
}

export default Home;
