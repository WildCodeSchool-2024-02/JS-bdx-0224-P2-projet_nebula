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
            value={DepartureDate}
            onChange={handleDateChange}
            />
        </>
    )}