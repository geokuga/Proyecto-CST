import "./InputMXM.css";
import React, { useState, useEffect } from "react";

interface InputMXMProps {
  onQuantityChange: (valor: string) => void;
}

const InputMXM: React.FC<InputMXMProps> = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState<string>("");

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

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
      return `$${Math.min(numericValue + 1000, 700000).toLocaleString(
        "en-US"
      )}`;
    });
  };

  return (
    <section className="Scontenedor">
      <section className="SCont">
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
            placeholder="$0"
          />
          <button
            className="quantity-button Bderecha"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </section>
      <section className="ContSeleccionCredito">
        <label className="STitulos">Selecciona el plazo a pagar:</label>
        <select id="opciones" name="opciones" className="input-Select">
          <option value="opcion1">Semanales</option>
          <option value="opcion2">Quincenales</option>
          <option value="opcion3">Mensuales</option>
          <option value="opcion4">Bimestrales</option>
          <option value="opcion5">Semestrales</option>
          <option value="opcion5">Anual</option>
          <option value="opcion5">Único pago</option>
        </select>
      </section>
    </section>
  );
};

export default InputMXM;
