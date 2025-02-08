import { useState } from "react";
import Navbar from "./NavbarCredito/NavbarCredito";
import Seleccion from "./BotonesSeleccion/BotonesSeleccion";
import BtonWhatsapp from "../PaginaHome/BtonWhatsApp/BtonWhatsApp";
import InputMXM from "./InputMXM/InputMXM";
import ResultadoCredito from "./ResultadoCredito/ResultadoCredito"; // Importa el nuevo componente
import Final from "../PaginaHome/footer/footer";

const Credito: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<string>("");
  const [resultado, setResultado] = useState<number>(0);

  const handleButtonClick = (buttonType: string) => {
    setSelectedButton(buttonType);
    calcularResultado(buttonType, quantity);
  };

  const handleQuantityChange = (valor: string) => {
    setQuantity(valor);
    calcularResultado(selectedButton, valor);
  };

  const calcularResultado = (tipoCredito: string | null, cantidad: string) => {
    let tasa = 0;
    if (tipoCredito === "comercial") {
      tasa = 0.018;
    } else if (tipoCredito === "agricola") {
      tasa = 0.015;
    } else if (tipoCredito === "ganadera") {
      tasa = 0.015;
    } else if (tipoCredito === "personal") {
      tasa = 0.018;
    }
    const cantidadNumerica = parseFloat(
      cantidad.replace("$", "").replace(/,/g, "")
    );
    setResultado(isNaN(cantidadNumerica) ? 0 : cantidadNumerica * tasa);
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
        <InputMXM onQuantityChange={handleQuantityChange} />
      </div>
      <div>
        <ResultadoCredito resultado={resultado} />
      </div>
      <div>
        <BtonWhatsapp />
      </div>
      <div>
        <Final />
      </div>
    </section>
  );
};

export default Credito;
