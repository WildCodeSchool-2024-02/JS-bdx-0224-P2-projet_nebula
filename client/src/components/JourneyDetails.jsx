import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  Dialog,
  DialogTrigger,
  Button,
} from "react-aria-components";
import PropTypes from "prop-types";
import "../styles/JourneyDetails.scss";

export default function JourneyDetails({
  selectedShip,
  travelTime,
  price,
}) {
  const [confirmButton, setConfirmButton] = useState("display");
  const handleClick = () => {
    setConfirmButton("displayNone");
  };

  return (
    <section className="JourneyDetails">
      <h2 className={confirmButton}>Summary</h2>
      <article>
        <h3>Details :</h3>
        <ul>
          <li>Departure : [composant formulaire(départ)]</li>
          <li>Destination :[composant formulaire(arrivé)]</li>
          <li>Departure date :[composant formulaire(date)]</li>
          <li>Number of passengers :[composant formulaire(nbrDePersonnes)]</li>
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
