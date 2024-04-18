import Links from "./Links";
import "../styles/Footer.scss";

function Footer() {
  return (
    <>
      <Links routeLink="/contact" linkName="Nous contacter" />
      <section>
        <a href="https://discord.com/">
          <img
            src="/src/assets/images/discord-icon-svgrepo-com.svg"
            alt="icon discord"
          />
        </a>
        <a href="https://slack.com/intl/fr-fr/">
          <img src="/src/assets/images/slack-tile.svg" alt="icon slack" />
        </a>
      </section>
      <p>
        © 2024 Tous droits réservés. Le contenu de ce site web, y compris mais
        sans s'y limiter, le texte, les images, les graphiques et les logos, est
        la propriété intellectuelle de la société ABC et est protégé par les
        lois sur le droit d'auteur applicables. Toute utilisation non autorisée
        du contenu de ce site peut constituer une violation des lois sur le
        droit d'auteur et des droits de propriété intellectuelle, et entraîner
        des poursuites judiciaires.
      </p>
    </>
  );
}
export default Footer;
