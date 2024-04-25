import { Link } from "react-router-dom";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <Link
        to="/contact"
        ariaLabel="link to the contact formular"
        className="contactButton"
      >
        Contact us
      </Link>
      <a
        className="discordLink"
        href="https://discord.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Discord"
      >
        <img
          src="/src/assets/images/discord-icon-svgrepo-com.svg"
          alt="icon discord"
        />
      </a>
      <a
        className="slackLink"
        href="https://slack.com/intl/fr-fr/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Slack"
      >
        <img src="/src/assets/images/slack-tile.svg" alt="icon slack" />
      </a>
      <p>
        The images used do not belong to us, they come from the Star-Citizen
        video game API, so don't sue us for justice, otherwise we will send our
        team of pilots after you aboard our ships.
      </p>
    </footer>
  );
}
export default Footer;
