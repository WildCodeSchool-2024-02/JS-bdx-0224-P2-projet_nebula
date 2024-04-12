import { Link } from "react-router-dom";
import "../styles/ErrorPage404.scss";

function ErrorPage404() {
  return (
    <section className="error404">
      <h2>Trou de ver E404</h2>
      <p>Cette destination n'existe pas</p>
      <Link to="/" className="link">
        Retour au spatioport
      </Link>
    </section>
  );
}

export default ErrorPage404;
