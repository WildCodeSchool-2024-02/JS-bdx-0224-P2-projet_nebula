import { useState } from "react";
import "./JourneyDetails.scss";
import {
  Modal,
  ModalOverlay,
  Dialog,
  DialogTrigger,
} from "react-aria-components";

export default function JourneyDetails() {
  const price = Math.floor(Math.random() * 10000);
  const [confirmButton, setConfirmButton] = useState("dispay");
  const handleClick = () => {
    setConfirmButton("displayNone");
  };

  return (
    <section className="JourneyDetails">
      <h4 className={confirmButton}>Récapitulatif</h4>
      <article>
        <h5>Détails :</h5>
        <a className={confirmButton} href="[REDIRIGER VERS FORMULAIRE]">
          Modifier
          <img
            src="src/assets/images/ModifyIcon.svg"
            alt="modify your informations"
          />
        </a>
        <ul>
          <li>Départ :[composant formulaire]</li>
          <li>Destination :[composant formulaire]</li>
          <li>Date du départ :[composant formulaire]</li>
          <li>Nombre de voyageurs :[composant formulaire]</li>
        </ul>
      </article>
      <article>
        <h5>Véhicule :</h5>
        <a className={confirmButton} href="[REDIRIGER VERS FORMULAIRE]">
          Modifie
          <img
            src="src/assets/images/ModifyIcon.svg"
            alt="modify your vehicule"
          />
        </a>
        [composant vehicule]
      </article>
      <DialogTrigger>
        <button
          type="button"
          className={confirmButton}
          href=""
          onClick={() => handleClick()}
        >
          Confirmer et payer
        </button>
        <ModalOverlay className="modal-overlay">
          <Modal className="modal" />
          <Dialog>
            <p>Confirmer le paiement de ${price}</p>
          </Dialog>
          <Modal />
        </ModalOverlay>
      </DialogTrigger>
    </section>
  );
}
