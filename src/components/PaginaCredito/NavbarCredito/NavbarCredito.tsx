import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarCredito.css";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header className="headerNavbar">
        <div className="container">
          <nav>
            <div className="logo">
              <img src="public/logos/LogoCajaSolidaria.png" alt="Logo" />
            </div>
            <ul className={isOpen ? "nav-link2 active" : "nav-link2"}>
              <li>
                <Link to="/">Home</Link>
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
