import { useState } from "react";
import Navbar from "./NavbarCredito/NavbarCredito";
import Seleccion from "./BotonesSeleccion/BotonesSeleccion";
import BtonWhatsapp from "../PaginaHome/BtonWhatsApp/BtonWhatsApp";
import InputMXM from "./InputMXM/InputMXM";
import ResultadoCredito from "./ResultadoCredito/ResultadoCredito";
import DatosCredito from "./RequisitosCredito/RequisitosCredito";
import Final from "../PaginaHome/footer/footer";
import "./Credito.css";

const Credito: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<string>("");
  const [loanTerm, setloanTerm] = useState<string>("Semanales");
  const [repaymentPlan, setrepaymentPlan] = useState<number>(0);

  const handleButtonClick = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  const handleQuantityChange = (valor: string) => {
    setQuantity(valor);
  };

  const handleloanTermChange = (nuevoloanTerm: string) => {
    setloanTerm(nuevoloanTerm);
  };
  const handlerepaymentPlan = (repaymentPlan: number) => {
    setrepaymentPlan(repaymentPlan);
  }
  return (
    <section className="fondoC">
      <div>
        <Navbar />
      </div>
      <section className="body-credito">
        <div className="requisitos-simular-credito">
          <DatosCredito />
        </div>
        <section className="componentes-simular-credito">
          <div>
            <Seleccion
              selectedButton={selectedButton}
              handleButtonClick={handleButtonClick}
            />
          </div>
          <section className="prompts-table">
          <div>
            <InputMXM
              onQuantityChange={handleQuantityChange}
              onloanTermChange={handleloanTermChange}
              onrepaymentPlan={handlerepaymentPlan}
            />
          </div>
          <div>
            <ResultadoCredito
              loanType={selectedButton}
              amount={quantity}
              loanTerm={loanTerm}
              repaymentPlan={repaymentPlan}
            /> 
          </div>
          </section>
        </section>
      </section>
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
