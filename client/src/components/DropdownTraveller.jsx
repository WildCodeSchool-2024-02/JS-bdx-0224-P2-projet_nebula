import PropTypes from "prop-types";
import "../styles/DropdownTraveller.scss";

function DropdownTraveller({ value, handleSelect }) {
  return (
    <>
      <label className="dropDownTravellerLabel" htmlFor="selectNumberTraveller">
        Travellers :
      </label>
      <select
        name="travellers"
        id="selectNumberTraveller"
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
        className="dropDownTravellerSelect"
      >
        {[...Array(25).keys()].map((number) => (
          <option key={number + 1} value={number + 1}>
            {number + 1}
          </option>
        ))}
      </select>
    </>
  );
}

DropdownTraveller.propTypes = {
  value: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default DropdownTraveller;
