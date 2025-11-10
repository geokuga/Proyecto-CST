import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setOpen(!isOpen);

  const location = useLocation();
  const currentPath = location.pathname;

  const routes = [
    { path: "/", name: "Inicio" },
    { path: "/promociones", name: "Promociones" },
    { path: "/ahorros", name: "Ahorros" },
    { path: "/water", name: "Proyecto water" },
    { path: "/credito", name: "Crédito" },
    { path: "/otrosBeneficios", name: "Otros beneficios" },
    { path: "/avisos", name: "Avisos" },
  ];

  const linksToShow = routes.filter((route) => route.path !== currentPath);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="headerNavbar">
      <div className="container">
        <nav ref={navRef}>
          <div className="logo">
            <img src="logos/LogoCajaSolidaria.png" alt="Logo" />
          </div>
          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            {linksToShow.map((route) => (
              <li key={route.path}>
                <Link to={route.path} onClick={() => setOpen(false)}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="icon" onClick={toggleMenu} ref={iconRef}>
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
