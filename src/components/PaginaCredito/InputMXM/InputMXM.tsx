import "./InputMXM.css";
import React, { useState, useEffect } from "react";

interface InputMXMProps {
  onQuantityChange: (valor: string) => void;
  onloanTermChange: (loanTerm: string) => void;
  onrepaymentPlan: (plan: number) => void;
}

const InputMXM: React.FC<InputMXMProps> = ({
  onQuantityChange,
  onloanTermChange,
  onrepaymentPlan,
}) => {
  const [quantity, setQuantity] = useState<string>("");
  const [availablerepaymentPlan, setAvailablerepaymentPlan] = useState<number[]>([]);

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

  const handleloanTermChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onloanTermChange(event.target.value);
  };
  const handlerepaymentPlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onrepaymentPlan(parseFloat(event.target.value));
  };

  useEffect(() => {
    const inputValue = quantity.replace("$", "").replace(/,/g, "");
    const quantityCleaned = parseFloat(inputValue);
    if (!isNaN(quantityCleaned)) {
      const repaymentPlans = getAvailablerepaymentPlan(quantityCleaned);
      setAvailablerepaymentPlan(repaymentPlans);
    } else {
      setAvailablerepaymentPlan([]);
    }
  }, [quantity]);

  const getAvailablerepaymentPlan = (quantity: number) => {
    if (quantity >= 500 && quantity < 5000) {
      return [4, 6, 8, 12];
    }
    else if (quantity >= 5000 && quantity < 20000) {
      return [6, 12, 18, 24];
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
          onChange={handlerepaymentPlanChange}
        >
          {availablerepaymentPlan.map((loanTerm) => (
            <option key={loanTerm} value={loanTerm}>{loanTerm} meses</option>
          ))}
        </select>
      </section>
      <section className="ContSeleccionCredito">
        <label className="STitulos">Selecciona el loanTerm de pago:</label>
        <select
          id="opciones"
          name="opciones"
          className="input-Select"
          onChange={handleloanTermChange}
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
