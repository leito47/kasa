import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logo_red.png";

function Header() {
  return (
    <header className="header">
      <div>
        <img src={logoHeader} alt="logo-header" />
      </div>
      <nav>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A propos
          </NavLink>
        </nav>
      </nav>
    </header>
  );
}
export default Header;
