import React, { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import dataCodificadores from './dataCodificadores';
import Image from 'next/image';

const CodificadoresSection = () => {
    const [mediaQuery, setMediaQuery] = useState('(min-width: 900px)');
    const [ref, { width }] = useMeasure();
    const [items, setItems] = useState(dataCodificadores);
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
        <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: "20px", color: "#0880B6", textTransform: "uppercase", fontFamily: 'Montserrat, sans-serif',}}>Codificadores</h1>
        <div>
          <div style={{ textAlign: 'center', marginTop: '5px', color: '#000', fontFamily: 'Montserrat, sans-serif', fontSize: "16px" }}>
          <p className='parrafoCustom'>Brindamos soluciones para distintas industrias y productos a través de codificadores industriales (inkjet, alta resolución, láser). Dando las mayores alternativas para diversas aplicaciones en todo tipo de líneas de producción.</p>
          </div>
        </div>
  
      <div className="flex-container">
          <div className="flex-item separacionContent">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/codificador1.webp" alt="Codificador inkjet" priority={true}/>
              <h3 className='tituloMonitor'>Soluciones Accesibles</h3>
              <p className='textoPaginas'>Para todos los presupuestos y tipos de aplicación, desde un equipo de impresión manual de una sola línea hasta equipos automatizados de alta resolución.</p>
            </div>
          </div>
          <div className="flex-item">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/codificador2.webp" alt="Codificador inkjet" priority={true}/>
              <h3 className='tituloMonitor'>Impresión Versátil</h3>
              <p className='textoPaginas'>Impresión sobre botellas, cajas, latas, botes, láminas etc. de cualquier tipo de material: vidrio, plástico, papel, cartón, metal y cualquier otro tipo de sustrato.</p>
            </div>
          </div>
          <div className="flex-item">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/codificador3.webp" alt="Codificador inkjet" priority={true}/>
              <h3 className='tituloMonitor'>Marcado de Fechas & Códigos</h3>
              <p className='textoPaginas'>Impresión de fechas de caducidad, lotes, códigos de barras y cualquier otra información alfanumérica garantiza la trazabilidad y seguridad de los productos.</p>
            </div>
          </div>
      </div>


  
      <div style={{borderBottom: "2px solid #EBEDEF", marginBottom: "50px"}}></div>
  
     
      <div className="contenedorEnvasado">
        <div className="imagenEnvasado" style={{marginTop: "30px", marginBottom: "30px"}}>
          <Image src="/img/seccion3/seccionCodificadores.webp" width={500} height={500} alt="codificadores, lotificadores" priority={true} />
        </div>
  
        <div className="contenidoEnvasado padding-none2">
          <h3 className='subtituloMonitor' style={{
            color: "#0880B6",
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: "15px",
            fontSize: "24px",
            textTransform: "inherit"
          }}>Soluciones para marcaje de productos</h3>
          <p className='textoPaginas' style={{
            textAlign: "justify",
            fontFamily: 'Open Sans, sans-serif',
            fontSize: "16px",
            color: "#000"
          }}>
            Ofrecemos la mejor tecnología en equipos de marcaje y codificación industrial, venta de consumibles de la mejor calidad y el servicio técnico mejor preparado, siempre con la más pronta respuesta y a precios competitivos. <br></br> <br></br>
            Contamos con una gran variedad de equipos de impresión para todos los presupuestos y tipo de aplicación, desde un equipo de impresión manual de una sola línea hasta equipos de alta resolución con capacidad de imprimir logotipos, códigos de barra, fechas de caducidad, fuentes estilizadas, hasta imágenes en alta resolución y mucho más.<br></br> <br></br>
            Brindamos soluciones para distintas industrias y productos a través de codificadores industriales (inkjet, alta resolución, láser). Dando las mayores alternativas para diversas aplicaciones en todo tipo de líneas de producción.
          </p>
        </div>
      </div>
  
    <div style={{borderBottom: "2px solid #EBEDEF"}}></div>
    
    <h2 className='subtituloMonitor' style={{textAlign: "center", color: "#0880B6", fontFamily: 'Montserrat, sans-serif', marginTop: "30px", marginBottom: "20px" }}>PROYECTOS</h2>
    <div ref={ref} className="list" style={{ height: Math.max(...heights), marginBottom: "80px" }}>
      {gridItems.slice(0, isMobile ? 4 : gridItems.length).map((item) => (
        <div key={item.css} className="image-item" style={{ position: 'absolute', left: item.x, top: item.y, width: item.width, height: item.height }}>
          <div className="image-container imagen">
            <img className="grid-image" src={`${item.css}?auto=compress&dpr=2&h=${item.height}&w=${item.width}`} alt="Banda transportadoras planas" />
          </div>
        </div>
      ))}
    </div>
  
    </div>
);
}

export default CodificadoresSection;