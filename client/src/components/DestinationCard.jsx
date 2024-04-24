import { PropTypes } from "prop-types";
import {
  Modal,
  ModalOverlay,
  Dialog,
  DialogTrigger,
  Button,
} from "react-aria-components";

import("../styles/DestinationCard.scss");

function DestinationCard({ title, thumbnail, translation }) {
  return (
    <section className="card">
      <img src={thumbnail} alt={title} className="cardImg" />
      <h2 className="destinationTitle">{title}</h2>
      <p className="truncate">{translation}</p>

      <DialogTrigger>
        <Button type="button">About</Button>
        <ModalOverlay className="modal-overlay">
          <Modal className="modal" />
          <Dialog>
            {({ close }) => (
              <>
                <img src={thumbnail} alt={title} className="cardImg" />
                <h2 className="destinationTitle">{title}</h2>
                <p className="truncate">{translation}</p>
                <Button onPress={close}>Close</Button>
              </>
            )}
          </Dialog>
          <Modal />
        </ModalOverlay>
      </DialogTrigger>
    </section>
  );
}

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
};

export default DestinationCard;
