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

export default function JourneyDetails() {
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
      <h2 className={confirmButton}>Récapitulatif</h2>
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
        <h3>Véhicule :</h3>
        <a className={confirmButton} href="[REDIRIGER VERS FORMULAIRE]">
          Modifier
          <img
            src="src/assets/images/ModifyIcon.svg"
            alt="modify your vehicule"
          />
        </a>
        [composant vehicule]
      </article>
      <DialogTrigger>
        <Button
          type="button"
          className={confirmButton}
          onClick={() => handleClick()}
        >
          Confirmer et payer
        </Button>
        <ModalOverlay className="modal-overlay">
          <Modal className="modal" />
          <Dialog>
            {({ close }) => (
              <>
                <p>Prix de votre voyage : {price} crédit.</p>
                <p className="scan">Scan rétinien en cours...</p>
                <img
                  src="https://cdnl.iconscout.com/lottie/premium/thumb/eye-scanner-5456745-4561468.gif"
                  width={300}
                  alt="Scanner rétinien"
                />
                <Button onPress={close}>Votre billet</Button>
              </>
            )}
          </Dialog>
          <Modal />
        </ModalOverlay>
      </DialogTrigger>
    </section>
  );
}
