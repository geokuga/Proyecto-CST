import "./SegundoAviso.css";

export default function SegundoAviso({
  imagenes = ["dist/img/Aviso1.png"],
}: {
  imagenes?: string[];
}) {
  const maxSlots = 4;
  const placeholdersCount = maxSlots - imagenes.length;

  return (
    <div className="segundoAvisoWrapper">
      <div className="imagenesGrid">
        {imagenes.map((img, i) => (
          <div key={i} className="imagenItem">
            <img src={img} alt={`Imagen ${i + 1}`} />
          </div>
        ))}

        {Array.from({ length: placeholdersCount }).map((_, i) => (
          <div key={`placeholder-${i}`} className="imagenItem">
            <div className="placeholder"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
