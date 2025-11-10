import "./Requisitos.css";
import { Link } from "react-router-dom";

interface ItemProps {
  text: string;
}

const Item: React.FC<ItemProps> = ({ text }) => {
  return (
    <p className="item-text">
      <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      <span>{text}</span>
    </p>
  );
};

export default function Requisitos() {
  return (
    <section className="RContent">
      <section className="RequisitosContent">
        <div className="TituloContent">
          <h3>Requisitos para ser socio</h3>
        </div>
        <div className="TextoContent TituloContentSM">
          <Item text="Comprobante de domicilio reciente" />
          <Item text="Identificación Oficial vigente" />
          <Item text="Cubrir parte social ($960)" />
        </div>
        <div className="TituloContentSM TituloContent">
          <h3>Socio menor</h3>
        </div>
        <div className="TextoContentSM TextoContent">
          <Item text="Acta de nacimiento" />
          <Item text="CURP" />
          <Item text="Comprobante de domicilio reciente" />
          <Item text="Identificación oficial del tutor" />
        </div>
      </section>

      <section className="RequisitosContent">
        <div className="TituloContent">
          <h3>Créditos</h3>
        </div>
        <div className="TextoContent">
          <Item text="Créditos comerciales" />
          <Item text="Créditos ganaderos" />
          <Item text="Créditos agrícolas" />
          <Item text="Créditos al consumo" />
          <Item text="Créditos a la vivienda" />
        </div>
        <div className="TituloContentSM TituloContent">
          <h3>Requisitos para crédito</h3>
        </div>
        <div className="TextoContentSM TextoContent">
          <Item text="Identificación oficial" />
          <Item text="Comprobante de domicilio" />
          <Item text="Comprobante de ingresos" />
          <Item text="Tener un ahorro del 10% al 20%" />
          <center>
            <Link to="/credito">
              <button className="RBton">Simular crédito</button>
            </Link>
          </center>
        </div>
      </section>

      <section className="RequisitosContent">
        <div className="TituloContent">
          <h3>Productos de ahorro</h3>
        </div>
        <div className="TextoContent">
          <Item text="Cuenta corriente" />
          <Item text="Ahorro juvenil" />
          <Item text="Cuenta promoción" />
          <Item text="Inversiones a plazo fijo" />
        </div>
      </section>
    </section>
  );
}
