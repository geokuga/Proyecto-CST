import Carrusel from "./CarrouselRegalos/CarrouselRegalos";
import "./Promociones.css";

export default function CarrouselRegalos() {
  const imagenesRegalos = [
    "https://m.media-amazon.com/images/I/81QjxylSV4L.jpg",
    "https://cdn.homedepot.com.mx/productos/170791/170791-a3.jpg",
    "https://takka.mx/wp-content/uploads/2024/11/PAR-027-A.jpg",
    "https://termosleon.com.mx/wp-content/uploads/2024/02/termos-personalizados-con-nombre-azul.jpg",
    "https://m.media-amazon.com/images/I/61KMIdgw1+L.jpg",
    "https://img.promoroca.mx/products/po/parent/SIN-565.webp",
    "https://m.media-amazon.com/images/I/81QjxylSV4L.jpg",
    "https://cdn.homedepot.com.mx/productos/170791/170791-a3.jpg",
  ];

  return (
    <section className="carrousel-regalos">
      <Carrusel imageList={imagenesRegalos} />
    </section>
  );
}
