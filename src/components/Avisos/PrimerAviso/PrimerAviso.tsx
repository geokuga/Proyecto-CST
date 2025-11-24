import "./PrimerAviso.css";

export default function PrimerAviso() {
  return (
    <section className="primerAvisoWrapper" aria-label="Aviso principal">
      <div className="primerAvisoInner">
        {/* Mascota (flip seguro) */}
        <div className="mascotaWrap" aria-hidden>
          <div className="mascotaFlip">
            <img src="logos/caña.png" alt="Mascota" className="mascotaImg" />
          </div>
        </div>

        {/* Tarjeta */}
        <div className="tarjetaWrap">
          <div className="tarjeta">
            <img
              src="img/Aviso1.png"
              alt="Aviso importante"
              className="tarjetaImg"
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
