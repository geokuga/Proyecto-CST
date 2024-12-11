import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src="public\logos\LogoCajaSolidaria.png" alt="" />
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a href="">Promociones</a>
              </li>
              <li>
                <a href="">Servicio</a>
              </li>
              <li>
                <a href="">Credito</a>
              </li>
              <li>
                <a href="">Conocenos</a>
              </li>
              <li>
                <a href="">Contacto</a>
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
