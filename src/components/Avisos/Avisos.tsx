import "./Avisos.css";
import BtonWhatsApp from "../PaginaHome/BtonWhatsApp/BtonWhatsApp";
import PrimerAviso from "./PrimerAviso/PrimerAviso";
import SegundoAviso from "./SegundoAviso/SegundoAviso";
import { useState } from "react";

export default function Avisos() {
  const [imagenPrincipal, setImagenPrincipal] = useState("img/Aviso1.png");

  return (
    <section className="avisosContainer">
      <div className="portadaWrapper">
        <PrimerAviso imagen={imagenPrincipal} />
      </div>

      <div className="fadeSeparator"></div>

      <div className="galeriaWrapper">
        <SegundoAviso
          imagenes={["img/Aviso1.png", "img/Aviso2.png", "", ""]}
          imagenPrimerAviso={imagenPrincipal}
          onSelect={(img) => {
            if (img && img.trim() !== "") setImagenPrincipal(img);
          }}
        />
      </div>

      <BtonWhatsApp />
    </section>
  );
}
