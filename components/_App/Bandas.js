import React from 'react';
import Image from 'next/image';

const Bandas = () => {
  return (
    <div className='margenSeparacion' style={{marginBottom: "4rem"}}>
      <h1 style={{textAlign: "center", color: "#0880B6", marginTop: "30px", fontFamily: 'Montserrat, sans-serif'}}>BANDAS TRANSPORTADORAS</h1>
      <p className='bandasTexto' style={{textAlign: "center", color: "#000", marginTop: "20px", fontFamily: 'Montserrat, sans-serif', overflowWrap: "break-word", marginLeft: "50px", marginRight: "50px", marginBottom: "40px", fontSize: "16px"}}>La fabricación de bandas transportadoras para el sector farmacéutico es nuestra especialidad. Cumpliendo con las normas de higiene y seguridad requerida por el sector, cuidamos los detalles de cada equipo.</p>
      <div className="imagenContainer-industrias" style={{padding: "0 auto", margin: "0 auto"}}>
        <div className="imagenConTexto-industrias imagen">
          <a href="/modulares">
            <Image width={700} height={956} src="/img/industrias/banda-curva.webp" alt="Banda transportadora curva" className="imagenIndustrias imagenCustomMonitor2" />
          </a>
          <h3 className='texto-industrias' style={{borderBottom: "5px solid #0880B6", width: "50%", bottom: "15px", padding: "10px"}}>CURVA</h3>
        </div>

        <div className="imagenConTexto-industrias imagen">
          <a href="/modulares">
            <Image width={700} height={956} src="/img/industrias/banda-elevacion.webp" alt="Banda transportadora de elevación" className="imagenIndustrias imagenCustomMonitor2" />
          </a>
          <h3 className='texto-industrias' style={{borderBottom: "5px solid #0880B6", width: "60%", bottom: "15px", padding: "10px"}}>ELEVACIÓN</h3>
        </div>

        <div className="imagenConTexto-industrias imagen">
          <a href="/termosoldables">
            <Image width={700} height={956} src="/img/industrias/banda-empujadores.webp" alt="Banda transportadora con empujadores" className="imagenIndustrias imagenCustomMonitor2" />
          </a>
          <h3 className='texto-industrias' style={{borderBottom: "5px solid #0880B6", width: "60%", bottom: "15px", padding: "10px"}}>EMPUJADORES</h3>
        </div>

        <div className="imagenConTexto-industrias imagen">
          <a href="/modulares">
            <Image width={700} height={956} src="/img/industrias/banda-modular.webp" alt="Banda transportadora modular" className="imagenIndustrias imagenCustomMonitor2" />
          </a>
          <h3 className='texto-industrias' style={{borderBottom: "5px solid #0880B6", width: "60%", bottom: "15px", padding: "10px"}}>MODULAR</h3>
        </div>
      </div>
    </div>
  );
};

export default Bandas;
