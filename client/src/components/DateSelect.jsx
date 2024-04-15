import { useState } from "react";

export default function DateSelect() {
    const [departureDate, setDepartureDate] = useState('');
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDepartureDate(selectedDate)
    }
    return (
        <>
            <label htmlFor="departureDate">Date de départ :</label>
            <input
            id="departureDate"
            type="date"
            value={departureDate}
            onChange={handleDateChange}
            />
        </>
    )}