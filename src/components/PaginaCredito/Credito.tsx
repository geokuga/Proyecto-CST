import { useState } from "react";
import Navbar from "./NavbarCredito/NavbarCredito";
import Seleccion from "./BotonesSeleccion/BotonesSeleccion";
import BtonWhatsapp from "../PaginaHome/BtonWhatsApp/BtonWhatsApp";
import InputMXM from "./InputMXM/InputMXM";
import Final from "../PaginaHome/footer/footer";

export default function Credito() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  return (
    <section className="fondo">
      <div>
        <Navbar />
      </div>
      <div>
        <Seleccion
          selectedButton={selectedButton}
          handleButtonClick={handleButtonClick}
        />
      </div>
      <div>
        <InputMXM />
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
