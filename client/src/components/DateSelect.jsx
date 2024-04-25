import PropTypes from "prop-types";
import "../styles/DateSelect.scss";

function DateSelect({ value, handleSelect }) {
  return (
    <>
      <label className="labelDate" htmlFor="departureDate">
        Date of departure :
      </label>
      <input
        className="inputDate"
        id="departureDate"
        type="date"
        min="2948-01-01"
        max="3000-12-31"
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
      />
    </>
  );
}

DateSelect.propTypes = {
  value: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default DateSelect;
