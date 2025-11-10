import { useEffect, useRef } from "react";
import "./CarrouselRegalos.css";

interface CarruselProps {
  imageList: string[];
}

export default function Carrusel({ imageList }: CarruselProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll<HTMLImageElement>("img"));
    let currentIndex = 0;

    if (slides.length === 0) return;

    const updateSlider = () => {
      const currentSlider = sliderRef.current;
      if (!currentSlider) return;

      const slideWidth = slides[currentIndex].getBoundingClientRect().width;
      currentSlider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });

      currentIndex = (currentIndex + 1) % slides.length;
    };

    const interval = setInterval(updateSlider, 4000);
    return () => clearInterval(interval);
  }, [imageList]);

  return (
    <div className="carrousel-regalos">
      <div className="Regalos-Texto-Slider">
        <h2>¡No te pierdas nuestras promociones!</h2>
        <p>
          Asiste a nuestra sucursal para conocer los regalos que tenemos para
          ti.
        </p>
      </div>

      <div className="Contenedor-Slider-Regalos">
        <img className="tapa-regalo" src="img/RegaloPromociones1.png" alt="" />
        <section className="Slider-wrapper-regalos">
          <div className="slider-regalos" ref={sliderRef}>
            {imageList.map((src, i) => (
              <img
                key={i}
                id={`slide-${i + 1}`}
                src={src}
                alt={`Publicidad ${i + 1}`}
              />
            ))}
          </div>
          <div className="slider-nav-regalos">
            {imageList.map((_, i) => (
              <a
                key={i}
                href={`#slide-${i + 1}`}
                aria-label={`Ir a Publicidad ${i + 1}`}
              ></a>
            ))}
          </div>
        </section>
        <img src="img/RegaloPromociones2.png" alt="" />
      </div>
    </div>
  );
}
