import { useState } from "react"


export default function Arrival() {

    const[selectedArrival, SetSelectedArrival] = useState('')
    
    const handleArrival = (e) => {
        SetSelectedArrival(e.target.value)
    }
    return (
        <>
            <label htmlFor="arrival">Arrivée à :</label>
            <input 
            type="text"
            value={selectedArrival}
            onChange={handleArrival}
            />
        </>
    )
}