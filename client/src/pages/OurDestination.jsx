import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";

function OurDestination() {
  const galactopedia = {
    data: [
      {
        id: "Var6YNe9Ko",
      },
      {
        id: "V3GEAj34wa",
      },
      {
        id: "bo1yMW5Z5A",
      },
      {
        id: "R9vEkmq2rM",
      },
      {
        id: "VpMyJnx9yz",
      },
      {
        id: "RL63EJMkoZ",
      },
      {
        id: "bZk4E6Xn9B",
      },
      {
        id: "RMNLEn6zmx",
      },
      {
        id: "0jGyn86pXm",
      },
    ],
  };

  // const path = import.meta.env.STAR_CITIZEN_API;
  const path = "https://api.star-citizen.wiki/api/galactapedia/"

  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromises = galactopedia.data.map(async (planet) => {
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

  return (
    <>
      <h1>Our Destinations</h1>
      {planetData.map((planet) => (
        <DestinationCard
          key={planet.id}
          title={planet.title}
          thumbnail={planet.thumbnail}
          translation={planet.translation}
        />
      ))}
    </>
  );
}

export default OurDestination;
