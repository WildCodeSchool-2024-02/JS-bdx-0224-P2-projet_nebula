import PropTypes from "prop-types";
import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { ButtonContext } from "../Contexts/ButtonContext";
import { ReservationContext } from "../Contexts/ReservationContext";
import "../styles/JourneyDetails.scss";

export default function JourneyDetails({ selectedShip, travelTime }) {
  const { reservationFormData } = useContext(ReservationContext);
  const { setIsButtonVisible } = useContext(ButtonContext);
  const price = Math.floor(Math.random() * 10000);
  const [confirmButton, setConfirmButton] = useState("display");

  const handleClick = () => {
    setConfirmButton("displayNone");
  };

  const handleModifyClick = () => {
    setIsButtonVisible(true);
  };

  const {
    selectedDeparture,
    selectedArrival,
    selectedDate,
    selectedTripType,
    selectedTravelers,
  } = reservationFormData;

  return (
    <section className="JourneyDetails">
      <h2 className={confirmButton}>Summary</h2>
      <article>
        <h3>Détails :</h3>
        <a className={confirmButton} href=" " onClick={handleModifyClick}>
          Modify
          <img
            src="src/assets/images/ModifyIcon.svg"
            alt="modify your informations"
          />
        </a>
        <ul>
          <li>Departure : {selectedDeparture}</li>
          <li>Destination : {selectedArrival}</li>
          <li>Departure Date : {selectedDate}</li>
          <li>Number of passengers : {selectedTravelers}</li>
          <li>Fare : {selectedTripType}</li>
        </ul>
      </article>
      <article>
        <h3>Ship :</h3>
        <p>{selectedShip.name}</p>
        <ul>
          <li>Travel time : {travelTime} days</li>
          <li>Price : {price} credits</li>
        </ul>
      </article>
      <DialogTrigger>
        <Button
          type="button"
          className={confirmButton}
          onClick={() => handleClick()}
        >
          Confirm & Pay
        </Button>
        <ModalOverlay className="modal-overlay">
          <Modal className="modal" />
          <Dialog>
            {({ close }) => (
              <>
                <p>Travel price : credits.</p>
                <p className="scan">Retinal scan in progress...</p>
                <img
                  src="https://cdnl.iconscout.com/lottie/premium/thumb/eye-scanner-5456745-4561468.gif"
                  width={300}
                  alt="Scanner rétinien"
                />
                <Button onPress={close}>Your ticket</Button>
              </>
            )}
          </Dialog>
          <Modal />
        </ModalOverlay>
      </DialogTrigger>
    </section>
  );
}

JourneyDetails.propTypes = {
  selectedShip: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  travelTime: PropTypes.number.isRequired,
};
