import PropTypes from "prop-types";
import "../styles/DropdownRoundTrip.scss";

function DropdownRoundTrip({ value, handleSelect }) {
  return (
    <>
      <label className="dropDownRoundTripLabel" htmlFor="select-round-trip">
        Type de voyage :
      </label>
      <select
        name="roundTrip"
        id="select-round-trip"
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
        className="dropDownRoundTripSelect"
      >
        <option value="oneWay">Aller simple</option>
        <option value="roundTrip">Aller-retour</option>
      </select>
    </>
  );
}

DropdownRoundTrip.propTypes = {
  value: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default DropdownRoundTrip;
