import "./HeaderHome.css";

export default function HeaderHome() {
  return (
    <header className="headerPrincipal">
      <section>
        <center>
          <img className="imagenHeader" src="public\img\header1.png" alt="" />
          <img
            className="imagenHeaderMovil"
            src="public\img\headerCelular.png"
            alt=""
          />
        </center>
      </section>
    </header>
  );
}
