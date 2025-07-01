import "./CuentaPromocion.css";

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

export default function CuentaPromocion() {
  return (
    <section className="contenedor-ahorro">
      <div className="titulo-principal-ahorro">
        <h2>Cuenta de promoción</h2>
      </div>
      <section className="cont-ahorro">
        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Descripción</h3>
          </div>
          <div className="contenido-ahorro">
            <span className="Descripcion-tipo-ahorro">
              Cuenta especial para promociones temporales dirigidas a socios,
              con el fin de fomentar el ahorro. Los montos y plazos varían según
              las condiciones de cada promoción.
            </span>
          </div>
        </section>

        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Beneficios</h3>
          </div>
          <div className="contenido-ahorro">
            <Item text="Fomenta la cultura del ahorro" />
            <Item text="Montos y plazos flexibles" />
            <Item text="Promociones exclusivas" />
            <Item text="Obtienes regalos de alta calidad" />
            <Item text="Sin costo de mantenimiento" />
          </div>
        </section>

        <section className="bloque-ahorro">
          <div className="titulo-ahorro">
            <h3>Requisitos</h3>
          </div>
          <div className="contenido-ahorro">
            <Item text="Ser socio activo" />
            <Item text="Participar en la promoción vigente" />
            <Item text="Aceptar términos y condiciones" />
          </div>
        </section>
      </section>
    </section>
  );
}
