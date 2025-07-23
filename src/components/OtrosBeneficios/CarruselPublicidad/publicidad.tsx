// publicidad.tsx
import { useEffect, useRef, useState } from "react";
import "./publicidad.css";

interface PublicidadProps {
  start: number;
  end: number;
}

export default function Publicidad({ start, end }: PublicidadProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const imageList = Array.from(
    { length: end - start + 1 },
    (_, i) => `img/publicidad${start + i}.jpg` // ✅ interpolación correcta
  );

  const scrollToSlide = (
    index: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    const slider = sliderRef.current;
    const slides = slider?.querySelectorAll("img");

    if (slider && slides && slides[index]) {
      const slideWidth = slides[index].getBoundingClientRect().width;
      slider.scrollTo({
        left: index * slideWidth,
        behavior,
      });
    }
  };

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % imageList.length;
        scrollToSlide(nextIndex);
        return nextIndex;
      });
    }, 5000);
  };

  useEffect(() => {
    scrollToSlide(currentIndex, "auto");
    startAutoScroll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleNavClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setCurrentIndex(index);
    scrollToSlide(index);

    timeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 15000);
  };

  return (
    <section className="PContent">
      <section className="Slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {imageList.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Publicidad ${i + 1}`}
              draggable={false}
            />
          ))}
        </div>
        <div className="slider-nav">
          {imageList.map((_, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(i)}
              aria-label={`Ir a Publicidad ${i + 1}`}
              className={`nav-dot ${i === currentIndex ? "active" : ""}`}
            ></button>
          ))}
        </div>
      </section>
    </section>
  );
}
