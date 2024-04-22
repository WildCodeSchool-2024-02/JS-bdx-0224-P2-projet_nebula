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
      { title: "Hurston", id: "0Qlx4dQnxL" },
      { title: "ArcCorp", id: "bBzpNY6ANd" },
      { title: "MicroTech", id: "VYL46xl5Z1" },
      { title: "Crusader", id: "VarZxj1Qav" },
      { title: "Angeli", id: "0QlxqwG14Q" },
      { title: "Aremis", id: "RkGGjdOwQz" },
      { title: "Armitage", id: "RL6KLK4ylo" },
      { title: "Ashana", id: "bZkd47KMB6" },
      { title: "Asura", id: "0qaPo2JOj1" },
      { title: "Borea", id: "R9vGaQPXJN" },
      { title: "Carteyna", id: "RX34BrgYND" },
      { title: "Cascom", id: "0dXKkL9a9o" },
      { title: "Cassel", id: "RPDy6gqX7Z" },
      { title: "Cestulus", id: "0QlKaQ76a5" },
      { title: "Crion", id: "bEzvPwYZ96" },
      { title: "Green", id: "RWoNrNeLKP" },
      { title: "Hyperion", id: "RegWGPlxqy" },
      { title: "Jalan", id: "VarAXY2zy2" },
      { title: "Lago", id: "0dXE5egx98" },
      { title: "Lo", id: "VarAoYEQYd" },
      { title: "Locke", id: "RAX8yYv9jm" },
      { title: "Rytif", id: "R5pA7q691W" },
      { title: "Saisei", id: "Vy22NQJ1q6" },
      { title: "Selene", id: "0qaa69qqNA" },
      { title: "Xōl’uu", id: "VYLzwxDrre" },
      { title: "Spider", id: "VaZwengjJv" },
      { title: "Tangaroa", id: "RX3rnQ3XqM" },
      { title: "Terra IV (Gen)", id: "RMNMv8ekn8" },
      { title: "Terra II (Pike)", id: "Rvl7EggdAr" },
      { title: "Terra", id: "RL6ZrMrLNa" },
      { title: "Vann", id: "bZkk4l4j2D" },
      { title: "Vosca", id: "R9vQWkLNNM" },
      { title: "Xis", id: "bmGJeMv2oK" },
      { title: "Yar", id: "R6dd5pyOZ5" },
      { title: "Lorona", id: "bZkDByjyPO" },
      { title: "Serling", id: "Vy28DwK2a8" },
      { title: "MacArthur", id: "Rz22dGBlnz" },
      { title: "Severus", id: "V3GOdL9lYN" },
      { title: "Reisse", id: "0QljXw43Ev" },
    ],
  };

  const path = import.meta.env.VITE_STAR_CITIZEN_API;

  const [planetData, setPlanetData] = useState([]);

  console.info(path);
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
    <main className="mainOurDestination">
      <h1>Our Destinations</h1>
      {planetData.map((planet) => (
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
