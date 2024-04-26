import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservationFormData, setReservationFormData] = useState({
    selectedDeparture: "",
    selectedArrival: "",
    selectedDate: "",
    selectedTripType: "oneWay",
    selectedTravelers: 1,
  });

  const updateReservationFormData = (newFormData) => {
    setReservationFormData(newFormData);
  };

  const contextValue = useMemo(
    () => ({ reservationFormData, updateReservationFormData }),
    [reservationFormData],
  );

  return (
    <ReservationContext.Provider value={contextValue}>
      {children}
    </ReservationContext.Provider>
  );
}

ReservationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
