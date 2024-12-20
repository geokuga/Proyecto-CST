import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Publicidad from "./components/publicidad/publicidad";
import Requisitos from "./components/Requisitos/Requisitos";

export default function App() {
  //jsx -> React.createElement

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HeaderHome />
      </div>
      <div>
        <Publicidad />
      </div>
      <div>
        <Requisitos />
      </div>
    </div>
  );
}
