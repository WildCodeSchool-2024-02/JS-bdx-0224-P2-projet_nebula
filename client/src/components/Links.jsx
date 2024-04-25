import { Link } from "react-router-dom";
import "../styles/Links.scss";
import PropTypes from "prop-types";

function Links({ linkName, routeLink, ariaLabel }) {
  return (
    <Link to={routeLink} aria-label={ariaLabel} className="button">
      {linkName}
    </Link>
  );
}
Links.propTypes = {
  linkName: PropTypes.string.isRequired,
  routeLink: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default Links;
