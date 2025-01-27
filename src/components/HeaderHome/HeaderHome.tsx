import "./HeaderHome.css";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeaderHome() {
  return (
    <section className="banner">
      <section className="HContent">
        <h3>Caja Solidaria Tala</h3>
        <p>La caja de nuestra gente</p>
        <center className="BtonContent">
          <button
            className="HeaderBton"
            onClick={() => handleScroll("requisitos")}
          >
            {" "}
            Ser socio
          </button>
          <button className="HeaderBtonC"> Obtener crédito</button>
        </center>
      </section>
      <img src="public/logos/caña.png" alt="Logo Caña" />
    </section>
  );
}
