import React, { useEffect, useRef } from "react";
import "./publicidad.css";

export default function Publicidad() {
  // Especificamos que el ref será de tipo HTMLDivElement o null
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Seleccionamos las imágenes dentro del slider
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

    const interval = setInterval(updateSlider, 5000);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="PContent">
      <section className="Slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {Array.from({ length: 8 }).map((_, i) => {
            const saved = localStorage.getItem(`advert-image-${i + 1}`);
            const fallback = `public/img/publicidad${i + 1}.jpg`;
            return (
              <img
                key={i}
                id={`slide-${i + 1}`}
                src={saved || fallback}
                alt={`Publicidad ${i + 1}`}
              />
            );
          })}

        </div>
        <div className="slider-nav">
          <a href="#slide-1" aria-label="Ir a Publicidad 1"></a>
          <a href="#slide-2" aria-label="Ir a Publicidad 2"></a>
          <a href="#slide-3" aria-label="Ir a Publicidad 3"></a>
          <a href="#slide-4" aria-label="Ir a Publicidad 4"></a>
          <a href="#slide-5" aria-label="Ir a Publicidad 5"></a>
          <a href="#slide-6" aria-label="Ir a Publicidad 6"></a>
          <a href="#slide-7" aria-label="Ir a Publicidad 7"></a>
          <a href="#slide-8" aria-label="Ir a Publicidad 8"></a>
        </div>
      </section>
    </section>
  );
}
