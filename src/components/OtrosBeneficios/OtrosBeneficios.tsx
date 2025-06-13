import "./OtrosBeneficios.css";
import Carrusel from "../OtrosBeneficios/CarruselPublicidad/publicidad";
import Footer from "../PaginaHome/footer/footer";

export default function OtrosBeneficios() {
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
      <div>
        <Footer />
      </div>
    </section>
  );
}
