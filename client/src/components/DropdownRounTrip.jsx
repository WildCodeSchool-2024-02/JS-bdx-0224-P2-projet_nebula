import PropTypes from "prop-types";
import "../styles/DropdownRoundTrip.scss";

function DropdownRoundTrip({ value, handleSelect }) {
  return (
    <>
      <label className="dropDownRoundTripLabel" htmlFor="select-round-trip">
        Fare :
      </label>
      <select
        name="roundTrip"
        id="select-round-trip"
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
        className="dropDownRoundTripSelect"
      >
        <option value="oneWay">One way</option>
        <option value="roundTrip">Return</option>
      </select>
    </>
  );
}

DropdownRoundTrip.propTypes = {
  value: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default DropdownRoundTrip;
