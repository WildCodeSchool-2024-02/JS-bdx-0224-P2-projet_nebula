import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { ReservationContext } from "../Contexts/ReservationContext";
import { ButtonContext } from "../Contexts/ButtonContext";
import "../styles/JourneyDetails.scss";
import PropTypes from "prop-types";

export default function JourneyDetails({
  selectedShip,
  travelTime,
  price,
}) 
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

  const { selectedDeparture, selectedArrival, selectedDate, selectedTripType, selectedTravelers } =
    reservationFormData;

  return (
    <section className="JourneyDetails">
      <h2 className={confirmButton}>Summary</h2>
      <article>
        <h3>Détails :</h3>
        <a className={confirmButton} href="http://localhost:3000/booking" onClick={handleModifyClick}>
          Modifier
          <img
            src="src/assets/images/ModifyIcon.svg"
            alt="modify your informations"
          />
        </a>
        <ul>
          <li>Départ : {selectedDeparture}</li>
          <li>Destination : {selectedArrival}</li>
          <li>Date du départ : {selectedDate}</li>
          <li>Nombre de voyageurs : {selectedTravelers}</li>
          <li>Type de voyage : {selectedTripType}</li>
        </ul>
      </article>
      <article>
        <h3>Ship :</h3>
        <a className={confirmButton} href="#top" aria-label="Modify your informations">
          Modify
          <img
            src="src/assets/images/ModifyIcon.svg"
            alt="modify your informations"
          />
        </a>
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
  price: PropTypes.number.isRequired,
};
