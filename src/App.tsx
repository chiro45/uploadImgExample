import { useState } from "react";

import { UploadImage } from "./components/UploadImage";
import { IImagen } from "./types/IImagen";

function App() {
  const [imageAlergeno, setImageAlergeno] = useState<IImagen | null>(null);
  const [image, setImage] = useState<string | null>(null);

  return (
    <>
      {/* En objetos tipo alergenos productos
      
      en el body de productos la imagen debe mandarse de esta manera 
       imagenes: image ? [image] : [],
        el back esta preparado para recibir un array de tipo IImage pero en este caso siempre sera una

      en el body de alergenos  es un objeto de tipo imagen o null
      imagen: image ? image : null,
       
      */}
      <div>
        <h1>Imagen tratada como objeto IImagen</h1>
        <UploadImage
          imageObjeto={imageAlergeno}
          setImageObjeto={setImageAlergeno}
          typeElement="articulos" // el tipe element es para que sepa en que parte del endpoint tiene que hacer la union "articulos" o "alergenos"
        />
      </div>

      <div>
        {/*En empresa y sucursal
        en el body de empresa a lo mismo que en sucursal
        logo: image que es una string || null
        */}
        <h1>Imagen tratada como string</h1>

        <UploadImage image={image} setImage={setImage} />
      </div>
    </>
  );
}

export default App;
