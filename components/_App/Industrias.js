import Link from 'next/link';
import React from 'react';

const Industrias = () => {
  return (
    
    <div className='container-industrias' style={{ borderBottom: '6px solid #0880B6' }}>
      <div className="areas-wr">
        <div className="areas__pagination-wr">
          <h1 className='tituloIndustries' style={{ marginTop: "50px", marginBottom: "50px", color: "#0880B6", fontFamily: 'Montserrat, sans-serif', textAlign: "left" }}>INDUSTRIAS</h1>
          <div className="areas__pagination from-left as-8">
            <button className="areas__pagination-item button-industrias-brands button-industrias-brands-active">
              <span className="button__text">
                FARMACÉUTICA
              </span>
            </button>
            <button className="areas__pagination-item button-industrias-brands button-industrias-brands-active">
              <span className="button__text">
                ALIMENTICIA
              </span>
            </button>
            <button className="areas__pagination-item button-industrias-brands button-industrias-brands-active">
              <span className="button__text">
                CÓSMETICA
              </span>
            </button>
            <button className="areas__pagination-item button-industrias-brands button-industrias-brands-active">
              <span className="button__text">
                QUÍMICA
              </span>
            </button>
            <button className="areas__pagination-item button-industrias-brands button-industrias-brands-active">
              <span className="button__text">
                AUTOMOTRIZ
              </span>
            </button>
            <button className="areas__pagination-item button-industrias-brands button-industrias-brands-active">
              <span className="button__text">
                CARNICA
              </span>
            </button>
            <button className="areas__pagination-item button-industrias-brands button-industrias-brands-active">
              <span className="button__text">
                BEBIDAS
              </span>
            </button>
            <button className="areas__pagination-item button-industrias-brands button-industrias-brands-active">
              <span className="button__text">
                CONFITERÍA
              </span>
            </button>
          </div>

          <h4 className='tituloIndustries' style={{fontFamily: 'Montserrat, sans-serif', marginTop: "50px"}}>ICIAMEX</h4>

          <p className='textoIndustries' style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 600,
            marginBottom: "40px",
            textAlign: "justify",
            fontSize: "14px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "640px" // Ajusta el valor según sea necesario
            }}>
            Nos especializamos en la fabricación de bandas transportadoras, mobiliario y equipos para envasado, desde el diseño hasta la fabricación y la instalación o implementación en la línea de producción.
            </p>

            <p className='textoIndustries' style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 600,
            marginBottom: "40px",
            textAlign: "justify",
            fontSize: "14px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "640px" // Ajusta el valor según sea necesario
            }}>
            Trabajamos para todo tipo de industria: farmacéutica, automotriz, alimenticia, aeronáutica, agroindustrial, logística, y podemos ofrecerte soluciones a la medida, así como el soporte técnico necesario.
            </p>

          <Link href="/contacto" className="btn-industrias">MÁS INFO</Link>
          
        </div>

        <div className="areas__img">
        <div className="areas__img-wr">
            <div className="areas__img-back" data-x="20">
            </div>
        </div>
        </div>

      </div>
    </div>
    

  );
};

export default Industrias;
