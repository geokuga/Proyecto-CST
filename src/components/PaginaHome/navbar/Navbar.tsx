import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  const location = useLocation();
  const currentPath = location.pathname;

  const routes = [
    { path: "/", name: "Inicio" },
    { path: "/promociones", name: "Promociones" },
    { path: "/water", name: "Proyecto water" },
    { path: "/credito", name: "Crédito" },
    { path: "/otrosBeneficios", name: "Otros beneficios" },
  ];

  // Filtramos la ruta actual
  const linksToShow = routes.filter((route) => route.path !== currentPath);

  return (
    <header className="headerNavbar">
      <div className="container">
        <nav>
          <div className="logo">
            <img src="logos/LogoCajaSolidaria.png" alt="Logo" />
          </div>
          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            {linksToShow.map((route) => (
              <li key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
          <div className="icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
