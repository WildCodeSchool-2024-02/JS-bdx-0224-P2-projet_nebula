import DestinationCard from "../components/DestinationCard";

function OurDestination() {
  const galactopedia = {
    data: [
      {
        id: "Var6YNe9Ko",
        title: "Yulin I",
        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/02380f3f-f376-43e9-8041-16d5d26e763d",
      },
      {
        id: "V3GEAj34wa",
        title: "Buloi Sataball Arena",
        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/063c08b9-ea52-4946-8027-b66c259f0628",
      },
      {
        id: "bo1yMW5Z5A",
        title: "Yulin II",
        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/0f1c9050-9727-49aa-9ed1-a410c5253eaf",
        type: "PlanetMoonSpaceStationPlatform",
      },
      {
        id: "R9vEkmq2rM",
        title: "Yulin IV",
        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/ec60adc2-c766-448c-a900-d5b2639aa220",
      },
      {
        id: "VpMyJnx9yz",
        title: "Yulin V",

        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/b78a6f14-968c-4f10-bff1-ec27f4fc1781",
      },
      {
        id: "RL63EJMkoZ",
        title: "Yulin VI",

        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/043997a4-ddec-47fe-9b8e-8aee9876902f",
      },
      {
        id: "bZk4E6Xn9B",
        title: "Kins II",

        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/3f3c0ca2-6979-40d8-903a-e51e9ac2470d",
      },
      {
        id: "RMNLEn6zmx",
        title: "Yulin III",

        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/ed2638f6-08d1-4fb6-b8bf-7d778140c359",
      },
      {
        id: "0jGyn86pXm",
        title: "Bacchus I",

        thumbnail:
          "https://cig-galactapedia-prod.s3.amazonaws.com/upload/06d5364b-4c00-4eae-9626-f03e549dbc52",
      },
    ],
  };


const path = import.meta.env.VITE_API_URL;

fetch(path)
.then(response => response.json())
.then(data => console.info(data))
.catch(err => console.error(err))

  return (
    <>
      {galactopedia.data.map((planet) => (
        <DestinationCard
          key={planet.id}
          title={planet.title}
          thumbnail={planet.thumbnail}
        />
      ))}
      ;
    </>
  );
}

export default OurDestination;
