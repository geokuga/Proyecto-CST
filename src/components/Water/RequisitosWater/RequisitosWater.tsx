import "./RequisitosWater.css";

interface ItemProps {
  text: string;
}
const Item: React.FC<ItemProps> = ({ text }) => {
  return (
    <p>
      <i className="fa fa-check-circle-o icon-water" aria-hidden="true"></i>
      &nbsp;{text}
    </p>
  );
};

export default function RequisitosWater() {
  return (
    <section className="Container-requisitos-water">
      <img src="img/PublicidadWater2.png" alt="" />
      <section className="RequisitosContentWater">
        <div className=" TituloContentWater">
          <p>Requisitos</p>
        </div>
        <div className="TextoContentWater">
          <Item text="Ser socio" />
          <Item text="Comprobante de domicilio" />
          <Item text="Identificación oficial" />
          <Item text="El 10% del valor que solicitaras" />
          <Item text="Comprobante de ingresos" />
        </div>
      </section>
      <img src="img/PublicidadWater1.jpg" alt="" />
    </section>
  );
}
