import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import "../styles/Vehicules.scss";

function Vehicule({ vehicules }) {
  console.info(vehicules);
  return (
    <main className="main">
      <ReactPlayer url="https://youtu.be/QGMxGdzYVY8" width="100%" />

      <div className="cards">
        {vehicules.map((vehicule) => (
          <div key={vehicule.id} className="card">
            <img className="vehiculeImg" src={vehicule.img} alt="img" />
            <h2 className="vehiculeName">{vehicule.nom} </h2>
            <h4>Description: {vehicule.description} </h4>
            <div className="carac">
              <p>Speed: {vehicule.speed} </p>
              <p>Agility: {vehicule.agility} </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
Vehicule.propTypes = {
  vehicules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // Ajoutez d'autres propriétés et leurs types si nécessaire
    }),
  ).isRequired,
};
export default Vehicule;
