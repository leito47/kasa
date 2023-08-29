import { Link } from "react-router-dom";
import "./../styles/error.css";
function Error() {
  return (
    <div>
      <section className="section-error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n’existe pas.</p>
        <Link to="/">Retourner à la page d'accueil</Link>
      </section>
    </div>
  );
}
export default Error;
