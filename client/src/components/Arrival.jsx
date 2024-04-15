import { useState } from "react";

export default function Arrival() {
  const [selectedArrival, setSelectedArrival] = useState("");

  const handleArrival = (e) => {
    setSelectedArrival(e.target.value);
  };
  return (
    <>
      <label htmlFor="arrival">Arrivée à :</label>
      <input
        id="arrival"
        type="text"
        value={selectedArrival}
        onChange={handleArrival}
      />
    </>
  );
}
