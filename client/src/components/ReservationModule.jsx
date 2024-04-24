import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../Contexts/ReservationContext";
import { ButtonContext } from "../Contexts/ButtonContext";
import "../styles/ReservationModule.scss";
import DateSelect from "./DateSelect";
import DestinationSelect from "./DestinationSelect";
import DropdownRoundTrip from "./DropdownRounTrip";
import DropdownTraveller from "./DropdownTraveller";

export default function ReservationModule() {
  const { isButtonVisible, setIsButtonVisible } = useContext(ButtonContext);

  const { reservationFormData, updateReservationFormData } =
    useContext(ReservationContext);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    const newFormData = {
      ...reservationFormData,
      [name]: value,
    };
    updateReservationFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsButtonVisible(false)
    navigate("/booking");
  };

  return (
    <form onSubmit={handleSubmit}>
      <DestinationSelect
        label="From"
        value={reservationFormData.selectedDeparture}
        handleSelect={(value) => handleInputChange("selectedDeparture", value)}
      />
      <DestinationSelect
        label="To"
        value={reservationFormData.selectedArrival}
        handleSelect={(value) => handleInputChange("selectedArrival", value)}
      />
      <DateSelect
        handleSelect={(value) => handleInputChange("selectedDate", value)}
        value={reservationFormData.selectedDate}
      />
      <DropdownRoundTrip
        handleSelect={(value) => handleInputChange("selectedTripType", value)}
        value={reservationFormData.selectedTripType}
      />
      <DropdownTraveller
        handleSelect={(value) => handleInputChange("selectedTravelers", value)}
        value={reservationFormData.selectedTravelers}
      />
      {isButtonVisible && (
        <button
          className="reservationButton"
          type="submit"
        >
          Book now
        </button>
      )}
    </form>
  );
}
