import "./Ahorros.css";
import CuentaCorriente from "./CuentaCorriente/CuentaCorriente";
import CuentaMenores from "./CuentaMenores/CuentaMenores";
import CuentaPromocion from "./CuentaPromocion/CuentaPromocion";
import CuentaInversion from "./CuentaInversion/CuentaInversion";
import Footer from "../PaginaHome/footer/footer";

export default function Ahorros() {
  return (
    <section>
      <div>
        <CuentaCorriente />
      </div>
      <div>
        <CuentaMenores />
      </div>
      <div>
        <CuentaPromocion />
      </div>
      <div>
        <CuentaInversion />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
