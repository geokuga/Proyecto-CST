import "./CuentaInversion.css";

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

export default function CuentaInversion() {
  return (
    <section className="contenedor-ahorro">
      <div className="titulo-principal-ahorro">
        <h2>Cuenta de Inversión</h2>
      </div>
      <section className="cont-ahorro">
        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Descripción</h3>
          </div>
          <div className="contenido-ahorro">
            <span className="Descripcion-tipo-ahorro">
              Se abre con un mínimo de $1,000.00. El socio elige plazos de 28,
              91 o 182 días, y la tasa de interés varía según el monto y plazo.
              Al vencimiento, los intereses se abonan y, si no hay movimientos,
              el capital se reinvierte automáticamente.
            </span>
          </div>
        </section>

        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Beneficios</h3>
          </div>
          <div className="contenido-ahorro">
            <Item text="Ganancia al vencimiento" />
            <Item text="Interés competitivo" />
            <Item text="Reinversión automática" />
            <Item text="Plazos: 28, 91 o 182 días" />
            <Item text="Ahorro seguro" />
            <Item text="Sin comisiones" />
          </div>
        </section>

        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Requisitos</h3>
          </div>
          <div className="contenido-ahorro">
            <Item text="Ser socio activo" />
            <Item text="Monto mínimo: $1,000.00" />
            <Item text="Elegir plazo deseado" />
            <Item text="Firmar contrato de inversión" />
          </div>
        </section>
      </section>
    </section>
  );
}
