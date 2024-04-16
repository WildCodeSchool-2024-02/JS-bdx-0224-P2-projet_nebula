import Footer from "../components/Footer";
import HomeCards from "../components/HomeCards";
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import "../styles/app.scss";

function Home() {
  return (
    <>
      <header>
        <Header planetName="Neptune" />
      </header>
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
      <Footer />
    </>
  );
}

export default Home;
