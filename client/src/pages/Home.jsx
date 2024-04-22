import TopPlanet from "../components/TopPlanet";
import HomeCards from "../components/HomeCards";
import Slogan from "../components/Slogan";
import ReservationModule from "../components/ReservationModule";
import { GalactapediaProvider } from "../Contexts/GalactapediaContext";
import "../styles/app.scss";

function Home() {
  return (
    <>
      <header>
        <TopPlanet introPlanet="Décollez pour" planetName="Neptune" />
      </header>
      <GalactapediaProvider>
        <ReservationModule />
      </GalactapediaProvider>
      <HomeCards
        sectionTitle="Populaires"
        planetTitleLeft="Virtus"
        planetTitleMid="Virtus"
        planetTitleRight="Virtus"
        imageLeft="/src/assets/images/daniel-olah-16XJMQ2bTl4-unsplash.jpg"
        imageMid="/src/assets/images/pawel-czerwinski-fAd4u_HTGGY-unsplash (1).jpg"
        imageRight="/src/assets/images/solen-feyissa-AI9Z8vNLcKc-unsplash.jpg"
      />
      <HomeCards
        sectionTitle="Proches de vous"
        planetTitleLeft="Virtus"
        planetTitleMid="Virtus"
        planetTitleRight="Virtus"
        imageLeft="/src/assets/images/daniel-olah-16XJMQ2bTl4-unsplash.jpg"
        imageMid="/src/assets/images/pawel-czerwinski-fAd4u_HTGGY-unsplash (1).jpg"
        imageRight="/src/assets/images/solen-feyissa-AI9Z8vNLcKc-unsplash.jpg"
      />
      <Slogan />
    </>
  );
}

export default Home;
