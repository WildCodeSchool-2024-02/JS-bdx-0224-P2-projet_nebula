import { useState } from "react"


export default function Departure() {

    const[selectedDeparture, setSelectedDeparture] = useState('')
    
    const handleDeparture = (e) => {
        setSelectedDeparture(e.target.value)
    }
    return (
        <>
            <label htmlFor="departure">Arrivée à :</label>
            <input
            id='departure'
            type="text"
            value={selectedDeparture}
            onChange={handleDeparture}
            />
        </>
    )
}