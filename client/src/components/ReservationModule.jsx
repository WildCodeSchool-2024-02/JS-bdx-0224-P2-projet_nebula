import PropTypes from "prop-types";
import { useState } from "react";
import DateSelect from "./DateSelect";
import DropdownRoundTrip from "./DropdownRounTrip";
import DestinationSelect from "./DestinationSelect";
// import DropDownTraveller from "./DropDownTraveller";

export default function ReservationModule({ galactapediaData }) {
  const [formData, setFormData] = useState({
    selectedDeparture: "",
    selectedArrival: "",
    selectedDate: "",
    selectedTripType: "Aller simple",
    // selectedTravellerCount: 1,
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <DestinationSelect
        label="Départ de"
        value={formData.selectedDeparture}
        handleSelect={(value) => handleInputChange("selectedDeparture", value)}
        suggestions={galactapediaData.data}
      />
      <DestinationSelect
        label="Arrivée à"
        value={formData.selectedArrival}
        handleSelect={(value) => handleInputChange("selectedArrival", value)}
        suggestions={galactapediaData.data}
      />
      <DateSelect
        handleSelect={(value) => handleInputChange("selectedDate", value)}
        value={formData.selectedDate}
      />
      {/* <DropDownTraveller onChange={(count) => handleInputChange('selectedTravellerCount', count)} /> */}
      <DropdownRoundTrip
        handleSelect={(value) => handleInputChange("selectedTripType", value)}
        value={formData.selectedTripType}
      />
      <button type="submit">Réserver</button>
    </form>
  );
}

ReservationModule.propTypes = {
  galactapediaData: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
