import Carrusel from "./CarrouselRegalos/CarrouselRegalos";
import Descripcion from "./DescripcionPromociones/DescripcionPromociones";
import Footer from "../PaginaHome/footer/footer";
import "./Promociones.css";

export default function CarrouselRegalos() {
  const imagenesRegalos = [
    "img/Promocion1.png",
    "img/Promocion2.png",
    "img/Promocion3.png",
    "img/Promocion4.png",
    "img/Promocion5.png",
  ];

  return (
    <section>
      <div className="carrousel-regalos">
        <Carrusel imageList={imagenesRegalos} />
      </div>
      <div>
        <Descripcion />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
