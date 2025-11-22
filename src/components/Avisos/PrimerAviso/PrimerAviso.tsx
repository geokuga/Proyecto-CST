import "./PrimerAviso.css";

export default function PrimerAviso() {
  return (
    <section className="primerAvisoWrapper" aria-label="Aviso principal">
      <div className="primerAvisoInner">
        {/* Mascota (flip seguro) */}
        <div className="mascotaWrap" aria-hidden>
          <div className="mascotaFlip">
            <img
              src="dist/logos/caña.png"
              alt="Mascota"
              className="mascotaImg"
            />
          </div>
        </div>

        {/* Tarjeta */}
        <div className="tarjetaWrap">
          <div className="tarjeta">
            <img
              src="dist/img/Aviso1.png"
              alt="Aviso importante"
              className="tarjetaImg"
            />

            <div className="tarjetaText">
              <h2>¡Aviso importante!</h2>
              <p>
                Apreciable socio, Caja Solidaria Tala informa cambios en sus
                horarios.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="primerBottomGlow" aria-hidden></div>
    </section>
  );
}
