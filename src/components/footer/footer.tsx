import "./footer.css";

export default function footer() {
  return (
    <footer className="FContent">
      <section className="footer_info">
        <div className="footer_width about">
          <h2>About</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sunt
            iure cupiditate nobis, soluta facilis corrupti similique labore
            deserunt fugiat veniam aliquid vel porro neque at, beatae nostrum,
            voluptatibus nemo!
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
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
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
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_width contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <p> San Rodrigo Aguilar #11, San miguel, Tala, Jalisco</p>
            </li>
            <li>
              <span>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <a href="">cajasolidariatala@hotmail.com</a>
            </li>
            <li>
              <span>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              <a href="">00 00 00 00 00</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="copy-right">
        <p>@CAJA SOLIDARIA TALA CA DE CV</p>
      </div>
    </footer>
  );
}
