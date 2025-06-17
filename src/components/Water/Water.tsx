import Descripcion from "./DescripcionWater/DescripcionWater";
import Beneficios from "./Beneficios/Beneficios";
import Footer from "../PaginaHome/footer/footer";

export default function Water() {
  return (
    <section>
      <div>
        <Descripcion />
      </div>
      <div>
        <Beneficios />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
