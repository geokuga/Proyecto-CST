import "./footer.css";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Footer() {
  return (
    <footer className="FContent">
      <section className="footer_info">
        <div className="footer_width about">
          <h2>About</h2>
          <p>
            ¿Tienes alguna pregunta? ¡No dudes en llamarnos! Estamos aquí para
            ayudarte a resolver cualquier duda y hacer que tu experiencia sea lo
            más fácil y agradable posible.
          </p>
          <div className="social-media">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_width link">
          <h2>Link</h2>
          <ul>
            <li>
              <a onClick={() => handleScroll("headerHome")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleScroll("requisitos")}>Servicio</a>
            </li>
            <li>
              <a href="">Crédito</a>
            </li>
            <li>
              <a onClick={() => handleScroll("descripcion")}>Conócenos</a>
            </li>
          </ul>
        </div>
        <div className="footer_width contact">
          <h2>Contacto</h2>
          <ul>
            <li>
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <p>
                Vicente Guerrero #84, tala centro, código postal 45300, Tala,
                Jalisco
              </p>
            </li>
            <li>
              <span>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <a href="mailto:unecajasolidariatala@hotmail.com">
                unecajasolidariatala@hotmail.com
              </a>
            </li>
            <li>
              <span>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              <a href="tel:+523847383892">01 (384) 738-3892</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="copy-right">
        <p>@Caja Solidaria Tala S.C. de A.P. de R.L. de C.V.</p>
      </div>
    </footer>
  );
}
