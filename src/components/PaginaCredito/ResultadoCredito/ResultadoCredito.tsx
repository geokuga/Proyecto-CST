import "./ResultadoCredito.css";
import React from "react";

interface ResultadoCreditoProps {
  resultado: number;
}

const ResultadoCredito: React.FC<ResultadoCreditoProps> = ({ resultado }) => {
  const ResultadoCredito = resultado / 48;
  const ResultadoIVA = 0;

  return (
    <section className="ContRCredito">
      <section className="ContResultInterno">
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <p className="subtitulos-Resultado">IVA</p>
            <p>
              $
              {ResultadoCredito.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <p className="subtitulos-Resultado">Subtotal</p>
            <p>
              $
              {ResultadoCredito.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <p className="subtitulos-Resultado">Total</p>
            <p>
              $
              {ResultadoCredito.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <button>Más información</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ResultadoCredito;
