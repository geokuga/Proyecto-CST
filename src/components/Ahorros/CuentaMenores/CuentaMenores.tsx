import "./CuentaMenores.css";

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

export default function CuentaMenores() {
  return (
    <section className="contenedor-ahorro">
      <div className="titulo-principal-ahorro">
        <h2>Cuenta Juvenil</h2>
      </div>
      <section className="cont-ahorro">
        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Descripción</h3>
          </div>
          <div className="contenido-ahorro">
            <span className="Descripcion-tipo-ahorro">
              Diseñada para menores de edad, se puede abrir desde $1.00.
              Comienza a generar intereses al alcanzar $50.00. Tiene un tope de
              1500 UDIS, salvo que el padre o tutor sea socio, en cuyo caso no
              hay límite.
            </span>
          </div>
        </section>

        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Beneficios</h3>
          </div>
          <div className="contenido-ahorro">
            <Item text="Apertura desde $1.00" />
            <Item text="Interés anual del 2.5%" />
            <Item text="Genera interés desde $50.00" />
            <Item text="Depósitos libres con tutor socio" />
            <Item text="Sin costo de mantenimiento" />
          </div>
        </section>

        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Requisitos</h3>
          </div>
          <div className="contenido-ahorro">
            <Item text="Ser menor de edad" />
            <Item text="Acta de nacimiento del menor" />
            <Item text="Identificación del padre o tutor" />
            <Item text="Comprobante de domicilio" />
          </div>
        </section>
      </section>
    </section>
  );
}
