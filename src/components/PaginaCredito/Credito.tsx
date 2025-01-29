import Navbar from "./NavbarCredito/NavbarCredito";
import Final from "../PaginaHome/footer/footer";
import BtonWhatsapp from "../PaginaHome/BtonWhatsApp/BtonWhatsApp";
import Simulacion from "./SimularCredito/SimularCredito";

export default function Credito() {
  return (
    <section className="fondo">
      <div>
        <Navbar />
      </div>
      <div>
        <Simulacion />
      </div>
      <div>
        <BtonWhatsapp />
      </div>
      <div>
        <Final />
      </div>
    </section>
  );
}
