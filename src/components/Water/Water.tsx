import Descripcion from "./DescripcionWater/DescripcionWater";
import Beneficios from "./Beneficios/Beneficios";
import RequisitosWater from "./RequisitosWater/RequisitosWater";
import Footer from "../PaginaHome/footer/footer";

export default function Water() {
  return (
    <section>
      <div>
        <Beneficios />
      </div>
      <div>
        <Descripcion />
      </div>
      <div>
        <RequisitosWater />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
