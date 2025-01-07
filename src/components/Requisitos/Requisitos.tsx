import "./Requisitos.css";

export default function Requisitos() {
  return (
    <section className="RContent">
      <section className="RequisitosContent">
        <div className="TituloContent">
          <h3>Requisitos para ser socio</h3>
        </div>
        <div className="TextoContent TituloContentSM">
          <p>Comprobante de domicilio</p>
          <p>Identificacion Oficial</p>
          <p>Parte social ($960)</p>
        </div>
        <div className="TituloContentSM TituloContent">
          <h3>Socio menor</h3>
        </div>
        <div className="TextoContentSM TextoContent">
          <p>Acta de nacimiento</p>
          <p>CURP</p>
          <p>Comprobante de domicilio</p>
          <p>Identificación oficial del tutor</p>
        </div>
      </section>

      <section className="RequisitosContent">
        <div className="TituloContent">
          <h3>Creditos</h3>
        </div>
        <div className="TextoContent">
          <p>
            <b className="subtituloR">Socio</b>
          </p>
          <p>Comprobante de domicilio</p>
          <p>Identificacion oficial</p>
          <p>Comprobante de ingresos</p>
          <p>Tener ahorro de 10% o 20%</p>
          <p>
            <b className="subtituloR">Aval</b>
          </p>
          <p>Comprobante de domicilio</p>
          <p>Identificacion oficial</p>
          <p>Comprobante de ingresos</p>
          <p>No ser mayor de 60 años de edad</p>
          <button className="RBton">Simular credito</button>
        </div>
      </section>

      <section className="RequisitosContent">
        <div className="TituloContent">
          <h3>Inversiones</h3>
        </div>
        <div className="TextoContent"></div>
      </section>
    </section>
  );
}
