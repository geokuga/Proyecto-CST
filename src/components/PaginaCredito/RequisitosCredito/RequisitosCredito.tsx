import React from "react";
import "./RequisitosCredito.css";

interface ItemProps {
  text: string;
}

const Item: React.FC<ItemProps> = ({ text }) => (
  <p>
    <i className="fa fa-check-circle-o" aria-hidden="true"></i> &nbsp;{text}
  </p>
);

const RequisitosCredito: React.FC = () => (
  <section className="CreditRContent">
    <section className="CreditRequisitosContent">
      <div className="CreditTituloContent">
        <h3>Créditos</h3>
      </div>
      <div className="CreditTextoContent">
        <Item text="Créditos comerciales" />
        <Item text="Créditos ganaderos" />
        <Item text="Créditos agrícolas" />
        <Item text="Créditos al consumo" />
        <Item text="Créditos a la vivienda" />
      </div>
      <div className="CreditTituloContentSM CreditTituloContent">
        <h3>Requisitos para crédito</h3>
      </div>
      <div className="CreditTextoContentSM CreditTextoContent">
        <Item text="Acta de nacimiento" />
        <Item text="CURP" />
        <Item text="Comprobante de domicilio" />
        <Item text="Identificación oficial del tutor" />
        <Item text="Cubrir parte social ($960)" />
      </div>
    </section>
  </section>
);

export default RequisitosCredito;
