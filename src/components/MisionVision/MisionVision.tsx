import "./MisionVision.css";

export default function MisionVision() {
  return (
    <section className="MContent">
      <section className="MContenedor">
        <center>
          <i className="fa fa-user iconoM" aria-hidden="true"></i>
        </center>
        <h3 className="MTitulo">Misión</h3>
        <p className="MTexto">
          Somos una sociedad cooperativa de ahorro y préstamo autorizada, que
          opera en la región Valles; brindando educación financiera, promoviendo
          el ahorro y otorgando créditos accesibles a las necesidades de los
          socios, para elevar su nivel de vida.
        </p>
      </section>
      <section className="MContenedor">
        <center>
          <i className="fa fa-eye iconoM" aria-hidden="true"></i>
        </center>
        <h3 className="MTitulo">Visión</h3>
        <p className="MTexto">
          Ser una sociedad cooperativa de ahorro y préstamo de nivel dos, lograr
          y mantener una alta calidad en nuestros productos y servicios con
          tasas de interés activas y pasivas competitivas, incursionar en otros
          segmentos del mercado en el cual operamos, para beneficio de nuestros
          asociados y población en general.
        </p>
      </section>
    </section>
  );
}
