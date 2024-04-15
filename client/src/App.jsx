import Footer from "./components/Footer";
import AccueilMobilCards from "./components/AccueilMobilCards";
import "./styles/app.scss";

function App() {
  return (
    <>
      <main>
        <AccueilMobilCards
          title="Populaires"
          imageLeft="/src/assets/images/daniel-olah-16XJMQ2bTl4-unsplash.jpg"
          imageMid="/src/assets/images/pawel-czerwinski-fAd4u_HTGGY-unsplash (1).jpg"
          imageRight="/src/assets/images/solen-feyissa-AI9Z8vNLcKc-unsplash.jpg"
        />

        <AccueilMobilCards
          title="Proches de vous"
          imageLeft="/src/assets/images/daniel-olah-16XJMQ2bTl4-unsplash.jpg"
          imageMid="/src/assets/images/pawel-czerwinski-fAd4u_HTGGY-unsplash (1).jpg"
          imageRight="/src/assets/images/solen-feyissa-AI9Z8vNLcKc-unsplash.jpg"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
