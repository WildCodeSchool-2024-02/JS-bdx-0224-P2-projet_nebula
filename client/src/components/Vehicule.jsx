import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import "../styles/Vehicules.scss";

function Vehicule({ vehicules }) {
  return (
    <main className="mainOurDestination">
      <ReactPlayer
        className="videoPlayer"
        url="https://youtu.be/QGMxGdzYVY8"
        width="100%"
      />

      <section className="cards">
        {vehicules.map((vehicule) => (
          <section key={vehicule.id} className="cardVehicule">
            <img className="vehiculeImg" src={vehicule.img} alt="img" />
            <h2 className="vehiculeName">{vehicule.nom} </h2>
            <p>Description: {vehicule.description} </p>
            <article className="carac">
              <p>
                Speed <br /> {vehicule.speed}{" "}
              </p>
              <p>
                Agility <br /> {vehicule.agility}{" "}
              </p>
              <p>
                Size <br /> {vehicule.Size}{" "}
              </p>
            </article>
          </section>
        ))}
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
    }),
  ).isRequired,
};
export default Vehicule;
