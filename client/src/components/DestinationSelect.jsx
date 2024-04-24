import { useContext } from "react";
import PropTypes from "prop-types";
import { GalactapediaContext } from "../Contexts/GalactapediaContext";
import "../styles/DestinationSelect.scss";

function DestinationSelect({ value, label, handleSelect }) {
  const { galactapediaData } = useContext(GalactapediaContext);

  return (
    <>
      <label className="label">{label}</label>
      <select
        className="select"
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Sélectionnez une destination</option>
        {galactapediaData.map((suggestion) => (
          <option key={suggestion.id} value={suggestion.title}>
            {suggestion.title}
          </option>
        ))}
      </select>
    </>
  );
}

DestinationSelect.propTypes = {
  label: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired, // Assurez-vous que la valeur est requise
};

export default DestinationSelect;
