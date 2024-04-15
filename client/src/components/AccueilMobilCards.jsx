import PropTypes from "prop-types";
import "../styles/AccueilMobilCards.scss";

function AccueilMobilCards({ title, imageLeft, imageMid, imageRight }) {
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
        <a href="null">En savoir plus</a>
      </section>
    </>
  );
}

AccueilMobilCards.propTypes = {
  title: PropTypes.string.isRequired,
  imageLeft: PropTypes.string.isRequired,
  imageMid: PropTypes.string.isRequired,
  imageRight: PropTypes.string.isRequired,
};
export default AccueilMobilCards;
