import {PropTypes} from 'prop-types';

function DestinationCard({ title, thumbnail }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={thumbnail} alt={title} />
    </>
  );
}

DestinationCard.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
}

export default DestinationCard;
