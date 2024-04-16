import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Vehicule from "./components/Vehicule";
import Info from "./components/Info";
import Voyage from "./components/Voyage";

function App() {
  const [currentLocation, setCurrentLocation] = useState("/");
  return (
    <div className="container">
      <Navbar setCurrentLocation={setCurrentLocation} />
      {currentLocation === "/" && <Home />}
      {currentLocation === "/vehicule" && <Vehicule />}
      {currentLocation === "/info" && <Info />}
      {currentLocation === "/voyage" && <Voyage />}
    </div>
  );
}

export default App;
