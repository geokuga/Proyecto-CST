import React from "react";
import "./BotonesSeleccion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faTractor,
  faCow,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface BotonesSeleccionProps {
  selectedButton: string | null;
  handleButtonClick: (buttonType: string) => void;
}

const BotonesSeleccion: React.FC<BotonesSeleccionProps> = ({
  selectedButton,
  handleButtonClick,
}) => {
  return (
    <section className="SeleccionCont">
      <div className="button-selection-container">
        <label className="Button-GTitulo">
          Seleccione el tipo de crédito que desea solicitar
        </label>
        <section className="button-selection">
          <div className="selection">
            <button
              className={selectedButton === "comercial" ? "selected" : ""}
              onClick={() => handleButtonClick("comercial")}
            >
              <FontAwesomeIcon
                className="iconC"
                icon={faTruck}
                aria-hidden="true"
              />
            </button>
            <label>Comercial</label>
          </div>

          <div className="selection">
            <button
              className={selectedButton === "agricola" ? "selected" : ""}
              onClick={() => handleButtonClick("agricola")}
            >
              <FontAwesomeIcon
                className="iconC"
                icon={faTractor}
                aria-hidden="true"
              />
            </button>
            <label>Agricola</label>
          </div>

          <div className="selection">
            <button
              className={selectedButton === "ganadera" ? "selected" : ""}
              onClick={() => handleButtonClick("ganadera")}
            >
              <FontAwesomeIcon
                className="iconC"
                icon={faCow}
                aria-hidden="true"
              />
            </button>
            <label>Ganadera</label>
          </div>

          <div className="selection">
            <button
              className={selectedButton === "personal" ? "selected" : ""}
              onClick={() => handleButtonClick("personal")}
            >
              <FontAwesomeIcon
                className="iconC"
                icon={faUser}
                aria-hidden="true"
              />
            </button>
            <label>Personal</label>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BotonesSeleccion;
