import "./publicidad.css";

export default function publicidad() {
  return (
    <section className="PContent">
      <section className="Pcontentenedor">
        <img
          className="imagen imagenV"
          src="public\img\publicidad1.jpeg"
          alt=""
        />
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
        <img
          className="imagen imagenV"
          src="public\img\publicidad1.jpeg"
          alt=""
        />
      </section>
    </section>
  );
}
