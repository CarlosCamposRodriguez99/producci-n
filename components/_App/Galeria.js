import React from 'react';

const Galeria = () => {

  return (
    <div className="galeria-section">
      <div className="wrap px-4 mx-auto justify-center text-center mt-auto wrap relative">
        <div className="w-full lg:w-8/12 mx-auto">
        <h1 style={{color: "#0880B6", fontFamily: 'Montserrat, sans-serif', fontWeight: 800, textAlign: "center", paddingTop: "20px"}}>
          APLICACIONES
        </h1>
        <p style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 400}}>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".</p>
      </div>
  
    {/* Agrega aquí tus elementos de la galería */}
    <div style={{display: "flex", height: "350px", margin: "8rem", width: "100%", marginTop: "50px"}}>
    <div style={{display: "flex", marginRight: "-50px", width: "35%"}}>
      <div style={{marginRight: "1%", width: "30%"}}>
        <div className="imagen" style={{
          backgroundPosition: 'center', // Puedes ajustar según tus preferencias
          backgroundRepeat: 'no-repeat',
          width: "80%", 
          height: "40%", 
          marginBottom: "50px",
          borderRadius: "10px",
          position: 'relative',
          overflow: 'hidden',
        }}>

        {/*"/assets/animacion-1.gif"*/}

        <img
          src="/img/aplicaciones/4.png"
          alt="Animación 1"
          style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
        }}
        />
        </div>

        {/*AQUI NOS QUEDAMOS EN UN MARGEN ARRIBA PARA ESTE CONTENEDOR */}
        <div className="imagen" style={{
          backgroundImage: 'url("/img/aplicaciones/1.png")',
          backgroundSize: 'cover', // Puedes ajustar según tus preferencias
          backgroundPosition: 'center', // Puedes ajustar según tus preferencias
          backgroundRepeat: 'no-repeat',
          width: "80%", 
          height: "40%",
          borderRadius: "10px"}}></div>
      </div>
      <div style={{width: "50%", height: "97%",}}>
        <div className="imagen" style={{
          backgroundImage: 'url("/img/aplicaciones/2.png")',
          backgroundSize: 'cover', // Puedes ajustar según tus preferencias
          backgroundPosition: 'center', // Puedes ajustar según tus preferencias
          backgroundRepeat: 'no-repeat',
          width: "100%",
          height: "100%", 
          borderRadius: "10px",
        }}></div>
      </div>
    </div>



    <div style={{display: "flex", marginRight: "30px", flexDirection: "column", width: "20%"}}>
      <div style={{marginRight: "1.5%", height: "50%"}}>
        <div className="imagen" style={{
          backgroundImage: 'url("/img/aplicaciones/3.png")',
          backgroundSize: 'cover', // Puedes ajustar según tus preferencias
          backgroundPosition: 'center', // Puedes ajustar según tus preferencias
          backgroundRepeat: 'no-repeat',
          width: "100%", 
          height: "100%", 
          borderRadius: "10px",
          marginBottom: "8%"
        }}></div>
        <div style={{display: "flex", flexDirection: "row", height: "80%"}}>
          <div className="imagen" style={{
            backgroundImage: 'url("/img/gris.jpg")',
            backgroundSize: 'cover', // Puedes ajustar según tus preferencias
            backgroundPosition: 'center', // Puedes ajustar según tus preferencias
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "100%", 
            borderRadius: "10px",
          }}></div>
          {/*<div className="imagen" style={{
            backgroundImage: 'url("/img/aplicaciones/4.png")',
            backgroundSize: 'cover', // Puedes ajustar según tus preferencias
            backgroundPosition: 'center', // Puedes ajustar según tus preferencias
            backgroundRepeat: 'no-repeat',  
            width: "50%", 
            height: "100%", 
            marginBottom: "1.5%", 
            borderRadius: "10px"
          }}></div>*/}
        </div>
      </div>
    </div>

 

    <div style={{display: "flex", marginRight: "1.5%", width: "30%"}}>
      <div style={{marginRight: "20px", width: "100%", marginBottom: "30px"}}>
        <div className="imagen" style={{
          backgroundImage: 'url("/img/aplicaciones/6.png")',
          backgroundSize: 'cover', // Puedes ajustar según tus preferencias
          backgroundPosition: 'center', // Puedes ajustar según tus preferencias
          backgroundRepeat: 'no-repeat',  
          width: "100%", 
          height: "50%", 
          marginBottom: "20px", 
          borderRadius: "10px"
        }}></div>
        <div className="imagen" style={{
          backgroundImage: 'url("/img/aplicaciones/7.png")',
          backgroundSize: 'cover', // Puedes ajustar según tus preferencias
          backgroundPosition: 'center', // Puedes ajustar según tus preferencias
          backgroundRepeat: 'no-repeat',   
          width: "100%", 
          height: "50%",
          borderRadius: "10px"}}></div>
      </div>
      <div style={{width: "70%"}}>
      <div className="imagen" style={{
        backgroundColor: "grey", 
        width: "70%",
        height: "40%", 
        borderRadius: "10px", 
        marginBottom: "55px",
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img
          src="/img/aplicaciones/5.png"
          alt="Animación 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>


        <div className="imagen" style={{
          backgroundImage: 'url("/img/aplicaciones/8.png")',
          backgroundSize: 'cover', // Puedes ajustar según tus preferencias
          backgroundPosition: 'center', // Puedes ajustar según tus preferencias
          backgroundRepeat: 'no-repeat', 
          width: "70%", 
          height: "40%",
          borderRadius: "10px"
        }}></div>
      </div>
    </div>
  </div>

    </div>


    {/* BOTON  
         <div id="button_cta" className="mt-auto">
          <a href="/sobre-nosotros/" className="text-white text-base px-3 lg:px-8 py-3 rounded-full btn-cta font-medium" style={{ background: '#6C63FF' }}>
            Vive la experiencia
          </a>
        </div>
    */}
      </div>
  );
};

export default Galeria;
