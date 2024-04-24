import { Link } from "react-router-dom";
import "../styles/ErrorPage404.scss";

function ErrorPage404() {
  return (
    <body className="error404Body">
      <main className="error404">
        <h1 className="titleError404">Trou de ver E404</h1>
        <p className="textError404">Cette destination n'existe pas</p>
        <Link to="/" className="linkError">
          Retour au spatioport
        </Link>
      </main>
    </body>
  );
}

export default ErrorPage404;
