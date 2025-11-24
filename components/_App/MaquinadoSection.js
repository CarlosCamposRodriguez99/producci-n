import React, { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import dataMaquinados from './dataMaquinados';
import Image from 'next/image';

const MaquinadoSection = () => {
  const [mediaQuery, setMediaQuery] = useState('(min-width: 900px)');
  const [ref, { width }] = useMeasure();
  const [items, setItems] = useState(dataMaquinados);
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
      setIsMobile(window.innerWidth <= 1280);
    };

    handleResize();

    const resizeListener = window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const selectedIndexes = [3, 4, 2, 10];
  const selectedItems = selectedIndexes.map(index => dataMaquinados[index]);

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
      <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px', color: '#0880B6', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>Maquinados</h1>
      <div>
        <div style={{ textAlign: 'center', marginTop: '5px', fontFamily: 'Montserrat, sans-serif', color: '#000', fontSize: '16px' }}>
          <p className='parrafoCustom'>Fabricación de piezas maquinadas en CNC y torno convencional. Hacemos piezas de acuerdo a tus diseños y especificaciones. En alto, mediano y bajo volumen.</p>
        </div>
      </div>

    <div className="flex-container">
        <div className="flex-item separacionContent">
          <div className='aqui'>
            <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/maquinados1.webp" alt="maquinados CNC" priority={true}/>
            <h3 className='tituloMonitor'>Personalización de Piezas</h3>
            <p className='textoPaginas'>Fabricamos piezas únicas según las especificaciones precisas del cliente, garantizando calidad y precisión.</p>
          </div>
        </div>
        <div className="flex-item separacionContent">
          <div className='aqui'>
            <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/maquinados4.webp" alt="maquinados CNC" priority={true}/>
            <h3 className='tituloMonitor'>Maquinados Especializados</h3>
            <p className='textoPaginas'>Maquinaria avanzada para maquinados precisos, especializados en componentes para diversas industrias.</p>
          </div>
        </div>
        <div className="flex-item separacionContent">
          <div className='aqui'>
            <Image className='imagenCustomMonitor5' width={360} height={240} src="/img/seccion3/maquinados3.webp" alt="maquinados CNC" priority={true}/>
            <h3 className='tituloMonitor'>Piezas a la Medida</h3>
            <p className='textoPaginas'>Fabricamos piezas personalizadas para adaptarse exactamente a las necesidades de nuestros clientes.</p>
          </div>
        </div>
    </div>

      <div style={{ borderBottom: '2px solid #EBEDEF' }}></div>

      <div className='contenedorEnvasado' style={{ marginTop: '30px' }}>
        <div className='imagenEnvasado' style={{ paddingTop: '20px' }}>
          <Image src='/img/seccion3/maquinados2.webp' width={500} height={500} alt='maquinados CNC' priority={true}/>
        </div>

        <div className='contenidoEnvasado padding-none2'>
          <h3 className='subtituloMonitor' style={{ color: '#0880B6', fontFamily: 'Montserrat, sans-serif', fontSize: '24px', marginBottom: '20px', textTransform: 'inherit' }}>Fabricación Personalizada de Componentes</h3>
          <p className='textoPaginas' style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontSize: '16px', color: '#000' }}>
            Fabricación de partes, componentes, refacciones mecánicas especializadas así como herramentales y maquinaria. Fabricación de mesas, estaciones de trabajo, carros y racks para líneas de producción en acero o perfil de aluminio.
            <br /><br />
            Contamos con servicios de maquinados, soldadura, pailería así como fabricación de estructuras.
            <br /><br />
            Le ayudamos con el desarrollo óptimo de sus piezas garantizando la calidad en cualquier tipo de pieza de acuerdo a los requerimientos proporcionados por el cliente.
            <br /><br />
            Fabricamos desde 1 pieza así como piezas en serie.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: '2px solid #EBEDEF', marginTop: '30px' }}></div>

      <h2 className='subtituloMonitor' style={{ textAlign: 'center', color: '#0880B6', fontFamily: 'Montserrat, sans-serif', marginTop: '30px', marginBottom: '20px' }}>PROYECTOS</h2>
      <div ref={ref} className='list' style={{ height: Math.max(...heights), marginBottom: '80px' }}>
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
}

export default MaquinadoSection;
