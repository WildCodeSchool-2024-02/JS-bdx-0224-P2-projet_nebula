import { useState } from "react";
import PropTypes from "prop-types";

export default function Arrival({ handleArrivalSelect, suggestions }) {
  const [inputValue, setInputValue] = useState("");

  const handleSelectSuggestion = (event) => {
    const selectedValue = event.target.value;
    setInputValue(selectedValue);
    handleArrivalSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="arrival">Arrivée à :</label>
      <select
        id="arrival"
        value={inputValue}
        onChange={handleSelectSuggestion}
      >
        <option value="" disabled hidden>
          Sélectionnez une arrivée
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

Arrival.propTypes = {
  handleArrivalSelect: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
