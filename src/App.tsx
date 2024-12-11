import Navbar from "./components/navbar/Navbar";
import HeaderHome from "./components/HeaderHome/HeaderHome";

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
    </div>
  );
}
