import PropTypes from "prop-types";
import Links from "./Links";
import "../styles/HomeCards.scss";

function HomeCards({
  sectionTitle,
  planetTitleLeft,
  planetTitleMid,
  planetTitleRight,
  imageLeft,
  imageMid,
  imageRight,
}) {
  return (
    <>
      <h2 className="sectionTitle">{sectionTitle}</h2>
      <section className="allCards">
        <section className="Cards">
          <figcaption>
            <img id="left" src={imageLeft} alt="" />
            <img id="mid" src={imageMid} alt="" />
            <img id="right" src={imageRight} alt="" />
          </figcaption>
          <hgroup>
            <h3 id="firstTitle">{planetTitleLeft}</h3>
            <h3 id="secondTitle">{planetTitleMid}</h3>
            <h3 id="thirdTitle">{planetTitleRight}</h3>
          </hgroup>
          <Links linkName="En savoir plus" />
        </section>
      </section>
    </>
  );
}

HomeCards.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  planetTitleLeft: PropTypes.string.isRequired,
  planetTitleMid: PropTypes.string.isRequired,
  planetTitleRight: PropTypes.string.isRequired,
  imageLeft: PropTypes.string.isRequired,
  imageMid: PropTypes.string.isRequired,
  imageRight: PropTypes.string.isRequired,
};
export default HomeCards;
