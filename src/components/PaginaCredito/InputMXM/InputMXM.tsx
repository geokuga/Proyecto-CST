import "./InputMXM.css";
import React, { useState, useEffect } from "react";

interface InputMXMProps {
  onQuantityChange: (valor: string) => void;
  onPlazoChange: (plazo: string) => void;
  onPaymentPlan: (plan: number) => void;
}

const InputMXM: React.FC<InputMXMProps> = ({
  onQuantityChange,
  onPlazoChange,
  onPaymentPlan,
}) => {
  const [quantity, setQuantity] = useState<string>("");
  const [availablePaymentPlan, setAvailablePaymentPlan] = useState<number[]>([]);

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

  const handlePlazoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPlazoChange(event.target.value);
  };
  const handlePaymentPlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPaymentPlan(parseFloat(event.target.value));
  };

  useEffect(() => {
    const inputValue = quantity.replace("$", "").replace(/,/g, "");
    const quantityCleaned = parseFloat(inputValue);
    if (!isNaN(quantityCleaned)) {
      const paymentPlans = getAvailablePaymentPlan(quantityCleaned);
      setAvailablePaymentPlan(paymentPlans);
    } else {
      setAvailablePaymentPlan([]);
    }
  }, [quantity]);

  const getAvailablePaymentPlan = (quantity: number) => {
    if (quantity >= 500 && quantity < 5000) {
      return [12];
    }
    else if (quantity >= 5000 && quantity < 20000) {
      return [12, 18, 24];
    }
    else if (quantity >= 20000 && quantity < 50000) {
      return [12, 18, 24, 36];
    }
    else if (quantity >= 50000) {
      return [12, 18, 24, 36, 60];
    }
    return [];
  }

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
        <label className="STitulos">Selecciona el plan de pago:</label>
        <select
          id="opciones"
          name="opciones"
          className="input-Select"
          onChange={handlePaymentPlanChange}
        >
          {availablePaymentPlan.map((plazo) => (
            <option key={plazo} value={plazo}>{plazo} meses</option>
          ))}
        </select>
      </section>
      <section className="ContSeleccionCredito">
        <label className="STitulos">Selecciona el plazo de pago:</label>
        <select
          id="opciones"
          name="opciones"
          className="input-Select"
          onChange={handlePlazoChange}
        >
          <option value="semanales">Semanales</option>
          <option value="quincenales">Quincenales</option>
          <option value="mensuales">Mensuales</option>
          <option value="bimestrales">Bimestrales</option>
          <option value="semestrales">Semestrales</option>
          <option value="anual">Anual</option>
          <option value="unico">Único pago</option>
        </select>
      </section>
    </section>
  );
};

export default InputMXM;
