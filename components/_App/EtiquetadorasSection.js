import React, { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import data from './dataMobiliario';
import Image from 'next/image';


const EtiquetadorasSection = () => {
    const [mediaQuery, setMediaQuery] = useState('(min-width: 900px)');
    const [ref, { width }] = useMeasure();
    const [items, setItems] = useState(data);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.matchMedia('(min-width: 1500px)').matches) {
          setMediaQuery('(min-width: 1500px)');
        } else if (window.matchMedia('(min-width: 1000px)').matches) {
          setMediaQuery('(min-width: 1000px)');
        } else if (window.matchMedia('(min-width: 600px)').matches) {
          setMediaQuery('(min-width: 600px)');
        }
      };
  
      handleResize(); // Call it once to set initial mediaQuery
  
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
        <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: "20px", color: "#0880B6", textTransform: "uppercase", fontFamily: 'Montserrat, sans-serif',}}>Etiquetadoras</h1>
        <div>
          <div style={{ textAlign: 'center', marginTop: '5px', color: '#000', fontFamily: 'Montserrat, sans-serif', fontSize: "16px" }}>
            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en
            alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
          </div>
        </div>
  
        <div style={{ display: 'flex', marginTop: "30px", marginBottom: "50px", justifyContent: "center", alignItems: "center" }}>
      <div style={{ marginRight: '20px', height: "400px" }}>
        <div style={{ maxWidth: "360px" }}>
          <Image src="/img/seccion3/codificador1.jpg" alt="Banda transportadora modular Flexlink" width={360} height={360} style={{ borderRadius: "10px" }} priority={true}/>
          <h3 style={{ marginTop: "10px", fontFamily: 'Montserrat, sans-serif', color: "#0880B6", textAlign: "center" }}>Subtítulo</h3>
          <p style={{ fontFamily: 'Open Sans, sans-serif', textAlign: "justify" }}>Impresión de fechas de caducidad, lotes, códigos de barra y cualquier otra información alfanumérica.</p>
        </div>
      </div>
      <div style={{ margin: '20px', height: "400px" }}>
        <div style={{ maxWidth: "360px" }}>
          <Image src="/img/seccion3/codificador2.jpg" alt="Banda transportadora modular Flexlink" width={360} height={360} style={{ borderRadius: "10px" }} />
          <h3 style={{ marginTop: "10px", fontFamily: 'Montserrat, sans-serif', color: "#0880B6", textAlign: "center" }}>Subtítulo</h3>
          <p style={{ fontFamily: 'Open Sans, sans-serif', textAlign: "justify" }}>Impresión sobre botellas, cajas, latas, botes, láminas etc. de cualquier tipo de material: vidrio, plástico, papel, cartón, metal y cualquier otro tipo de sustrato.</p>
        </div>
      </div>
      <div style={{ marginLeft: '20px', height: "400px" }}>
        <div style={{ maxWidth: "360px" }}>
          <Image src="/img/seccion3/codificador3.jpg" alt="Banda transportadora modular Flexlink" width={360} height={360} style={{ borderRadius: "10px" }} />
          <h3 style={{ marginTop: "10px", fontFamily: 'Montserrat, sans-serif', color: "#0880B6", textAlign: "center" }}>Subtítulo</h3>
          <p style={{ fontFamily: 'Open Sans, sans-serif', textAlign: "justify" }}>Para todos los presupuestos y tipo de aplicación, desde un equipo de impresión manual de una sola línea hasta equipos automatizados de alta resolución.</p>
        </div>
      </div>
    </div>
  
      <div style={{borderBottom: "2px solid #EBEDEF", marginBottom: "50px"}}></div>
  
     
      <div className="contenedorEnvasado">
        <div className="imagenEnvasado">
          <Image src="/img/gris.jpg" width={500} height={500} alt="iciamex" />
        </div>
  
        <div className="contenidoEnvasado">
          <h3 style={{
            color: "#0880B6",
            fontFamily: 'Montserrat, sans-serif',
            paddingTop: "20px",
            marginBottom: "30px",
            fontSize: "24px"
  
          }}>Subtítulo</h3>
          <p style={{
            textAlign: "justify",
            fontFamily: 'Open Sans, sans-serif',
            fontSize: "16px",
            color: "#000"
          }}>
            Fabricamos máquinas etiquetadoras industriales automáticas y semiautomáticas para etiquetar todo tipo de envases en todas las industrias (alimentaria, cervecera, cosmética, líquidos electrónicos, etc.).  <br></br> <br></br>
            Debido al diseño modular de nuestros sistemas de etiquetado, tienes la opción de adaptarlos a cambios en tu línea de producción y son adecuados para etiquetar productos de todas las formas y tamaños: cilíndricos, cónicos, cuadrados, rectangulares, planos, etc.
          </p>
        </div>
      </div>
  
    <div style={{borderBottom: "2px solid #EBEDEF", marginTop: "50px"}}></div>
    
    <h2 style={{textAlign: "center", color: "#0880B6", fontFamily: 'Montserrat, sans-serif', marginTop: "30px", marginBottom: "20px" }}>PROYECTOS</h2>
    <div ref={ref} className="list" style={{ height: Math.max(...heights), marginBottom: "80px" }}>
    {gridItems.map((item) => (
      <div key={item.css} style={{ position: 'absolute', left: item.x, top: item.y, width: item.width, height: item.height }}>
        <div className="image-container imagen">
          <img className="grid-image" src={`${item.css}?auto=compress&dpr=2&h=${item.height}&w=${item.width}`} alt="" />
        </div>
      </div>
    ))}
    </div>
  
    </div>
);
}

export default EtiquetadorasSection;