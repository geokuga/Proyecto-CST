import React, { useState } from "react";

export default function AdvertisingManager() {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newPreviews: string[] = [];

    Array.from(files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        newPreviews.push(base64);
        localStorage.setItem(`advert-image-${index + 1}`, base64);
        if (newPreviews.length === files.length) {
          setPreviews([...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <h2>Subir nuevas imágenes de publicidad</h2>
      <input type="file" multiple accept="image/*" onChange={handleFiles} />
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {previews.map((src, i) => (
          <img key={i} src={src} alt={`Preview ${i}`} width={100} />
        ))}
      </div>
    </div>
  );
}
