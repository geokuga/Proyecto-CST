import "./publicidad.css";

export default function publicidad() {
  return (
    <section className="PContent">
      <section className="Slider-wrapper">
        <div className="slider">
          <img id="slide-1" src="public\img\publicidad1.jpg"></img>
          <img id="slide-2" src="public\img\publicidad2.jpg"></img>
          <img id="slide-3" src="public\img\publicidad3.jpg"></img>
          <img id="slide-4" src="public\img\publicidad4.jpg"></img>
          <img id="slide-5" src="public\img\publicidad5.jpg"></img>
          <img id="slide-6" src="public\img\publicidad6.jpg"></img>
          <img id="slide-7" src="public\img\publicidad7.jpg"></img>
          <img id="slide-8" src="public\img\publicidad8.jpg"></img>
        </div>
        <div className="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
          <a href="#slide-5"></a>
          <a href="#slide-6"></a>
          <a href="#slide-7"></a>
          <a href="#slide-8"></a>
        </div>
      </section>
    </section>
  );
}
