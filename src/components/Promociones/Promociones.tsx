import "./Promociones.css";
import Carrusel from "./CarruselPublicidad/publicidad";

export default function Promociones() {
  return (
    <section>
      <div>
        <Carrusel start={1} end={8} />
      </div>
      <div className="CarruselCentral">
        <Carrusel start={9} end={17} />
      </div>
      <div>
        <Carrusel start={18} end={21} />
      </div>
    </section>
  );
}
