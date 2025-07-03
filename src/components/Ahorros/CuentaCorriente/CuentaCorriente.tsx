import "./CuentaCorriente.css";

interface ItemProps {
  text: string;
}
const Item: React.FC<ItemProps> = ({ text }) => {
  return (
    <p>
      <i className="fa fa-check-circle-o icono-ahorro" aria-hidden="true"></i>
      &nbsp;{text}
    </p>
  );
};

export default function CuentaCorriente() {
  return (
    <section className="contenedor-ahorro">
      <div className="titulo-principal-ahorro">
        <h2>Cuenta Corriente</h2>
      </div>
      <section className="cont-ahorro">
        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Descripción</h3>
          </div>
          <div className="contenido-ahorro">
            <span className="Descripcion-tipo-ahorro">
              Cuenta accesible que se abre con solo $50.00. Permite depósitos y
              retiros diarios, y genera interés anual del 2.5%, abonado
              mensualmente.
            </span>
          </div>
        </section>

        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Beneficios</h3>
          </div>
          <div className="contenido-ahorro">
            <Item text="Apertura desde $50.00" />
            <Item text="Interés del 2.5% anual" />
            <Item text="Retiros y depósitos diarios" />
            <Item text="Intereses abonados cada mes" />
            <Item text="Sin costo de mantenimiento" />
          </div>
        </section>

        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Requisitos</h3>
          </div>
          <div className="contenido-ahorro">
            <Item text="Monto mínimo: $50.00" />
            <Item text="INE o identificación oficial" />
            <Item text="Comprobante de domicilio" />
          </div>
        </section>
      </section>
    </section>
  );
}
