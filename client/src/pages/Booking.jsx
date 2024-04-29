import JourneyDetails from "../components/JourneyDetails";
import ReservationModule from "../components/ReservationModule";
import VehiculeSelect from "../components/VehiculeSelect";

export default function Booking() {
  return (
    <main>
      <ReservationModule />
      <VehiculeSelect />
      <JourneyDetails />
    </main>
  );
}
