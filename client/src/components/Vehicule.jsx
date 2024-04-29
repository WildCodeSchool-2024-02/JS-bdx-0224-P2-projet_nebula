import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { Slide } from "react-slideshow-image";

import "../styles/Vehicules.scss";
import "react-slideshow-image/dist/styles.css";

const equipementsIMG = [
  {
    url: "https://media.robertsspaceindustries.com/sctdirqpsna8r/slideshow.jpg",
    caption: "Helmet 1",
    favorite: true,
  },
  {
    url: "https://media.robertsspaceindustries.com/l5cr40lfxfj2e/slideshow.jpg",
    caption: "Helmet 2",
    favorite: false,
  },
  {
    url: "https://media.robertsspaceindustries.com/ymfc96ij31rfz/slideshow.jpg",
    caption: "Helmet 3",
    favorite: false,
  },
  {
    url: "https://media.robertsspaceindustries.com/ymfc96ij31rfz/slideshow.jpg",
    caption: "Helmet 3",
    favorite: false,
  },
];

function Vehicule({ vehicules }) {
  const handleFavClicked = () => {};
  return (
    <main className="mainOurDestination">
      <ReactPlayer
        className="videoPlayer"
        url="https://youtu.be/QGMxGdzYVY8"
        width="100%"
      />

      <div className="cards">
        {vehicules.map((vehicule) => (
          <div key={vehicule.id} className="cardVehicule">
            <img className="vehiculeImg" src={vehicule.img} alt="img" />
            <h2 className="vehiculeName">{vehicule.nom} </h2>
            <h4>Description: {vehicule.description} </h4>
            <div className="carac">
              <p>
                Speed <br /> {vehicule.speed}{" "}
              </p>
              <p>
                Agility <br /> {vehicule.agility}{" "}
              </p>
              <p>
                Size <br /> {vehicule.Size}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <section className="generic">
        <h1 className="vehiculeName">Equipments</h1>
        <div className="divWidth">
          <Slide>
            {equipementsIMG.map((slideImage) => (
              <div className="generic" key={slideImage.caption}>
                <img
                  src={slideImage.url}
                  className="divStyle"
                  alt="helmetImg"
                />
                <span className="spanStyle">
                  {slideImage.caption}{" "}
                  <button type="button" onClick={() => handleFavClicked}>
                    {slideImage.favorite ? "❤️" : "🖤"}
                  </button>
                </span>
              </div>
            ))}
          </Slide>
        </div>
      </section>
    </main>
  );
}
Vehicule.propTypes = {
  vehicules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isFav: PropTypes.bool.isRequired,
      // Ajoutez d'autres propriétés et leurs types si nécessaire
    }),
  ).isRequired,
};
export default Vehicule;
