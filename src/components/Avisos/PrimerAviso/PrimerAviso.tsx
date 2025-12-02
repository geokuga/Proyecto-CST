import "./PrimerAviso.css";
import { useEffect, useState } from "react";

export default function PrimerAviso({ imagen }: { imagen: string }) {
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    setAnimar(true);
    const timeout = setTimeout(() => setAnimar(false), 450);
    return () => clearTimeout(timeout);
  }, [imagen]);

  return (
    <section className="primerAvisoWrapper" aria-label="Aviso principal">
      <div className="primerAvisoInner">
        {/* Mascota */}
        <div className="mascotaWrap" aria-hidden>
          <div className="mascotaFlip">
            <img src="logos/caña.png" alt="Mascota" className="mascotaImg" />
          </div>
        </div>

        {/* Tarjeta */}
        <div className="tarjetaWrap">
          <div className={`tarjeta ${animar ? "tarjetaAnimada" : ""}`}>
            <img
              src={imagen}
              alt="Aviso seleccionado"
              className={`tarjetaImg ${animar ? "imgAnimada" : ""}`}
            />

            <div className="tarjetaText">
              <p>
                Si tienes dudas sobre nuestros servicios o atención, acude a tu
                sucursal más cercana o contáctanos por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="primerBottomGlow" aria-hidden></div>
    </section>
  );
}
