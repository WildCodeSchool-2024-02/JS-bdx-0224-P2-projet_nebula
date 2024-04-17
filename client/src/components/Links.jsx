import { Link } from "react-router-dom";
import "../styles/Links.scss";
import PropTypes from "prop-types";

function Links({ linkName, routeLink }) {
  return (
    <Link to={routeLink} className="button">
      {linkName}
    </Link>
  );
}
Links.propTypes = {
  linkName: PropTypes.string.isRequired,
  routeLink: PropTypes.string.isRequired,
};

export default Links;
