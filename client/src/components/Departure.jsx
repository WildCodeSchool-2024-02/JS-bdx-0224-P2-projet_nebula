import { useState } from "react"


export default function Departure() {

    const[selectedDeparture, SetSelectedDeparture] = useState('')
    
    const handleDeparture = (e) => {
        SetSelectedDeparture(e.target.value)
    }
    return (
        <>
            <label htmlFor="Departure">Arrivée à :</label>
            <input 
            type="text"
            value={selectedDeparture}
            onChange={handleDeparture}
            />
        </>
    )
}