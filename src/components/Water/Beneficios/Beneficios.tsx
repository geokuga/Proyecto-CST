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
          <FontAwesomeIcon icon={faPercent} /> Tasa de interés baja
        </p>
        <p>
          <FontAwesomeIcon icon={faBolt} /> Respuesta rápida
        </p>
        <p>
          <FontAwesomeIcon icon={faLeaf} /> Crédito responsable y sustentable
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} /> Impacto positivo
        </p>
        <p>
          <FontAwesomeIcon icon={faUsers} /> Ideal para hogares, escuelas,
          comunidades
        </p>
        <p>
          <FontAwesomeIcon icon={faHandshake} /> Condiciones flexibles
        </p>
      </div>
    </section>
  );
}
