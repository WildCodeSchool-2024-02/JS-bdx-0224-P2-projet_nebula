import PropTypes from "prop-types";
import Links from "./Links";
import "../styles/HomeMobilCards.scss";

function HomeMobilCards({ title, imageLeft, imageMid, imageRight }) {
  return (
    <>
      <h2 className="sectionTitle">{title}</h2>
      <section className="Cards">
        <figcaption>
          <img id="left" src={imageLeft} alt="" />
          <img id="mid" src={imageMid} alt="" />
          <img id="right" src={imageRight} alt="" />
        </figcaption>
        <hgroup>
          <h2 id="firstTitle">Virtus</h2>
          <h2 id="secondTitle">Xenaris</h2>
          <h2 id="thirdTitle">Astrolania</h2>
        </hgroup>
        <Links linkName="En savoir plus" />
      </section>
    </>
  );
}

HomeMobilCards.propTypes = {
  title: PropTypes.string.isRequired,
  imageLeft: PropTypes.string.isRequired,
  imageMid: PropTypes.string.isRequired,
  imageRight: PropTypes.string.isRequired,
};
export default HomeMobilCards;
