import "./Beneficios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faBolt,
  faLeaf,
  faHeart,
  faUsers,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function Beneficios() {
  return (
    <section className="beneficios-container">
      <img src="logos/caña.png" alt="Logo Caña" />

      <div className="beneficios-container-text">
        <h2>Beneficios del Proyecto Water</h2>
        <p>
          <FontAwesomeIcon icon={faPercent} className="Icon-Beneficios-Water" />
          Tasa de interés baja
        </p>
        <p>
          <FontAwesomeIcon icon={faBolt} className="Icon-Beneficios-Water" />
          Respuesta rápida
        </p>
        <p>
          <FontAwesomeIcon icon={faLeaf} className="Icon-Beneficios-Water" />
          Crédito responsable y sustentable
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} className="Icon-Beneficios-Water" />
          Impacto positivo
        </p>
        <p>
          <FontAwesomeIcon icon={faUsers} className="Icon-Beneficios-Water" />
          Ideal para hogares y comunidades
        </p>
        <p>
          <FontAwesomeIcon
            icon={faHandshake}
            className="Icon-Beneficios-Water"
          />
          Condiciones flexibles
        </p>
      </div>
    </section>
  );
}
