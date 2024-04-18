import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Vehicule from "./components/Vehicule";
import Info from "./components/Info";
import Voyage from "./components/Voyage";

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");
  const [vehicules, setVehicules] = useState();

  useEffect(() => {
    fetch("https://api.star-citizen.wiki/api/vehicles?limit=10")
      .then((response) => response.json())
      .then((data) => setVehicules(data.data));
  }, []);

  return (
    <div className="container">
      <Navbar setCurrentLocation={setCurrentLocation} />
      {currentLocation === "/" && <Home />}
      {currentLocation === "/vehicule" && <Vehicule vehicules={vehicules} />}
      {currentLocation === "/info" && <Info />}
      {currentLocation === "/voyage" && <Voyage />}
    </div>
  );
}

export default App;
