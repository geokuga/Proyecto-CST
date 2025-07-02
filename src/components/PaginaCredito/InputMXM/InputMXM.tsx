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
  const [availablerepaymentPlan, setAvailablerepaymentPlan] = useState<
    number[]
  >([4]);
  const [loanTerm, setLoanTerm] = useState<string>("semanales");
  const [repaymentPlan, setRepaymentPlan] = useState<number | null>(4);
  const [userSelectedRepaymentPlan, setUserSelectedRepaymentPlan] = useState(false);
  const [userSelectedLoanTerm, setUserSelectedLoanTerm] = useState(false);



  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace("$", "").replace(/,/g, "");
    if (inputValue === "" || isNaN(Number(inputValue))) {
      setQuantity("");
    } else {
      const numericValue = Math.min(parseFloat(inputValue), 500000);
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

  const handlerepaymentPlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const value = parseFloat(event.target.value);
  setRepaymentPlan(value);
  onrepaymentPlan(value);
  setUserSelectedRepaymentPlan(true);
};

const handleloanTermChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const value = event.target.value;
  setLoanTerm(value);
  onloanTermChange(value);
  setUserSelectedLoanTerm(true);
};


  useEffect(() => {
  const inputValue = quantity.replace("$", "").replace(/,/g, "");
  const quantityCleaned = parseFloat(inputValue);

  if (!isNaN(quantityCleaned)) {
    let repaymentPlans: number[] = [];

    if (loanTerm === "unico") {
      repaymentPlans = [18];
    } else {
      repaymentPlans = getAvailablerepaymentPlan(quantityCleaned);
    }

    setAvailablerepaymentPlan(repaymentPlans);

    if (repaymentPlans.length > 0 && !userSelectedRepaymentPlan) {
      const firstPlan = repaymentPlans[0];
      setRepaymentPlan(firstPlan);
      onrepaymentPlan(firstPlan);
    }

    if (!userSelectedLoanTerm) {
      setLoanTerm("semanales");
      onloanTermChange("semanales");
    }
  } else {
    setAvailablerepaymentPlan([]);
  }
}, [quantity, loanTerm, repaymentPlan, userSelectedRepaymentPlan, userSelectedLoanTerm]);


  const getAvailablerepaymentPlan = (quantity: number) => {
    if (quantity >= 500 && quantity < 5000) {
      return [3, 6, 9, 12];
    } else if (quantity >= 5000 && quantity < 20000) {
      return [6, 12, 18, 24];
    } else if (quantity >= 20000 && quantity < 50000) {
      return [12, 18, 24, 36];
    } else if (quantity >= 50000) {
      return [12, 18, 24, 36, 60];
    }
    return [];
  };

  return (
    <section className="Scontenedor">
      <section className="SCont">
        <label className="STitulos">Cantidad a solicitar:</label>

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
      <section className="Rcont">
        <div className="ContSeleccionCredito">
          <label className="STitulos">Tiempo para cubrir:</label>
          <select
            id="opciones"
            name="opciones"
            className="input-Select"
            value={repaymentPlan?.toString()}
            onChange={handlerepaymentPlanChange}
          >
            {availablerepaymentPlan.map((loanTerm) => (
              <option key={loanTerm} value={loanTerm}>
                {loanTerm} meses
              </option>
            ))}
          </select>
        </div>
        <div className="ContSeleccionCredito">
          <label className="STitulos">Plazos de pagos:</label>
          <select
            id="opciones"
            name="opciones"
            className="input-Select"
            onChange={handleloanTermChange}
          >
            <option value="semanales">Semanales</option>
            <option value="quincenales">Quincenales</option>
            <option value="mensuales">Mensuales</option>
            {repaymentPlan !== null && repaymentPlan % 2 == 0 &&
              <option value="bimestrales">Bimestrales</option>
            }
            {repaymentPlan !== null &&
              repaymentPlan >= 6 &&
              repaymentPlan < 12 && (
                <>
                  <option value="semestrales">Semestrales</option>
                </>
              )}
            {repaymentPlan !== null && repaymentPlan >= 12 && (
              <>
                <option value="anual">Anual</option>
                <option value="unico">Único pago</option>
              </>
            )}
          </select>
        </div>
      </section>
    </section>
  );
};

export default InputMXM;
