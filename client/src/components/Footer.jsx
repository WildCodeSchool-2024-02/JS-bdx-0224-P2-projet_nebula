import Links from "./Links";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <Links routeLink="/contact" linkName="Nous contacter" />
        <a href="https://discord.com/">
          <img
            src="/src/assets/images/discord-icon-svgrepo-com.svg"
            alt="icon discord"
          />
        </a>
        <a href="https://slack.com/intl/fr-fr/">
          <img src="/src/assets/images/slack-tile.svg" alt="icon slack" />
        </a>
      <p>
       Les images utilisées ne nous appartienent pas, elles proviennent de l'API du jeux vidéo Star-Citizen,
       alors ne nous poursuivez pas en justice, sinon nous enverrons notre équipe de pilotes à votre poursuite à bord de nos vaissaux.
      </p>
    </footer>
  );
}
export default Footer;
