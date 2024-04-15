import "../styles/Links.scss";
import PropTypes from "prop-types";

function Links({ linkName }) {
  return (
    <a className="button" href="null">
      {linkName}
    </a>
  );
}
Links.propTypes = {
  linkName: PropTypes.string.isRequired,
};

export default Links;
