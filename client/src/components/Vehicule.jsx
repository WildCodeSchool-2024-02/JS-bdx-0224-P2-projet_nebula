import PropTypes from "prop-types";
import "../styles/Vehicules.scss";
import vehiculeBg from "../assets/images/ship.jpeg";

function Vehicule({ vehicules }) {
  console.info(vehicules);
  return (
    <main className="main">
      <img src={vehiculeBg} className="background" alt="vehicule" />
      <div className="cards">
        {vehicules.map((vehicule) => (
          <div key={vehicule.id} className="card">
            <img className="vehiculeImg" src={vehicule.img} alt="img" />
            <h2 className="vehiculeName">{vehicule.nom} </h2>
            <h4>desc: {vehicule.description} </h4>
            <div className="carac">
              <h3>Speed: {vehicule.speed} </h3>
              <h3>Agility: {vehicule.agility} </h3>
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
