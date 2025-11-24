import React, { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import Image from 'next/image';
import dataTermosoldables from './dataTermosoldables';


const TermosoldableSection = () => {
    const [mediaQuery, setMediaQuery] = useState('(min-width: 900px)');
    const [ref, { width }] = useMeasure();
    const [items, setItems] = useState(dataTermosoldables);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.matchMedia('(min-width: 1500px)').matches) {
          setMediaQuery('(min-width: 1500px)');
        } else if (window.matchMedia('(min-width: 1000px)').matches) {
          setMediaQuery('(min-width: 1000px)');
        } else if (window.matchMedia('(min-width: 600px)').matches) {
          setMediaQuery('(min-width: 600px)');
        }
        setIsMobile(window.innerWidth <= 1280); // Define isMobile como verdadero si el ancho de la ventana es menor o igual a 768px
      };
    
      handleResize(); // Call it once to set initial mediaQuery and isMobile
    
      const resizeListener = window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }, []);
  
    const [heights, gridItems] = useMemo(() => {
      let columns;
      if (mediaQuery === '(min-width: 1500px)') {
        columns = 5;
      } else if (mediaQuery === '(min-width: 1000px)') {
        columns = 4;
      } else {
        columns = 3;
      }
  
      let heights = new Array(columns).fill(0);
      let gridItems = items.map((child, i) => {
        const column = heights.indexOf(Math.min(...heights));
        const x = (width / columns) * column;
        const y = (heights[column] += child.height / 2) - child.height / 2;
        return { ...child, x, y, width: width / columns, height: child.height / 2 };
      });
      return [heights, gridItems];
    }, [mediaQuery, items, width]);
  
    return (
      <div className='container'>
        <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: "20px", color: "#0880B6", textTransform: "uppercase", fontFamily: 'Montserrat, sans-serif',}}>Bandas Transportadoras Termosoldables</h1>
        <div>
          <div style={{ textAlign: 'center', marginTop: '5px', color: '#000', fontFamily: 'Montserrat, sans-serif', fontSize: "16px" }}>
           <p className='parrafoCustom'>
              La tecnología ThermoDrive de Intralox combina el material termoplástico homogéneo y la función de accionamiento directo de las bandas plásticas modulares con una solución de acoplamiento de accionamiento única y patentada. Esta combinación crea un tipo de sistema de banda sin tensión.
           </p>
          </div>
        </div>
  
      <div className="flex-container">
          <div className="flex-item separacionContent">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' src="/img/seccion3/banda-termo1.webp" width={360} height={240} alt="Banda transportadora termsoldabale" priority={true}/>
              <h3 className='tituloMonitor'>Recorrido Recto</h3>
              <p className='textoPaginas'>Transporte de alimentos de A a B higiénico y seguro.</p>
            </div>
          </div>
          <div className="flex-item">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' src="/img/seccion3/banda-termo2.webp" width={360} height={240} alt="Banda transportadora termosoldable" priority={true}/>
              <h3 className='tituloMonitor'>Pendientes</h3>
              <p className='textoPaginas'>Para inclinaciones ascendentes, inclinaciones ascendentes en Z, elevadores de cubeta y mucho más.</p>
            </div>
          </div>
          <div className="flex-item separacionContent2">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' src="/img/seccion3/banda-termo3.webp" width={360} height={240} alt="Banda transportadora termosoldable" priority={true}/>
              <h3 className='tituloMonitor'>Condiciones muy Exigentes</h3>
              <p className='textoPaginas'>Diseñado para soportar los entornos de procesamiento de alimentos más duros.</p>
            </div>
          </div>
      </div>
  
      <div style={{borderBottom: "2px solid #EBEDEF", marginBottom: "50px"}}></div>
  
     
      <div className="contenedorEnvasado imagen-no-padding" style={{marginTop: "70px", marginBottom: "70px"}}>
        <div className="imagenEnvasado">
          <Image src="/img/seccion3/seccionTermosoldable.webp" width={500} height={500} alt="Banda transportadora Termosoldable" priority={true} />
        </div>
  
        <div className="contenidoEnvasado padding-none2" style={{marginTop: "0"}}>
          <h3 className='subtituloMonitor' style={{
            color: "#0880B6",
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: "10px",
            fontSize: "24px"
          }}>Bandas Termosoldables Intralox</h3>
          <p className='textoPaginas' style={{
            textAlign: "justify",
            fontFamily: 'Open Sans, sans-serif',
            fontSize: "16px",
            color: "#000"
          }}>
            La tecnología ThermoDrive® de Intralox ofrece la misma fiabilidad que nuestras bandas modulares de plástico, con las ventajas adicionales respecto a la higiene de una estructura termoplástica sólida. El sistema de bandas ThermoDrive es ligero y fácil de instalar, y elimina los problemas de tensión, alineación y limpieza que suelen surgir en las bandas convencionales de accionamiento positivo con tensión o planas. <br/>El sistema sin tensión patentado de la tecnología ThermoDrive combina bandas y componentes para ayudar a los procesadores de alimentos a:<br/></p>
            <p className='textoPaginas' style={{
            textAlign: "left",
            fontFamily: 'Open Sans, sans-serif',
            fontSize: "16px",
            color: "#000"
          }}>
          • Superar los procesos de limpieza e higiene complejos y laboriosos. <br/>
	        •	Eliminar los problemas de la banda causados por la tensión (p. ej., fallos de alineación, alargamiento o bordes ondulados). <br/>
	        •	Evitar los riesgos higiénicos que suponen las bandas de tejido, o los refuerzos de tejido o hilo expuestos.</p>
        </div>
      </div>
  
    <div style={{borderBottom: "2px solid #EBEDEF", marginTop: "20px"}}></div>
    
    <h2 className='subtituloMonitor' style={{textAlign: "center", color: "#0880B6", fontFamily: 'Montserrat, sans-serif', marginTop: "30px", marginBottom: "20px" }}>PROYECTOS</h2>
    <div ref={ref} className="list" style={{ height: Math.max(...heights), marginBottom: "80px" }}>
      {gridItems.slice(0, isMobile ? 4 : gridItems.length).map((item) => (
        <div key={item.css} className="image-item" style={{ position: 'absolute', left: item.x, top: item.y, width: item.width, height: item.height }}>
          <div className="image-container imagen">
            <img className="grid-image" src={`${item.css}?auto=compress&dpr=2&h=${item.height}&w=${item.width}`} alt="Banda transportadoras planas termosoldabls" />
          </div>
        </div>
      ))}
    </div>
  
    </div>
);
}

export default TermosoldableSection;