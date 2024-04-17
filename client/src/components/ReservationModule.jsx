import { useState } from "react";
import PropTypes from "prop-types";
import Arrival from "./Arrival";
import DateSelect from "./DateSelect";
import Departure from "./Departure";
import DropdownRoundTrip from "./DropdownRounTrip";
// import DropDownTraveller from "./DropDownTraveller";

export default function ReservationForm({ handleReservationSubmit, galactapediaData }) {
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
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { selectedDeparture, selectedArrival, selectedDate, selectedTripType } = formData;
    
    if (selectedDeparture && selectedArrival && selectedDate && selectedTripType /* && selectedTravellerCount */) {
      handleReservationSubmit(formData);
    } else {
      alert("Veuillez remplir tous les champs du formulaire.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Departure
        handleDepartureSelect={(departure) => handleInputChange('selectedDeparture', departure)}
        suggestions={galactapediaData.data}
        value={formData.selectedDeparture}
      />
      <Arrival
        handleArrivalSelect={(arrival) => handleInputChange('selectedArrival', arrival)}
        suggestions={galactapediaData.data}
        value={formData.selectedArrival}
      />
      <DateSelect
        handleDateSelect={(date) => handleInputChange('selectedDate', date)}
        value={formData.selectedDate}
      />
      {/* <DropDownTraveller onChange={(count) => handleInputChange('selectedTravellerCount', count)} /> */}
      <DropdownRoundTrip
        onChange={(type) => handleInputChange('selectedTripType', type)}
        value={formData.selectedTripType}
      />
      <button type="submit">Réserver</button>
    </form>
  );
}

ReservationForm.propTypes = {
  handleReservationSubmit: PropTypes.func.isRequired,
  galactapediaData: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};