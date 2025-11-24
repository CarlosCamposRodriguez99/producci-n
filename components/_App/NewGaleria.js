import React from "react";
import Image from "next/image";

const NewGaleria = () => {
  return (
    <div className="galeria-section imagenNewGaleria">
      <div className="wrap px-4 mx-auto justify-center text-center mt-auto wrap relative">
        <div className="w-full lg:w-8/12 mx-auto" style={{ marginBottom: "30px" }}>
          <h1 style={{ color: "#0880B6", fontFamily: 'Montserrat, sans-serif', fontWeight: 800, textAlign: "center", paddingTop: "30px" }}>
            APLICACIONES
          </h1>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: "16px", overflowWrap: "break-word", marginLeft: "50px", marginRight: "50px", marginBottom: "50px", marginTop: "30px" }}>
            Hemos trabajado en proyectos para empresas de giros distintos, con requerimientos especiales y con soluciones personalizadas. Conoce más de lo que hemos hecho por nuestros clientes.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="imagenes-container" style={{ display: "flex"}}>
          {/* Sección 1 */}
          <div style={{ display: "flex", flexDirection: "column", width: "50%", marginRight: "-100px" }}>
            <div className="imagen imagenNewGaleria" style={{ marginBottom: "2px", borderRadius: "10px" }}>
              <Image width={1398} height={846} src="/img/aplicaciones/1.webp" alt="Banda transportadora modular" style={{ width: '70%', height: '80%', objectFit: 'cover', borderRadius: "10px", backfaceVisibility: "hidden" }} loading="lazy"/>
            </div>
            <div className="imagen imagenNewGaleria" style={{ marginTop: "-15px", borderRadius: "10px" }}>
              <Image width={1398} height={846} src="/img/aplicaciones/2.webp" alt="Bandas transporadoras con insertos antiderrapantes" style={{ width: '70%', height: '80%', objectFit: 'cover', borderRadius: "10px", backfaceVisibility: "hidden" }} loading="lazy"/>
            </div>
          </div>

          {/* Sección 2 */}
          <div className="imagen-columna" style={{ width: "50%" }}>
            <div className="imagen imagenNewGaleria customImage2" style={{borderRadius: "10px" }}>
              <img className="customImage" src="/assets/animacion.gif" alt="Llenadora de líquidos" style={{ width: '85%', height: '90%', borderRadius: "10px", backfaceVisibility: "hidden" }} loading="lazy"/>
            </div>
          </div>

          {/* Sección 3 */}
          <div style={{ display: "flex", flexDirection: "column", width: "50%", marginLeft: "-100px" }}>
            <div className="imagen imagenNewGaleria" style={{ borderRadius: "10px" }}>
              <Image width={1398} height={846} src="/img/aplicaciones/3.webp" alt="Banda transportadora curva" style={{ width: '70%', height: '80%', objectFit: 'cover', borderRadius: "10px", backfaceVisibility: "hidden" }} loading="lazy"/>
            </div>
            <div className="imagen imagenNewGaleria" style={{ borderRadius: "10px", marginTop: "-15px" }}>
              <Image width={1398} height={846} src="/img/aplicaciones/4.webp" alt="Llenadora y cerradora" style={{ width: '70%', height: '80%', objectFit: 'cover', borderRadius: "10px", backfaceVisibility: "hidden" }} loading="lazy"/>
            </div>
          </div>
        </div>

        {/* BOTON */}
        {/* <div id="button_cta" className="mt-auto">
          <a href="/sobre-nosotros/" className="text-white text-base px-3 lg:px-8 py-3 rounded-full btn-cta font-medium" style={{ background: '#6C63FF' }}>
            Vive la experiencia
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default NewGaleria;
