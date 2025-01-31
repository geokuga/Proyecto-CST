import "./SimularCredito.css";
import React, { useState } from "react";

export default function SimularCredito() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="Scontenedor">
      <div className="SCont">
        <label>Selecciona el tipo de crédito que necesitas:</label>

        <section className="SContButton">
          <div className="SContSeleccion">
            <button
              className={selectedButton === "comercial" ? "selected" : ""}
              onClick={() => handleButtonClick("comercial")}
            >
              <i className="fa fa-truck" aria-hidden="true"></i>
            </button>
            <label>Comercial</label>
          </div>

          <div className="SContSeleccion">
            <button
              className={selectedButton === "agricola" ? "selected" : ""}
              onClick={() => handleButtonClick("agricola")}
            >
              <i className="fa fa-leaf" aria-hidden="true"></i>
            </button>
            <label>Agricola</label>
          </div>

          <div className="SContSeleccion">
            <button
              className={selectedButton === "ganadera" ? "selected" : ""}
              onClick={() => handleButtonClick("ganadera")}
            >
              <i className="fa fa-paw" aria-hidden="true"></i>
            </button>
            <label>Ganadera</label>
          </div>
        </section>

        <label className="STitulos">Ingresa la cantidad en MXM:</label>

        <input type="number" id="numerico" name="numerico" step="100" />
      </div>
    </section>
  );
}
