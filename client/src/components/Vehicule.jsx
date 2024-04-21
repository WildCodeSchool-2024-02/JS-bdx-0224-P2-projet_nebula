import React from "react";
import "../styles/Vehicules.scss";
import vehiculeBg from "../assets/images/ship.jpeg";

const Vehicule = ({ vehicules }) => {
  console.log(vehicules);
  return (
    <div className="main">
      <img src={vehiculeBg} className="background" />
      <div className="cards">
        {vehicules.map((vehicule) => (
          <div className="card">
            <h2>Name: {vehicule.name} </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicule;
