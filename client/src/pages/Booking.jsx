import { useState } from "react";
import JourneyDetails from "../components/JourneyDetails";
import ReservationModule from "../components/ReservationModule";
import VehiculeSelect from "../components/VehiculeSelect";
import { GalactapediaProvider } from "../Contexts/GalactapediaContext";

export default function Booking() {
  const ships = [
    {
      name: "C2 Hercule",
      image:
        "https://media.starcitizen.tools/thumb/c/cc/C2_Feature_Style_clouds.jpg/1920px-C2_Feature_Style_clouds.jpg",
    },
    {
      name: "E1 Spirit",
      image:
        "https://media.starcitizen.tools/thumb/c/cd/EXT_Carrack_Microtech_112019-Min.jpg/1920px-EXT_Carrack_Microtech_112019-Min.jpg",
    },
  ];

  const [selectedShip, setSelectedShip] = useState([]);
  return (
    <main>
      <GalactapediaProvider>
        <ReservationModule />
      </GalactapediaProvider>
      <VehiculeSelect ships={ships} setSelectedShip={setSelectedShip} />
      <JourneyDetails selectedShip={selectedShip} />
    </main>
  );
}
