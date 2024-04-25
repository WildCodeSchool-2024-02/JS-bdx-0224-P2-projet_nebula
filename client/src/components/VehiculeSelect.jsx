import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/VehiculeSelect.scss";
import VehiculeCard from "./VehiculeCard";

export default function VehiculeSelect({ ships, setSelectedShip }) {
  const [selectedShipIndex, setSelectedShipIndex] = useState(null);

  const handleSelectShip = (index) => {
    setSelectedShipIndex(index);
    setSelectedShip(ships[index]);
  };

  return (
    <section className="shipCard">
      {ships.map((ship, index) => (
        <VehiculeCard
          key={ship.name}
          ship={ship}
          index={index}
          selected={selectedShipIndex === index}
          handleSelectShip={handleSelectShip}
        />
      ))}
    </section>
  );
}

VehiculeSelect.propTypes = {
  ships: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSelectedShip: PropTypes.func.isRequired,
};