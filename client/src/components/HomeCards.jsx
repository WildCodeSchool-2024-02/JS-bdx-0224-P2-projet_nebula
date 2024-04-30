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
  descriptionCards,
}) {
  return (
    <>
      <h2 className="sectionTitle">{sectionTitle}</h2>
      <article className="allCards">
        <section className="Cards">
          <figcaption>
            <img src={imageLeft} alt="" />
            <img src={imageMid} alt="" />
            <img src={imageRight} alt="" />
          </figcaption>
          <section className="planetTitle">
            <h3>{planetTitleLeft}</h3>
            <h3>{planetTitleMid}</h3>
            <h3>{planetTitleRight}</h3>
          </section>
          <p className="descriptionCards">{descriptionCards}</p>
          <Links
            labelName="link to the planet description"
            routeLink="/ourDestinations"
            linkName="Learn more"
          />
        </section>
      </article>
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
  descriptionCards: PropTypes.string.isRequired,
};
export default HomeCards;
