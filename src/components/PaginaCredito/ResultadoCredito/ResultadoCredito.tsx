import "./ResultadoCredito.css";
import React, { useState } from "react";
import TablaAmortizacion from "./TablaAmortizacion";

interface ResultadoCreditoProps {
  tipoCredito: string | null;
  cantidad: string;
  plazo: string;
}

const ResultadoCredito: React.FC<ResultadoCreditoProps> = ({
  tipoCredito,
  cantidad,
  plazo,
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

  let tasa = 0;
  if (tipoCredito === "comercial") {
    tasa = 0.015; // 1.5% mensual
  } else if (tipoCredito === "agricola" || tipoCredito === "ganadera") {
    tasa = 0.0125; // 1.25% mensual
  } else if (tipoCredito === "personal") {
    tasa = 0.018; // 1.8% mensual
  }

  const subtotal = cantidadNumerica * tasa;
  const iva = tipoCredito === "personal" ? subtotal * 0.16 : 0;
  const total = cantidadNumerica + subtotal + iva;

  let divisor = 1;
  switch (plazo) {
    case "Mensuales":
      divisor = 12;
      break;
    default:
      divisor = 12; // Solo mensual por ahora
  }

  const pagoPorPeriodo = total / divisor;

  return (
    <section className="ContRCredito">
      <section className="ContResultInterno">
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <p className="subtitulos-Resultado">Subtotal</p>
            <p>
              $
              {subtotal.toLocaleString("en-US", {
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
              {iva.toLocaleString("en-US", {
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
              {total.toLocaleString("en-US", {
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
