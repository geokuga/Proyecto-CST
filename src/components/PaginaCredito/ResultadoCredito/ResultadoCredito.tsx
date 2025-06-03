import "./ResultadoCredito.css";
import React, { useState } from "react";
import TablaAmortizacion from "./TablaAmortizacion";
import { 
  numberOfPayments,
  interestCalculation,
  calcularFechasPagos
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
  let interestRate = 0; 
  interestRate = loanType === "personal" ? 0.18 : 0.15;
  let totalPayments = 1;

  const loanAmount = parseFloat(
    amount.replace("$", "").replace(/,/g, "")
  );

  if (isNaN(loanAmount) || !loanType) {
    return (
      <section className="ContRCredito">
        <p className="mensaje-error">
          Por favor, selecciona un tipo de crédito y una cantidad válida.
        </p>
      </section>
    );
  }
  totalPayments = numberOfPayments(loanTerm, plan);

  const pagoPorPeriodo = totalPayments > 0 ? loanAmount / totalPayments : 0;

/***** CALCULO DE INTERESES EXACTO **2****/

const start = new Date();
const { diasEntreFechas } = calcularFechasPagos(start, totalPayments, term);

//Funcion secundaria
const totalIntereses = (paymentDays: number[], pagoPorPeriodo: number, montoPrestado: number): number => {
  let totalIntereses = 0;
  for(let i = 0; i < paymentDays.length; i++){
    totalIntereses += interestCalculation(montoPrestado, paymentDays[i],interestRate);
    montoPrestado -= pagoPorPeriodo;
  }
  return totalIntereses;
}
const intereses = totalIntereses(diasEntreFechas, pagoPorPeriodo, loanAmount);

//Funcion secundaria
const totalIva = (paymentDays: number[], pagoPorPeriodo: number, montoPrestado: number): number => {
  const iva = loanType === "personal" ? 0.16 : 0;
  let totalIva = 0;
  let interes = 0;
  for(let i = 0; i < paymentDays.length; i++){
    interes = interestCalculation(montoPrestado, paymentDays[i], interestRate);
    totalIva += interes * iva;
    montoPrestado -= pagoPorPeriodo;
  }
  return totalIva;
}

const IVA = totalIva(diasEntreFechas, pagoPorPeriodo, loanAmount);

//Funcion primaria
const Total = (intereses: number, iva: number): number => {
  return intereses + iva;
}
const TOTAL = Total(intereses, IVA) + loanAmount; 

/* CALCULO DE INTERESES EXACTO */ 
  return (
    <section className="ContRCredito">
      <section className="ContResultInterno">
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <p className="subtitulos-Resultado">Total intereses</p>
            <p>
              $
              {intereses.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>

        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <p className="subtitulos-Resultado">IVA (16%)</p>
            <p>
              $
              {IVA.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <p className="subtitulos-Resultado">Pago por periodo ({loanTerm})</p>
            <p>
              $
              {pagoPorPeriodo.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <p className="subtitulos-Resultado">Total a pagar</p>
            <p>
              $
              {TOTAL.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>

        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <button onClick={() => setShowTable(true)}>
              Más información
            </button>
          </div>
        </div>

        {showTable && (
          <TablaAmortizacion
            loanType={loanType}
            amount={loanAmount}
            loanTerm={loanTerm}
            interestRate={interestRate}
            repaymentPlan={plan}
            pagosTotales={totalPayments}
          />
        )}
      </section>
    </section>
  );
};

export default ResultadoCredito;
