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

  // Valor por defecto para tipo de crédito
  const tipoCredito = loanType || "personal";

  // Valor por defecto para el monto
  const sanitizedAmount = amount?.replace("$", "").replace(/,/g, "") || "0";
  const loanAmount = parseFloat(sanitizedAmount);
  const interestRate = tipoCredito === "personal" ? 0.18 : 0.15;

  // Calcular pagos totales
  const totalPayments = numberOfPayments(term, plan);
  const pagoPorPeriodo = totalPayments > 0 ? loanAmount / totalPayments : 0;

  /***** CALCULO DE INTERESES EXACTO *****/
  const start = new Date();
  const { diasEntreFechas } = calcularFechasPagos(start, totalPayments, term);

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
        <section className="titulos">
          <p className="subtitulos-Resultado">Total intereses</p>
          <p className="subtitulos-Resultado">IVA</p>
          <p className="subtitulos-Resultado">Pago por periodo ({term})</p>
          <p className="subtitulos-Resultado">Total a pagar</p>
        </section>
        <section className="resultados">
          <p>
            $
            {intereses.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p>
            $
            {IVA.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p>
            $
            {pagoPorPeriodo.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p>
            $
            {TOTAL.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </section>
      </section>
      <section className="last-row">
        <button onClick={() => setShowTable(true)}>Más información</button>
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
