import { PropTypes } from "prop-types";

import("../styles/DestinationCard.scss");

function DestinationCard({ title, thumbnail, translation }) {
  return (
    <section className="card">
      <img src={thumbnail} alt={title} className="cardImg" />
      <h1>{title}</h1>
      <p className="truncate">{translation}</p>
      <button type="button">About</button>
    </section>
  );
}

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
};

export default DestinationCard;
