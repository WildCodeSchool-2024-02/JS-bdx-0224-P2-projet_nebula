import { PropTypes } from "prop-types";

import("../styles/DestinationCard.scss");

function DestinationCard({ title, thumbnail }) {
  return (
    <>
      <h1>Our Destinations</h1>
      <section className="card">
        <img src={thumbnail} alt={title} className="cardImg" />
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
          voluptas quo impedit quis doloremque aspernatur nihil ad, praesentium
          minus neque at maiores magnam obcaecati minima, possimus voluptates
          molestiae. Autem? Tempore reiciendis exercitationem voluptatum commodi
          odio, eos obcaecati, neque doloremque expedita, facilis fuga ratione
          animi ullam? Quos, eos a voluptatem praesentium culpa enim nostrum
          quibusdam rem! Quia nostrum porro dolor.
        </p>
        <button type="button">About</button>
      </section>
    </>
  );
}

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default DestinationCard;
