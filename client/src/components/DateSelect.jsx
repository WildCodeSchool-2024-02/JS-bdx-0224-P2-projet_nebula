import { useState } from "react";

export default function DateSelect() {
    const [DepartureDate, setDepartureDate] = useState('');
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDepartureDate(selectedDate)
    }
    return (
        <>
            <label htmlFor="departureDate">Date de départ :</label>
            <input 
            type="date"
            min="2948-01-01" max="2948-12-31"
            value={DepartureDate}
            onChange={handleDateChange}
            />
        </>
    )}
