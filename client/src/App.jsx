import { useState } from "react";
import ReservationForm from "./components/ReservationModule";
import Footer from "./components/Footer";
import "./styles/app.scss";

function App() {
  const galactapediaData =
{
  data: [
    {
      id: "0qayAQX5OA",
      title: "Caliban 3a",
    },
    {
      id: "0rxymg8qPq",
      title: "Caliban 3b",
    },
    {
      id: "bEzvPwYZ96",
      title: "Crion (Caliban II)",
    },
    {
      id: "VgEljZZ8PN",
      title: "Caliban III",
    },
    {
      id: "Rxnyko3XLQ",
      title: "Caliban 2a",
    },
    {
      id: "VlMyvGyPGA",
      title: "Caliban I",
    },
    {
      id: "V7dE88dGXK",
      title: "Caliban Belt Alpha",
    },
    {
      id: "RL63AA7lJ3",
      title: "Caliban 4a",
    },
    {
      id: "RWo8WW6OMw",
      title: "Caliban 4b",
    },
    {
      id: "VgEljjNNyn",
      title: "Caliban 4c",
    },
    {
      id: "VgEljjBLow",
      title: "Caliban 4d",
    },
    {
      id: "RX3MQQoxOZ",
      title: "Caliban 4e",
    },
    {
      id: "VlMyvv7Yn7",
      title: "Caliban 4f",
    },
    {
      id: "0GxavvKo2P",
      title: "Caliban IV",
    },
    {
      id: "0rxymm6YZ3",
      title: "Caliban V",
    },
  ],
};

  const [reservationData, setReservationData] = useState(null);

  const handleReservationSubmit = (data) => {
    setReservationData(data);
  }
  return (
    <>
      <section>
      <h1>Réservation de voyage intergalactique</h1>
      <ReservationForm
        handleReservationSubmit={handleReservationSubmit}
        galactapediaData={galactapediaData}
      />
      {reservationData && (
        <section>
          <h2>Récapitulatif de la réservation :</h2>
          <p>Départ de : {reservationData.selectedDeparture}</p>
          <p>Arrivée à : {reservationData.selectedArrival}</p>
          <p>Date de départ : {reservationData.selectedArrival}</p>
          <p>Type de voyage : {reservationData.selectedTripType}</p>
          {/* <p>Nombre de passagers : {reservationData.selectedTravellerCount}</p> */}
        </section>
      )}
    </section>
      <Footer />
    </>
  );
}

export default App;
