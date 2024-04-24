import { useState } from "react";
import DateSelect from "./DateSelect";
import DropdownRoundTrip from "./DropdownRounTrip";
import DestinationSelect from "./DestinationSelect";
import "../styles/ReservationModule.scss";
import DropdownTraveller from "./DropdownTraveller";

export default function ReservationModule() {
  const [formData, setFormData] = useState({
    selectedDeparture: "",
    selectedArrival: "",
    selectedDate: "",
    selectedTripType: "Aller simple",
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
      />
      <DestinationSelect
        label="Arrivée à"
        value={formData.selectedArrival}
        handleSelect={(value) => handleInputChange("selectedArrival", value)}
      />
      <DateSelect
        handleSelect={(value) => handleInputChange("selectedDate", value)}
        value={formData.selectedDate}
      />
      <DropdownRoundTrip
        handleSelect={(value) => handleInputChange("selectedTripType", value)}
        value={formData.selectedTripType}
      />
      <DropdownTraveller />
      <button className="reservationButton" type="submit">
        Réserver
      </button>
    </form>
  );
}
