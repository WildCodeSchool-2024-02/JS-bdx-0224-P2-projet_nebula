import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from "react-aria-components";
import { ButtonContext } from "../Contexts/ButtonContext";
import { ReservationContext } from "../Contexts/ReservationContext";
import { ShipContext } from "../Contexts/ShipContext";
import "../styles/JourneyDetails.scss";

export default function JourneyDetails() {
  const { reservationFormData } = useContext(ReservationContext);
  const { setIsButtonVisible } = useContext(ButtonContext);
  const { ships } = useContext(ShipContext);
  const { selectedShipIndex, selectedShipsData } = reservationFormData;

  const handleClick = () => {
    setIsButtonVisible(true);
  };

  const handleModifyClick = () => {
    setIsButtonVisible(true);
  };

  const selectedShip = selectedShipIndex !== null ? ships[selectedShipIndex] : null;
  const selectedShipData = selectedShipIndex !== null ? selectedShipsData[selectedShipIndex] || {} : {};

  return (
    <section className="JourneyDetails">
      <h2>Summary</h2>
      <article>
        <h3>Details :</h3>
        <a href=" " onClick={handleModifyClick}>
          Modify
          <img src="src/assets/images/ModifyIcon.svg" alt="modify your informations" />
        </a>
        <ul>
          <li>Departure : {reservationFormData.selectedDeparture}</li>
          <li>Destination : {reservationFormData.selectedArrival}</li>
          <li>Departure Date : {reservationFormData.selectedDate}</li>
          <li>Number of passengers : {reservationFormData.selectedTravelers}</li>
          <li>Fare : {reservationFormData.selectedTripType}</li>
        </ul>
      </article>
      <article>
        <h3>Ship :</h3>
        {selectedShip ? (
          <>
            <p>{selectedShip.name}</p>
            <ul>
              <li>Travel time : {selectedShipData.travelTime || "Not available"} days</li>
              <li>Price : {selectedShipData.price || "Not available"} credits</li>
            </ul>
          </>
        ) : (
          <p>No ship selected</p>
        )}
      </article>
      <DialogTrigger>
        <Button type="button" onClick={handleClick}>Confirm & Pay</Button>
        <ModalOverlay className="modal-overlay">
          <Modal className="modal" />
          <Dialog>
            {({ close }) => (
              <>
                <p>Travel price : credits.</p>
                <p className="scan">Retinal scan in progress...</p>
                <img src="https://cdnl.iconscout.com/lottie/premium/thumb/eye-scanner-5456745-4561468.gif" width={300} alt="Retinnal scan" />
                <Button onPress={close} aria-label="clone the scanner">X</Button>
                <Link to="/yourTrip">Your trip</Link>
              </>
            )}
          </Dialog>
          <Modal />
        </ModalOverlay>
      </DialogTrigger>
    </section>
  );
}

