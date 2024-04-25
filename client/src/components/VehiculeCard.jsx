import { useMemo } from "react";
import PropTypes from "prop-types";

export default function VehiculeCard({
  ship,
  index,
  selected,
  handleSelectShip,
}) {
  const travelTime = useMemo(() => Math.floor(Math.random() * 41 + 10), []);
  const price = useMemo(() => Math.floor(Math.random() * 10000), []);

  return (
    <article className={selected ? "selected" : "none"}>
      <img src={ship.image} alt={ship.name} />
      <h3>{ship.name}</h3>
      <p>Travel time : {travelTime} days</p>
      <p>Price : {price} credits</p>
      <button type="button" onClick={() => handleSelectShip(index)}>
        Choose this ship
      </button>
    </article>
  );
}
VehiculeCard.propTypes = {
  ship: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  handleSelectShip: PropTypes.func.isRequired,
};
