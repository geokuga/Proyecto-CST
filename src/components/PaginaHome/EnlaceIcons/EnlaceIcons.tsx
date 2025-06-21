import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faGift, faShop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./EnlaceIcons.css";

export default function EnlaceIcons() {
  return (
    <section className="enlace-icons-container">
      <section className="enlace-icons-section">
        <Link to="/promociones">
          <div className="enlace-icons icon-gift">
            <FontAwesomeIcon icon={faGift} />
          </div>
          <h1>Promociones</h1>
        </Link>
      </section>

      <section className="enlace-icons-section">
        <Link to="/water">
          <div className="enlace-icons icon-water">
            <FontAwesomeIcon icon={faDroplet} />
          </div>
          <h1>Proyecto Water</h1>
        </Link>
      </section>

      <section className="enlace-icons-section">
        <Link to="/otrosBeneficios">
          <div className="enlace-icons icon-shop">
            <FontAwesomeIcon icon={faShop} />
          </div>
          <h1>Otros servicios</h1>
        </Link>
      </section>
    </section>
  );
}
