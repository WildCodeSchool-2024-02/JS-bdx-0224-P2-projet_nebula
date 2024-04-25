import "../styles/TrafficInfo.scss";

export default function TrafficInfo() {
  const news = [
    {
      where: "Terra I",
      type: "Flight disruptions",
      problem: "Space traffic controllers protest over working conditions. Estimated traffic recovery in 12 years.",
      icon: "⚠️",
    },
    {
      where: "Pyro system",
      type: "No insured flight",
      problem: "Flights no longer operated due to pirate ships",
      icon: "❌",
    },
    {
      where: "Aremis",
      type: "Flight disruption",
      problem: "Pandemic in progress. Traffic severely disrupted",
      icon: "⚠️",
    },
    {
      where: "Centauri / Elysium",
      type: "Works",
      problem: "Work on the jump point between Centauri and Elysium. Detour via Croshaw and Garron. Gradual return to traffic from 28/06/2951",
      icon: "⚠️",
    },
  ];

  return (
    <main className="trafficPage">
      <h1>Traffic informations</h1>
      <img src="\src\assets\images\map.png" alt="Network of the available systems" />
      <figcaption>Network of the available systems</figcaption>
      <section className="trafficSection">
        {news.map((item) => (
          <article className="trafficCard" key={item.id}>
            <h2 className="where">{item.where} {item.icon}</h2>
            <p className="type"> {item.type}</p>
            <p className="problem">{item.problem}</p>
          </article>
        ))}
      </section>
    </main>
  );
}