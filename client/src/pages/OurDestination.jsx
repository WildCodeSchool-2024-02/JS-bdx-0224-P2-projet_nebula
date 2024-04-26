import { useContext, useEffect, useState } from "react";
import { GalactapediaContext } from "../Contexts/GalactapediaContext";
import DestinationCard from "../components/DestinationCard";
import "../styles/OurDestination.scss";

function OurDestination() {
  const { galactapediaData } = useContext(GalactapediaContext);
  const path = import.meta.env.VITE_STAR_CITIZEN_API;

  const [planetData, setPlanetData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromises = galactapediaData.map(async (planet) => {
          const response = await fetch(`${path}${planet.id}`);
          const { data } = await response.json();
          const { title, thumbnail, english } = data;
          const { translation } = english.data;
          return { id: planet.id, title, thumbnail, translation };
        });
        const resolvedData = await Promise.all(dataPromises);
        setPlanetData(resolvedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredPlanets = planetData.filter((planet) =>
    planet.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="mainOurDestination">
      <h1 className="ourDestinationTitle">Our Destinations</h1>
      <input
        className="ourDestinationInput"
        type="text"
        placeholder="Search planets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPlanets.map((planet) => (
        <DestinationCard
          key={planet.id}
          title={planet.title}
          thumbnail={planet.thumbnail}
          translation={planet.translation}
        />
      ))}
    </main>
  );
}

export default OurDestination;
