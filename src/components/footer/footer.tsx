import "./footer.css";

export default function footer() {
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
                <a href="">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Servicio</a>
            </li>
            <li>
              <a href="">Crédito</a>
            </li>
            <li>
              <a href="">Conocenos</a>
            </li>
            <li>
              <a href="">Contacto</a>
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
                Vicente Guerrero #84, tala centro, codigo postal 45300, Tala,
                Jalisco
              </p>
            </li>
            <li>
              <span>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <a>unecajasolidariatala@hotmail.com</a>
            </li>
            <li>
              <span>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              <a>01 (384) 738-3892</a>
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
