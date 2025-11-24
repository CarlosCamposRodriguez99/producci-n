import React, { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import Image from 'next/image';
import dataModulares from './dataModulares';

const ModularSection = () => {
  const [mediaQuery, setMediaQuery] = useState('(min-width: 900px)');
  const [ref, { width }] = useMeasure();
  const [items, setItems] = useState(dataModulares);
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
      <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: "20px", color: "#0880B6", textTransform: "uppercase", fontFamily: 'Montserrat, sans-serif',}}>Bandas Transportadoras Modulares</h1>
      <div>
        <div style={{ textAlign: 'center', marginTop: '5px', fontFamily: 'Montserrat, sans-serif', color: '#000', fontSize: "16px" }}>
          <p className='parrafoCustom'>Las bandas transportadoras banda modular son muy adecuadas para productos anchos o voluminosos que requieren una manipulación estable y que deben mantenerse en posición incluso en curvas.</p>
        </div>
      </div>

    <div className="flex-container">
        <div className="flex-item separacionContent">
          <div className='aqui'>
            <Image className='imagenCustomMonitor5' src="/img/seccion3/banda-modular1.webp" width={360} height={240} alt="Banda transportadora modular" priority={true}/>
            <h3 className='tituloMonitor'>Espirales</h3>
            <p className='textoPaginas'>Soluciones de bandas y sistemas para procesos de acondicionamiento como enfriamiento, comprobación o congelación.</p>
          </div>
        </div>
        <div className="flex-item separacionContent">
          <div className='aqui'>
            <Image className='imagenCustomMonitor5' src="/img/seccion3/banda-modular2.webp" width={360} height={240} alt="Banda transportadora modular" priority={true}/>
            <h3 className='tituloMonitor'>Bandas de Recorrido Recto</h3>
            <p className='textoPaginas'>Optimice el transporte de A a B en todas las partes de su planta.</p>
          </div>
        </div>
        <div className="flex-item separacionContent">
          <div className='aqui'>
            <Image className='imagenCustomMonitor5' src="/img/seccion3/banda-modular3.webp" width={360} height={240} alt="Banda transportadora modular" priority={true}/>
            <h3 className='tituloMonitor'>Bandas para los Alimentos</h3>
            <p className='textoPaginas'>Garantice la seguridad de los alimentos, la calidad del producto y la integridad de la marca.</p>
          </div>
        </div>
    </div>



    <div style={{borderBottom: "2px solid #EBEDEF", marginBottom: "30px"}}></div>

   
    <div className="contenedorEnvasado">
      <div className="imagenEnvasado" style={{paddingTop: "20px"}}>
        <Image src="/img/seccion3/seccionModular.webp" width={500} height={500} alt="Banda transportadora modular" priority={true}/>
      </div>

      <div className="contenidoEnvasado padding-none2">
        <h3 className='subtituloMonitor' style={{
          color: "#0880B6",
          fontFamily: 'Montserrat, sans-serif',
          fontSize: "24px",
          marginBottom: "20px",

        }}>Bandas Modulares Intralox</h3>
        <p className='textoPaginas' style={{
          textAlign: "justify",
          fontFamily: 'Open Sans, sans-serif',
          fontSize: "16px",
          color: "#000",
        }}>
          Nuestras bandas transportadoras modulares de plástico llevan más de 50 años estableciendo los estándares del sector. Y seguimos innovando. Las bandas Intralox están disponibles en cientos de miles de configuraciones y se pueden encontrar en cualquier lugar donde se procesen, fabriquen o desplacen productos. <br/><br/>

          La construcción modular, combinada con materiales más ligeros y una ingeniería experta, garantiza que las bandas Intralox:<br/>
        </p>
        <p className='textoPaginas' style={{
          textAlign: "left",
          fontFamily: 'Open Sans, sans-serif',
          fontSize: "16px",
          color: "#000",
        }}>
        • Son más fáciles de instalar, reparar, limpiar y mantener.<br/>
        • Aumentan el rendimiento al tiempo que minimizan el tiempo de inactividad.<br/>
        • Proporcionan una mayor vida útil de la banda, hasta el triple en algunas aplicaciones.</p>
      </div>
    </div>

  <div style={{borderBottom: "2px solid #EBEDEF", marginBottom: "50px"}}></div>
  
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
};

export default ModularSection;
