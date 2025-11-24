import React, { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import dataMobiliario from './dataMobiliario';
import Image from 'next/image';

const MobiliarioSection = () => {
  const [mediaQuery, setMediaQuery] = useState('(min-width: 900px)');
  const [ref, { width }] = useMeasure();
  const [items, setItems] = useState(dataMobiliario);
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

  const selectedIndexes = [1, 8, 9, 7]; // Imagenes seleccionadas
  const selectedItems = selectedIndexes.map(index => dataMobiliario[index]);


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
      <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: "20px", color: "#0880B6", textTransform: "uppercase", fontFamily: 'Montserrat, sans-serif',}}>Mobiliario</h1>
      <div>
        <div style={{ textAlign: 'center', marginTop: '5px', fontFamily: 'Montserrat, sans-serif', color: '#000', fontSize: "16px" }}>
        <p className='parrafoCustom'>Somos especialistas en la fabricación de mobiliario de acero inoxidable sobre diseño especial, con las especificaciones y medidas que usted requiera. Cumplimos con los acabados sanitarios requeridos para áreas limpias.</p>
        </div>
      </div>

      <div className="flex-container">
          <div className="flex-item separacionContent">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/mobiliario1.webp" alt="Mobiliario en acero inoxidable" priority={true}/>
              <h3 className='tituloMonitor'>Materiales de Alta Calidad</h3>
              <p className='textoPaginas'>Destacamos por la fabricación de mobiliario en acero inoxidable, empleando materiales de primera calidad y atención meticulosa al detalle.</p>
            </div>
          </div>
          <div className="flex-item separacionContent separacionContent4">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/mobiliario2.webp" alt="Mobiliario en acero inoxidable" priority={true}/>
              <h3 className='tituloMonitor'>Acabados Sanitarios</h3>
              <p className='textoPaginas'>Fabricamos mobiliario en acero inoxidable para áreas limpias, cumpliendo con los acabados sanitarios requeridos.</p>
            </div>
          </div>
          <div className="flex-item separacionContent">
            <div className='aqui'>
              <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/mobiliario3.webp" alt="Mobiliario en acero inoxidable" priority={true}/>
              <h3 className='tituloMonitor'>Diseños Especiales</h3>
              <p className='textoPaginas'>Ofrecemos soluciones personalizadas para su industria, con diferentes tipos de mobiliario y acabados.</p>
            </div>
          </div>
      </div>


    <div style={{borderBottom: "2px solid #EBEDEF", marginBottom: "50px"}}></div>

   
    <div className="contenedorEnvasado" style={{marginBottom: "70px"}}>
      <div className="imagenEnvasado" style={{paddingTop: "30px"}}>
        <Image src="/img/seccion3/seccionMobiliario.webp" width={500} height={500} alt="Mobiliario en acero inoxidable" priority={true}/>
      </div>

      <div className="contenidoEnvasado padding-none2">
        <h3 className='subtituloMonitor' style={{
          color: "#0880B6",
          fontFamily: 'Montserrat, sans-serif',
          fontSize: "24px",
          marginBottom: "15px",
          textTransform: "inherit"
        }}>Personalización de Muebles en Acero Inoxidable</h3>
        <p className='textoPaginas' style={{
          textAlign: "justify",
          fontFamily: 'Open Sans, sans-serif',
          fontSize: "16px",
          color: "#000"
        }}>
          Somos especialistas en diseño y fabricación de muebles de acero inoxidable especialmente para la industria farmacéutica. Todos nuestros productos están diseñados y fabricados a la medida, ya sea que el cliente cuente con el diseño de su proyecto o elija que nosotros diseñemos y desarrollemos su proyecto. <br></br> <br></br>
          Contamos con especialistas que crean los proyectos de manera que se adapten a las necesidades personales de cada cliente. Los muebles de acero inoxidable son la solución ideal para muchos problemas ya que aportan no solo utilidad, sino que son muy resistentes. <br></br> <br></br>
          Nuestros trabajos cuentan con los acabados sanitarios necesarios para la industria. Utilizamos acero inoxidable 304 ó 316 en caso de requerirlo.
        </p>
      </div>
    </div>

  <div style={{borderBottom: "2px solid #EBEDEF", marginTop: "20px"}}></div>
  
  <h2 className='subtituloMonitor' style={{textAlign: "center", color: "#0880B6", fontFamily: 'Montserrat, sans-serif', marginTop: "30px", marginBottom: "20px" }}>PROYECTOS</h2>
  <div ref={ref} className="list" style={{ height: Math.max(...heights), marginBottom: "80px" }}>
    {(isMobile ? selectedItems.slice(0, 4) : gridItems).map((item) => (
      <div key={item.css} className='image-item' style={{ position: 'absolute', left: item.x, top: item.y, width: item.width, height: item.height }}>
        <div className='image-container imagen'>
          <Image className='grid-image' src={`${item.css}?auto=compress&dpr=2&h=${item.height}&w=${item.width}`} alt='Banda transportadoras planas' width={item.width} height={item.height} priority={true}/>
        </div>
      </div>
    ))}
  </div>
      
  </div>

  );
};

export default MobiliarioSection;
