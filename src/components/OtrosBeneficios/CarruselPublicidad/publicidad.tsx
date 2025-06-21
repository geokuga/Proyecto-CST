// publicidad.tsx
import { useEffect, useRef } from "react";
import "./publicidad.css";

interface PublicidadProps {
  start: number;
  end: number;
}

export default function Publicidad({ start, end }: PublicidadProps) {
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
  }, []);

  const imageList = Array.from(
    { length: end - start + 1 },
    (_, i) => `img/publicidad${start + i}.jpg`
  );

  return (
    <section className="PContent">
      <section className="Slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {imageList.map((src, i) => (
            <img
              key={i}
              id={`slide-${i + 1}`}
              src={src}
              alt={`Publicidad ${i + 1}`}
            />
          ))}
        </div>
        <div className="slider-nav">
          {imageList.map((_, i) => (
            <a
              key={i}
              href={`#slide-${i + 1}`}
              aria-label={`Ir a Publicidad ${i + 1}`}
            ></a>
          ))}
        </div>
      </section>
    </section>
  );
}
