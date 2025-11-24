import CategoryCard from "./CategoryCard";
import marcasData from "../data/marcasData.json";
import Image from "next/image";
import React, { useState } from "react";

const Categories = () => {
  const [hoveredCategoria, setHoveredCategoria] = useState(null);
  const marcas = ["Intralox", "Flexlink", "Eurobelt", "Movex"];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    marcasData[marcas[0]] && marcasData[marcas[0]].categorias
      ? marcasData[marcas[0]].categorias[0].title
      : ""
  );

  const [marcaSeleccionada, setMarcaSeleccionada] = useState(marcas[0]);

  const handleMarcaChange = (nuevaMarca) => {
    setMarcaSeleccionada(nuevaMarca);
    // Actualizar la categoría seleccionada a la primera categoría de la nueva marca
    if (marcasData[nuevaMarca] && marcasData[nuevaMarca].categorias) {
      setCategoriaSeleccionada(marcasData[nuevaMarca].categorias[0].title);
    }
  };

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
    // Aquí puedes realizar cualquier acción adicional al cambiar la categoría
  };

  return (
    <React.Fragment>
      <div className="monitorWidth">
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              color: "#0880B6",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            BANDAS TRANSPORTADORAS
          </h1>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              color: "#000",
              fontSize: "16px",
            }}
          >
            Proveemos una amplia variedad de bandas transportadoras para cada
            tipo de aplicación.<br></br> Todas nuestras soluciones son
            personalizadas para satisfacer las necesidades específicas de cada
            cliente.
          </p>

          <div
            style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <Image
                src="/img/centro/centro-07.jpg"
                alt="Banda transportadora modular Flexlink"
                width={360}
                height={260}
                style={{ borderRadius: "10px" }}
                priority={true}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <Image
                src="/img/centro/centro-08.jpg"
                alt="Banda transportadora modular Flexlink"
                width={360}
                height={260}
                style={{ borderRadius: "10px" }}
                priority={true}
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <Image
                src="/img/centro/centro-09.jpg"
                alt="Banda transportadora modular Flexlink"
                width={360}
                height={260}
                style={{ borderRadius: "10px" }}
                priority={true}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h2
            className="espacioCategorias"
            style={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              color: "#0880B6",
              fontWeight: 600,
              textTransform: "initial",
            }}
          >
            Somos Integradores y Socios Comerciales de las Mejores Marcas
          </h2>

          <p
            className="textoJustificado"
            style={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              color: "#000",
              fontWeight: 400,
              lineHeight: 1.5,
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            Nos enorgullece ser integradores y socios comerciales de las mejores
            marcas del mercado. <br></br>Nuestra misión es ofrecerte soluciones
            de calidad excepcional, respaldadas por la confianza que solo las
            marcas líderes pueden brindar.
          </p>

          <p
            className="textoJustificado"
            style={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              color: "#000",
              fontWeight: 400,
              lineHeight: 1.5,
              fontSize: "16px",
            }}
          >
            Estas asociaciones estratégicas nos permiten no solo ofrecer
            productos líderes en la industria,<br></br>sino también adaptar
            nuestras soluciones para satisfacer tus necesidades específicas.{" "}
            <br></br>Trabajamos para integrar las tecnologías más avanzadas y
            los productos más innovadores a nivel mundial.
          </p>
        </div>

        <div className="container" style={{ marginTop: "50px" }}>
          <div
            className="marca-container"
            style={{
              display: "flex",
              justifyContent: "left",
              margin: "20px 0",
              borderBottom: "3px solid #EBEDEF",
            }}
          >
            {marcas.map((marca, index) => (
              <div
                key={index}
                onClick={() => handleMarcaChange(marca)}
                className="marca-item"
                style={{
                  padding: "8px 16px",
                  margin: "1px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  cursor: "pointer",
                  borderBottom: `3px solid ${
                    marca === marcaSeleccionada ? "#0880B6" : "transparent"
                  }`,
                  borderRight: `3px solid #EBEDEF`,
                  color: marca === marcaSeleccionada ? "#333" : "#0880B6",
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "center",
                }}
              >
                {marca}
              </div>
            ))}
          </div>

          {/* Dentro de la sección donde renderizas la información de las marcas */}
          <div
            className="containerMarcas"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "70px",
              marginRight: "100px",
            }}
          >
            {marcasData[marcaSeleccionada] && (
              <>
                <div
                  className="info-section"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "50px",
                    marginLeft: "100px",
                  }}
                >
                  {/* Imagen de la fábrica */}
                  <div>
                    <Image
                      src={marcasData[marcaSeleccionada].imagen}
                      alt={`Imagen de ${marcaSeleccionada}`}
                      width={500}
                      height={138}
                      style={{ borderRadius: "4px" }}
                      priority={true}
                    />
                  </div>

                  {/* Logotipo de la marca */}
                  <div
                    className="brand-logo"
                    style={{
                      textAlign: "center",
                      marginTop:
                        marcaSeleccionada === "Eurobelt" ? "40px" : "30px",
                    }}
                  >
                    <Image
                      src={marcasData[marcaSeleccionada].logo}
                      alt={`Logotipo de ${marcaSeleccionada}`}
                      width={
                        marcaSeleccionada === "Intralox" ||
                        marcaSeleccionada === "Flexlink"
                          ? 250
                          : 350
                      }
                      height={
                        marcaSeleccionada === "Intralox" ||
                        marcaSeleccionada === "Flexlink"
                          ? 111
                          : 211
                      }
                      priority={true}
                    />
                  </div>
                </div>

                {/* Div con texto */}
                <div
                  className="text-section"
                  style={{
                    flex: 1,
                    backgroundColor: "#EBEDEF",
                    borderRadius: "15px",
                    maxWidth: "550px",
                    padding: "10px",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                    marginTop: "50px",
                    boxSizing: "border-box",
                    height:
                      marcaSeleccionada === "Eurobelt"
                        ? "420px"
                        : marcaSeleccionada === "Intralox"
                        ? "400px"
                        : "380px",
                  }}
                >
                  <h2
                    className="titulo-empresa"
                    style={{
                      fontFamily: "Open-sans, sans-serif",
                      color:
                        marcaSeleccionada === "Eurobelt"
                          ? "#004085"
                          : "#FF0000", // Cambiado a #004085 para Eurobelt, de lo contrario, usa #FF0000
                      fontWeight: 800,
                      marginBottom: "10px",
                      marginTop: "20px",
                      letterSpacing: "1px",
                    }}
                  >
                    {marcasData[marcaSeleccionada].titulo}
                  </h2>
                  <p
                    className="customTexto"
                    style={{
                      fontFamily: "Open-sans, sans-serif",
                      color: "#000",
                      textAlign: "justify",
                      fontWeight: 400,
                      lineHeight: "1.5",
                    }}
                  >
                    {marcasData[marcaSeleccionada] &&
                      marcasData[marcaSeleccionada].texto &&
                      marcasData[marcaSeleccionada].texto
                        .split("\n")
                        .map((paragraph, index) => (
                          <React.Fragment key={index}>
                            {paragraph}
                            <br />
                            <br />
                          </React.Fragment>
                        ))}
                  </p>
                </div>
              </>
            )}
          </div>

          <div
            style={{
              borderTop: `3px solid ${
                marcaSeleccionada === "Eurobelt" ? "#004085" : "#FF0000"
              }`,
              marginTop: "20px",
            }}
          ></div>
          <div
            style={{
              borderTop: `3px solid ${
                marcaSeleccionada === "Eurobelt" ? "#004085" : "#FF0000"
              }`,
              marginTop: "3px",
            }}
          ></div>

          <div
            className="button-container"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0",
              marginTop: "20px",
            }}
          >
            {marcasData[marcaSeleccionada] &&
              marcasData[marcaSeleccionada].categorias && (
                <>
                  {marcasData[marcaSeleccionada].categorias.map(
                    (categoria, index) => (
                      <button
                        key={index}
                        onClick={() => handleCategoriaChange(categoria.title)}
                        onMouseEnter={() =>
                          setHoveredCategoria(categoria.title)
                        }
                        onMouseLeave={() => setHoveredCategoria(null)}
                        className="button-4"
                        style={{
                          padding: "8px 16px",
                          borderRadius: "5px",
                          margin: "0 25px",
                          textTransform: "uppercase",
                          fontWeight: 800,
                          backgroundColor:
                            categoria.title === categoriaSeleccionada ||
                            hoveredCategoria === categoria.title
                              ? marcaSeleccionada === "Eurobelt"
                                ? "#004085"
                                : "#FF0000" // Cambia el color a #004085 si la marca es Eurobelt
                              : "#000",
                          color:
                            categoria.title === categoriaSeleccionada ||
                            hoveredCategoria === categoria.title
                              ? "#FFF"
                              : "#FFF",
                          border: "none",
                          borderRight: "3px solid #EBEDEF",
                          fontFamily: "Open-sans, sans-serif",
                          textAlign: "center",
                          transition: "background-color 0.3s",
                        }}
                      >
                        {categoria.title}
                      </button>
                    )
                  )}
                </>
              )}
          </div>

          {marcasData[marcaSeleccionada] &&
            marcasData[marcaSeleccionada].categorias &&
            marcasData[marcaSeleccionada].categorias.find(
              (c) => c.title === categoriaSeleccionada
            )?.productos && (
              <div className="container-categories">
                {marcasData[marcaSeleccionada].categorias
                  .find((c) => c.title === categoriaSeleccionada)
                  ?.productos.map((item, index) => (
                    <CategoryCard
                      key={index}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
              </div>
            )}

          <div style={{ borderBottom: "2px solid #EBEDEF" }}></div>

          <div className="containerNew">
            <h2
              style={{
                color: "#0880B6",
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                marginTop: "20px",
              }}
            >
              Soluciones en bandas transportadoras
            </h2>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "000",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Le apoyamos a lo largo de todo el proceso, desde el concepto y la
              planificación hasta el diseño, la instalación y el mantenimiento
              de sus bandas transportadoras.
            </p>
            <div className="landing-contributor-container">
              <ul className="landing-contributor-list">
                <li className="landing-contributor-list__item">
                  <figure
                    className="landing-contributor-list__figure"
                    style={{ borderBottom: "1px ridge #ccc" }}
                  >
                    <Image
                      width={2507}
                      height={1200}
                      alt="Diseño personalizado de bandas transportadoras"
                      src="/img/diseño-personalizado.webp"
                      draggable="false"
                      priority={true}
                      className="landing-contributor-list__image"
                    />
                  </figure>
                  <div
                    className="landing-contributor-list__content alignl"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <h3 className="block mg-bottom-lv3 landing-contributor-list__title">
                      Diseño Personalizado
                    </h3>
                    <p className="block landing-contributor-list__subtitle textoJustificado2">
                      Nos enfocamos en desarrollar proyectos orientados a cubrir
                      las necesidades específicas de nuestros clientes.
                    </p>
                  </div>
                </li>
                <li className="landing-contributor-list__item">
                  <figure
                    className="landing-contributor-list__figure"
                    style={{ borderBottom: "1px ridge #ccc" }}
                  >
                    <Image
                      width={2507}
                      height={1200}
                      alt="Soporte y mantenimiento de equipos"
                      src="/img/SOPORTE.webp"
                      draggable="false"
                      priority={true}
                      className="landing-contributor-list__image"
                    />
                  </figure>
                  <div
                    className="landing-contributor-list__content alignl"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <h3 className="block mg-bottom-lv3 landing-contributor-list__title">
                      Soporte Técnico
                    </h3>
                    <p className="block landing-contributor-list__subtitle textoJustificado2">
                      Ofrecemos el soporte y las refacciones en todos los
                      componentes, para que usted mantenga su equipo en óptimas
                      condiciones.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
