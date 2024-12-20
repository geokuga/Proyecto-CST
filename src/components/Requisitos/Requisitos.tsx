import "./Requisitos.css";

export default function Requisitos() {
  return (
    <section className="RContent">
      <section className="RequisitosContent">
        <div className="TituloContent">
          <h3>Ser socio</h3>
        </div>
        <div className="TextoContent">
          <p>Acta de nacimiento</p>
          <p>CURP</p>
          <p>Comprobante de domicilio</p>
          <p>Identificacion Oficial</p>
          <p>Acta de matrimonio (en caso de contar con ella)</p>
        </div>
      </section>
      <section className="RequisitosContent">
        <div className="TituloContent">
          <h3>Ser socio menor</h3>
        </div>
        <div className="TextoContent">
          <p>Acta de nacimiento</p>
          <p>CURP</p>
          <p>Comprobante de domicilio</p>
          <p>Identificación oficial del tutor</p>
        </div>
      </section>
      <section className="RequisitosContent">
        <div className="TituloContent"></div>
        <div className="TextoContent"></div>
      </section>
    </section>
  );
}
