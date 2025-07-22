import "./ResultadoCredito.css";
import React, { useState } from "react";
import TablaAmortizacion from "./TablaAmortizacion";
import {
  numberOfPayments,
  interestCalculation,
  calcularFechasPagos,
} from "./AccruedInterestCalculation";

interface ResultadoCreditoProps {
  loanType: string | null;
  amount: string;
  loanTerm: string;
  repaymentPlan: number;
}

const ResultadoCredito: React.FC<ResultadoCreditoProps> = ({
  loanType,
  amount,
  loanTerm,
  repaymentPlan,
}) => {
  const [showTable, setShowTable] = useState(false);

  const plan = repaymentPlan;
  const term = loanTerm;
  const tipoCredito = loanType || "personal";

  const sanitizedAmount = amount?.replace("$", "").replace(/,/g, "") || "0";
  const loanAmount = parseFloat(sanitizedAmount);
  const interestRate =
    tipoCredito === "personal" || tipoCredito === "comercial" ? 0.216 : 0.18;

  const totalPayments = numberOfPayments(term, plan);
  const pagoPorPeriodo = totalPayments > 0 ? loanAmount / totalPayments : 0;

  const start = new Date();
  const { diasEntreFechas } = calcularFechasPagos(start, totalPayments, term);

console.log("Total pagos:", totalPayments);
console.log("Días entre fechas:", diasEntreFechas);

  
  const totalIntereses = (
    paymentDays: number[],
    pagoPorPeriodo: number,
    montoPrestado: number
  ): number => {
    let total = 0;
    for (let i = 0; i < paymentDays.length; i++) {
      total += interestCalculation(montoPrestado, paymentDays[i], interestRate);
      montoPrestado -= pagoPorPeriodo;
    }
    return total;
  };

  const intereses = totalIntereses(diasEntreFechas, pagoPorPeriodo, loanAmount);

  const totalIva = (
    paymentDays: number[],
    pagoPorPeriodo: number,
    montoPrestado: number
  ): number => {
    const iva = tipoCredito === "personal" ? 0.16 : 0;
    let total = 0;
    for (let i = 0; i < paymentDays.length; i++) {
      const interes = interestCalculation(
        montoPrestado,
        paymentDays[i],
        interestRate
      );
      total += interes * iva;
      montoPrestado -= pagoPorPeriodo;
    }
    return total;
  };

  const IVA = totalIva(diasEntreFechas, pagoPorPeriodo, loanAmount);

  const Total = (intereses: number, iva: number): number => intereses + iva;
  const TOTAL = Total(intereses, IVA) + loanAmount;

  return (
    <main className="ContRCredito">
      <section className="first-row">
        <div className="filaResultado">
          <p className="subtitulos-Resultado">Total intereses</p>
          <p className="valorResultado">
            ${intereses.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="filaResultado">
          <p className="subtitulos-Resultado">IVA</p>
          <p className="valorResultado">
            ${IVA.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="filaResultado">
          <p className="subtitulos-Resultado">Pago por periodo ({term})</p>
          <p className="valorResultado">
            $
            {pagoPorPeriodo.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="filaResultado">
          <p className="subtitulos-Resultado">Total a pagar</p>
          <p className="valorResultado">
            ${TOTAL.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>
      </section>

      <section className="last-row">
        <button
          onClick={() => {
            setShowTable(false);
            setTimeout(() => setShowTable(true), 50);
          }}
        >
          Descargar simulación de crédito
        </button>
      </section>

      {showTable && (
        <TablaAmortizacion
          loanType={tipoCredito}
          amount={loanAmount}
          loanTerm={term}
          interestRate={interestRate}
          repaymentPlan={plan}
          pagosTotales={totalPayments}
        />
      )}
    </main>
  );
};

export default ResultadoCredito;
