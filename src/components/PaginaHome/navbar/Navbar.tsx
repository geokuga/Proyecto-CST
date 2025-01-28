import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="headerNavbar">
        <div className="container">
          <nav>
            <div className="logo">
              <img src="public/logos/LogoCajaSolidaria.png" alt="Logo" />
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a onClick={() => handleScroll("publicidad")}>Promociones</a>
              </li>
              <li>
                <a onClick={() => handleScroll("requisitos")}>Servicio</a>
              </li>
              <li>
                <Link to="/credito">Crédito</Link>
              </li>
              <li>
                <a onClick={() => handleScroll("descripcion")}>Conócenos</a>
              </li>
              <li>
                <a onClick={() => handleScroll("final")}>Contacto</a>
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
