import "./ResultadoCredito.css";
import React, { useState } from "react";
import TablaAmortizacion from "./TablaAmortizacion";

interface ResultadoCreditoProps {
  tipoCredito: string | null;
  cantidad: string;
  plazo: string;
  paymentPlan: number;
}

const ResultadoCredito: React.FC<ResultadoCreditoProps> = ({
  tipoCredito,
  cantidad,
  plazo,
  paymentPlan,
}) => {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const cantidadNumerica = parseFloat(
    cantidad.replace("$", "").replace(/,/g, "")
  );

  if (isNaN(cantidadNumerica) || !tipoCredito) {
    return (
      <section className="ContRCredito">
        <p className="mensaje-error">
          Por favor, selecciona un tipo de crédito y una cantidad válida.
        </p>
      </section>
    );
  }

  const plan = paymentPlan;
  let tasa = 0; 
  let daysBetweenPayments = 0;
  tasa = tipoCredito === "personal" ? 0.18 : 0.15;
  let pagosTotales = 1;
  //modificar aqui
  switch (plazo) {
    case "semanales":
      pagosTotales = 4 * plan; //depende de plazo
      daysBetweenPayments = 7;
      break;
    case "quincenales":
      pagosTotales = 2 * plan;
      daysBetweenPayments = 15;
      break;
    case "mensuales":
      pagosTotales = plan;
      daysBetweenPayments = 30;
      break;
    case "bimestrales":
      pagosTotales = Math.floor(plan / 2);
      daysBetweenPayments = 60; 
      break;
    case "semestrales":
      pagosTotales = plan / 6;
      daysBetweenPayments = 180;
      break;
    case "anual":
      pagosTotales = 1;
      daysBetweenPayments = 360;
      break;
    case "unico":
      pagosTotales = 1;
      break;
    default:
      pagosTotales = 1;
  }

  const pagoPorPeriodo = pagosTotales > 0 ? cantidadNumerica / pagosTotales : 0;

/***** CALCULO DE INTERESES EXACTO ******/

// Verifica si el día es fin de semana
const isWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

// Cuenta los días hábiles entre dos fechas
const countWeekdays = (start: Date, end: Date): number => {
  let count = 0;
  const current = new Date(start);
  while (current < end) {
    if (!isWeekend(current)) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }
  return count;
};

// Genera el arreglo de días hábiles por pago
const generatePaymentDays = (
  startDate: Date,
  numberOfPayments: number,
  daysBetweenPayments: number
): number[] => {
  const paymentDays: number[] = [];

  let current = new Date(startDate);

  for (let i = 0; i < numberOfPayments; i++) {
    const next = new Date(current);
    next.setDate(next.getDate() + daysBetweenPayments);

    const days = countWeekdays(current, next);
    paymentDays.push(days);

    current = next;
  }

  return paymentDays;
};

const start = new Date();
const paymentDays = generatePaymentDays(start, pagosTotales, daysBetweenPayments);
console.log(paymentDays);

//Funcion secundaria
const totalIntereses = (paymentDays: number[]): number => {
  let totalIntereses = 0;
  for(let i = 0; i < paymentDays.length; i++){
    totalIntereses += (cantidadNumerica * paymentDays[i] * tasa) / 360;
  }
  return totalIntereses;
}
const intereses = totalIntereses(paymentDays);

//Funcion secundaria
const totalIva = (paymentDays: number[]): number => {
  const iva = tipoCredito === "personal" ? 0.16 : 0;
  let totalIva = 0;
  let interes = 0;
  for(let i = 0; i < paymentDays.length; i++){
    interes = (cantidadNumerica * paymentDays[i] * tasa) / 360;
    totalIva += interes * iva;
  }
  return totalIva;
}

const IVA = totalIva(paymentDays);

//Funcion primaria
const Total = (intereses: number, iva: number): number => {
  return intereses + iva;
}
const TOTAL = Total(intereses, IVA) + cantidadNumerica; 

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
            <p className="subtitulos-Resultado">Pago por periodo ({plazo})</p>
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
            <button onClick={() => setMostrarTabla(true)}>
              Más información
            </button>
          </div>
        </div>

        {mostrarTabla && (
          <TablaAmortizacion
            tipoCredito={tipoCredito}
            cantidad={cantidadNumerica}
            plazo={plazo}
            tasaMensual={tasa}
          />
        )}
      </section>
    </section>
  );
};

export default ResultadoCredito;
