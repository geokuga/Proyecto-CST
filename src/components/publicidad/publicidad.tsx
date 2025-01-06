import "./publicidad.css";

export default function publicidad() {
  return (
    <section className="PContent">
      <section className="Pcontentenedor">
        <section className="imagenHCont">
          <img
            className="imagenH imagen"
            src="public\img\publicidad4.jpeg"
            alt=""
          />
          <img
            className="imagenH imagen"
            src="public\img\publicidad5.jpeg"
            alt=""
          />
        </section>

        <section className="imagenHCont">
          <img
            className="imagenH imagen"
            src="public\img\publicidad2.jpeg"
            alt=""
          />
          <img
            className="imagenH imagen"
            src="public\img\publicidad3.jpeg"
            alt=""
          />
        </section>
      </section>
    </section>
  );
}
