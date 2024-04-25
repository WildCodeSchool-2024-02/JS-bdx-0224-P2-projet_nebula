import { useState } from "react";
import { Link } from "react-router-dom";
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
        label="Departure to"
        value={formData.selectedDeparture}
        handleSelect={(value) => handleInputChange("selectedDeparture", value)}
      />
      <DestinationSelect
        label="Arrive at"
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
      <Link to="/booking" className="reservationButton" aria-label="réserver">
        To book
      </Link>
    </form>
  );
}
