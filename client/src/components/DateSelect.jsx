import { useState } from "react";
import PropTypes from "prop-types";

export default function DateSelect({ handleDateSelect }) {
  const [departureDate, setDepartureDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDepartureDate(selectedDate);
    handleDateSelect(selectedDate);
  };

  return (
    <div>
      <label htmlFor="departureDate">Date de départ :</label>
      <input
        id="departureDate"
        type="date"
        min="2948-01-01"
        max="2948-12-31"
        value={departureDate}
        onChange={handleDateChange}
      />
    </div>
  );
}
DateSelect.propTypes = {
  handleDateSelect: PropTypes.func.isRequired,
};
