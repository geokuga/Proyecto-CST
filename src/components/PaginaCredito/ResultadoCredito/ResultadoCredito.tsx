import "./ResultadoCredito.css";
import React from "react";

interface ResultadoCreditoProps {
  resultado: number;
}

const ResultadoCredito: React.FC<ResultadoCreditoProps> = ({ resultado }) => {
  const resultadoSemestrales = resultado / 2;
  const resultadoMensuales = resultado / 12;
  const resultadoQuincenales = resultado / 24;
  const resultadoSemanales = resultado / 48;

  return (
    <section className="ContRCredito">
      <section className="ContResultInterno">
        <h2>Tipos de pago</h2>
        <div className="ColeccionResultados">
          <div className="resultado-credito">
            <h3>Anuales:</h3>
            <p>
              $
              {resultado.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="resultado-credito">
            <h3>Semestrales:</h3>
            <p>
              $
              {resultadoSemestrales.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="resultado-credito">
            <h3>Mensuales:</h3>
            <p>
              $
              {resultadoMensuales.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="resultado-credito">
            <h3>Quincenales:</h3>
            <p>
              $
              {resultadoQuincenales.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="resultado-credito">
            <h3>Semanales:</h3>
            <p>
              $
              {resultadoSemanales.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ResultadoCredito;
