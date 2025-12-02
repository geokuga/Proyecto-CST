import "./SegundoAviso.css";

export default function SegundoAviso({
  imagenes = [],
  imagenPrimerAviso,
  onSelect,
}: {
  imagenes?: string[];
  imagenPrimerAviso: string;
  onSelect?: (img: string) => void;
}) {
  const maxSlots = 4;

  // Filtrar imágenes distintas a la principal
  const imagenesFiltradas = imagenes.filter(
    (img) => img && img.trim() !== "" && img !== imagenPrimerAviso
  );

  const placeholdersCount = maxSlots - imagenesFiltradas.length;

  return (
    <div className="segundoAvisoWrapper">
      <div className="imagenesGrid">
        {imagenesFiltradas.map((img, i) => (
          <div key={i} className="imagenItem" onClick={() => onSelect?.(img)}>
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
