import { useState } from "react";
import PropTypes from "prop-types";

export default function Departure({ handleDepartureSelect, suggestions }) {
  const [inputValue, setInputValue] = useState("");

  const handleSelectSuggestion = (event) => {
    const selectedValue = event.target.value;
    setInputValue(selectedValue);
    handleDepartureSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="departure">Départ de :</label>
      <select
        id="departure"
        value={inputValue}
        onChange={handleSelectSuggestion}
      >
        <option value="" disabled hidden>
          Sélectionnez un départ
        </option>
        {suggestions.map((suggestion) => (
          <option key={suggestion.id} value={suggestion.title}>
            {suggestion.title}
          </option>
        ))}
      </select>
    </div>
  );
}

Departure.propTypes = {
  handleDepartureSelect: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
