import "./HeaderHome.css";

export default function HeaderHome() {
  return (
    <section className="banner">
      <section className="HContent">
        <h3>Caja Solidaria Tala</h3>
        <p>La caja de nuestra gente</p>
        <center>
          <button className="HeaderBton"> Ser socio</button>
        </center>
      </section>
      <img src="public\logos\caña.png"></img>
    </section>
  );
}
