import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "../styles/VehiculeSelect.scss";
import VehiculeCard from "./VehiculeCard";
import { ShipContext } from "../Contexts/ShipContext";

export default function VehiculeSelect({ setSelectedShip }) {
  const { ships } = useContext(ShipContext);

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
  setSelectedShip: PropTypes.func.isRequired,
};
