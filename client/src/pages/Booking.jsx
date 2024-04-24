import JourneyDetails from "../components/JourneyDetails";
import ReservationModule from "../components/ReservationModule";
import { GalactapediaProvider } from "../Contexts/GalactapediaContext";

export default function Booking() {
  return (
    <>
      <GalactapediaProvider>
        <ReservationModule />
      </GalactapediaProvider>
      <JourneyDetails />;
    </>
  );
}
