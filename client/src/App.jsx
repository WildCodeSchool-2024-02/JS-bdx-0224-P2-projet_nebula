import Footer from "./components/Footer";
import HomeMobilCards from "./components/HomeMobilCards";
import "./styles/app.scss";

function App() {
  return (
    <>
      <main>
        <HomeMobilCards
          title="Populaires"
          imageLeft="/src/assets/images/daniel-olah-16XJMQ2bTl4-unsplash.jpg"
          imageMid="/src/assets/images/pawel-czerwinski-fAd4u_HTGGY-unsplash (1).jpg"
          imageRight="/src/assets/images/solen-feyissa-AI9Z8vNLcKc-unsplash.jpg"
        />

        <HomeMobilCards
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
