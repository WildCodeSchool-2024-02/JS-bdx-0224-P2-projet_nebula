import { useContext } from "react";
import JourneyDetails from "../components/JourneyDetails";
import "../styles/YourTrip.scss";
import { ReservationContext } from "../Contexts/ReservationContext";

export default function YourTrip() {
  const { reservationFormData } = useContext(ReservationContext);
  const {
    selectedDeparture,
    selectedArrival,
    selectedDate,
    selectedTripType,
    selectedTravelers,
  } = reservationFormData;
  return (
    <>
      <h1>Your trip</h1>
      <JourneyDetails />
      <section className="yourTrip">
        <h2>Your ticket</h2>
        <div className="summaryTicket">
          <ul>
            {/* <li>{selectedDeparture}</li>
            <li>{selectedArrival}</li> */}
            <li>From: {selectedDeparture}</li>
            <li>To: {selectedArrival}</li>
            <li>{selectedTravelers} passenger(s)</li>
            <li>{selectedTripType}</li>
            <li>{selectedDate}</li>
            {/* <li>{selectedDate}</li> */}
          </ul>
        </div>
        <p>Click here to download your ticket :</p>
        <button type="button" aria-label="Download">
          Download
        </button>
      </section>
    </>
  );
}
