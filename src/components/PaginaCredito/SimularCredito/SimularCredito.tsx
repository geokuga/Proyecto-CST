import "./SimularCredito.css";
import React, { useState } from "react";

export default function SimularCredito() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState<string>("");

  const handleButtonClick = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace("$", "").replace(/,/g, "");
    if (inputValue === "" || isNaN(Number(inputValue))) {
      setQuantity("");
    } else {
      const numericValue = Math.min(parseFloat(inputValue), 700000);
      setQuantity(`$${numericValue.toLocaleString("en-US")}`);
    }
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const numericValue =
        prevQuantity === ""
          ? 0
          : parseFloat(prevQuantity.replace("$", "").replace(/,/g, ""));
      return `$${Math.max(numericValue - 1000, 0).toLocaleString("en-US")}`;
    });
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const numericValue =
        prevQuantity === ""
          ? 0
          : parseFloat(prevQuantity.replace("$", "").replace(/,/g, ""));
      return `$${Math.min(numericValue + 1000, 500000).toLocaleString(
        "en-US"
      )}`;
    });
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

          <div className="SContSeleccion">
            <button
              className={selectedButton === "personal" ? "selected" : ""}
              onClick={() => handleButtonClick("personal")}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
            </button>
            <label>Personal</label>
          </div>
        </section>

        <label className="STitulos">Ingresa la cantidad en MXM:</label>

        <div className="quantity-input">
          <button
            className="quantity-button Bizquierda"
            onClick={decrementQuantity}
          >
            -
          </button>
          <input
            type="text"
            id="numerico"
            name="numerico"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button
            className="quantity-button Bderecha"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}
