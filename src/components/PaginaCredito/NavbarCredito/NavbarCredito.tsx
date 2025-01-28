import { Link } from "react-router-dom";
import "./NavbarCredito.css";

const NavbarCredito = () => {
  return (
    <header className="headerNavbar">
      <div className="container">
        <nav>
          <div className="logo">
            <img src="public/logos/LogoCajaSolidaria.png" alt="Logo" />
          </div>
          <ul className="nav-link">
            <li>
              <Link to="/">Regresar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavbarCredito;
