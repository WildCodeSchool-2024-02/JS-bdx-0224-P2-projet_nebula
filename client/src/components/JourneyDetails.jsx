import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  Dialog,
  DialogTrigger,
  Button,
} from "react-aria-components";
import "../styles/JourneyDetails.scss";

export default function JourneyDetails() {
  const price = Math.floor(Math.random() * 10000);
  const [confirmButton, setConfirmButton] = useState("display");
  const handleClick = () => {
    setConfirmButton("displayNone");
  };

  return (
    <section className="JourneyDetails">
      <h2 className={confirmButton}>Récapitulatif</h2>
      <article>
        <h3>Détails :</h3>
        <a className={confirmButton} href="[REDIRIGER VERS FORMULAIRE]">
          Modifier
          <img
            src="src/assets/images/ModifyIcon.svg"
            alt="modify your informations"
          />
        </a>
        <ul>
          <li>Départ :[composant formulaire(départ)]</li>
          <li>Destination :[composant formulaire(arrivé)]</li>
          <li>Date du départ :[composant formulaire(date)]</li>
          <li>Nombre de voyageurs :[composant formulaire(nbrDePersonnes)]</li>
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
