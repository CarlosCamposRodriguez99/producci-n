import React, { useState, useEffect, useMemo } from "react";
import useMeasure from "react-use-measure";
import Image from "next/image";
import dataLisas from "./dataLisas";

const LisaSection = () => {
  const [mediaQuery, setMediaQuery] = useState("(min-width: 900px)");
  const [ref, { width }] = useMeasure();
  const [items, setItems] = useState(dataLisas);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        setMediaQuery("(min-width: 1500px)");
      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        setMediaQuery("(min-width: 1000px)");
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setMediaQuery("(min-width: 600px)");
      }
      setIsMobile(window.innerWidth <= 1280); // Define isMobile como verdadero si el ancho de la ventana es menor o igual a 768px
    };

    handleResize(); // Call it once to set initial mediaQuery and isMobile

    const resizeListener = window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const [heights, gridItems] = useMemo(() => {
    let columns;
    if (mediaQuery === "(min-width: 1600px)") {
      columns = 5;
    } else if (mediaQuery === "(min-width: 1000px)") {
      columns = 4;
    } else {
      columns = 3;
    }

    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [mediaQuery, items, width]);

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          color: "#0880B6",
          textTransform: "uppercase",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Bandas Transportadoras Lisas
      </h1>
      <div>
        <div
          style={{
            textAlign: "center",
            marginTop: "5px",
            color: "#000",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
          }}
        >
          <p className="parrafoCustom">
            Somos especialistas en la fabricación de bandas transportadoras para
            diferentes industrias. Le ofrecemos una amplia gama en los que el
            diseño se ha optimizado para garantizar la máxima higiene y la
            facilidad de limpieza.
          </p>
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-item separacionContent">
          <div className="aqui">
            <Image
              className="imagenCustomMonitor5"
              width={360}
              height={240}
              src="/img/seccion3/lisa1.webp"
              alt="Banda transportadoras planas"
              priority={true}
            />
            <h3 className="tituloMonitor">Soluciones Integrales</h3>
            <p className="textoPaginas">
              Diseñamos y fabricamos líneas completas de bandas transportadoras,
              de acuerdo a las necesidades.
            </p>
          </div>
        </div>
        <div className="flex-item separacionContent2">
          <div className="aqui">
            <Image
              className="imagenCustomMonitor5"
              width={360}
              height={240}
              src="/img/seccion3/lisa2.webp"
              alt="Banda transportadoras planas"
              priority={true}
            />
            <h3 className="tituloMonitor">Variedad de Materiales</h3>
            <p className="textoPaginas">
              Tenemos una gran variedad de bandas transportadoras en PVC y otros
              materiales para diferentes sectores (bandas transportadoras en
              poliuretano, de silicona, etc).
            </p>
          </div>
        </div>
        <div className="flex-item">
          <div className="aqui">
            <Image
              className="imagenCustomMonitor5"
              width={360}
              height={240}
              src="/img/seccion3/lisa3.webp"
              alt="Banda transportadoras planas"
              priority={true}
            />
            <h3 className="tituloMonitor">Servicio Técnico</h3>
            <p className="textoPaginas">
              Ofrecemos servicios de vulcanización y refaccionamiento de las
              mejores marcas del mercado.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ borderBottom: "2px solid #EBEDEF", marginBottom: "50px" }}
      ></div>

      <div
        className="contenedorEnvasado"
        style={{ marginBottom: "70px", marginTop: "50px" }}
      >
        <div className="imagenEnvasado" style={{ paddingTop: "40px" }}>
          <Image
            src="/img/seccion3/seccionLisa.webp"
            width={500}
            height={500}
            alt="Banda transportadoras planas"
            priority={true}
          />
        </div>

        <div className="contenidoEnvasado padding-none2">
          <h3
            className="subtituloMonitor"
            style={{
              color: "#0880B6",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "15px",
              fontSize: "24px",
              marginBottom: "25px",
              marginTop: "25px",
            }}
          >
            BANDAS LISAS
          </h3>

          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • Transporta cualquier tipo de material ligero.
          </p>
          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • Material termoplástico de alta flexibilidad.
          </p>
          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • Trabaja en diámetros de poleas pequeñas.
          </p>
          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • Para manejo de alimentos con norma FDA y USDA.
          </p>
          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • Tienen excelentes propiedades antiestáticas.
          </p>
          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • Se maneja en diferentes materiales depende de uso en: PVC,
            silicón, algodón y hule sintético.
          </p>
          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • Tienen poca elongación y evita ajustes posteriores.
          </p>
          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • Pueden ser instaladas con un diámetro de poleas muy reducido.
          </p>
          <p
            className="listCustom"
            style={{
              textAlign: "justify",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "16px",
              color: "#000",
              marginBottom: "8px",
            }}
          >
            • La particular resistencia a la abrasión y a influencias mecánicas,
            le permiten utilizar desviadores y acumulación de materiales.
            <br />
          </p>
        </div>
      </div>

      <div
        style={{ borderBottom: "2px solid #EBEDEF", marginTop: "20px" }}
      ></div>

      <h2
        className="subtituloMonitor"
        style={{
          textAlign: "center",
          color: "#0880B6",
          fontFamily: "Montserrat, sans-serif",
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        PROYECTOS
      </h2>
      <div
        ref={ref}
        className="list"
        style={{ height: Math.max(...heights), marginBottom: "80px" }}
      >
        {gridItems.slice(0, isMobile ? 4 : gridItems.length).map((item) => (
          <div
            key={item.css}
            className="image-item"
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              width: item.width,
              height: item.height,
            }}
          >
            <div className="image-container imagen">
              <img
                className="grid-image"
                src={`${item.css}?auto=compress&dpr=2&h=${item.height}&w=${item.width}`}
                alt="Banda transportadoras planas"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LisaSection;
