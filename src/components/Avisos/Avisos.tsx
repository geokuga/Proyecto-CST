import "./Avisos.css";
import BtonWhatsApp from "../PaginaHome/BtonWhatsApp/BtonWhatsApp";
import PrimerAviso from "./PrimerAviso/PrimerAviso";
import SegundoAviso from "./SegundoAviso/SegundoAviso";

export default function Avisos() {
  return (
    <section className="avisosContainer">
      <div className="portadaWrapper">
        <PrimerAviso />
      </div>

      <div className="fadeSeparator"></div>

      <div className="galeriaWrapper">
        <SegundoAviso />
      </div>
      <div>
        <BtonWhatsApp />
      </div>
    </section>
  );
}
