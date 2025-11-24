import React from "react";
import Image from "next/image";

const Servicios = () => {
  return (
    <>
      <h1
        style={{
          color: "#0880B6",
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        SERVICIOS
      </h1>

      <div id="portfolio-all" className="row" style={{ marginBottom: "30px" }}>
        <div className="col-xs-12 col-sm-6 col-md-6 portfolio-item filter-print lastSection">
          <div className="portfolio--img servicios-frame">
            <Image
              src="/img/servicios/codificadores.webp"
              alt="Portfolio Item"
              fill // 👈 usa el tamaño del marco
              priority
            />
            <div className="portfolio--hover serviciosImages">
              <div className="portfolio--action">
                <div className="pos-vertical-center">
                  <div className="portfolio--title">
                    <h4>
                      <a href="/codificadores">Codificadores</a>
                    </h4>
                  </div>
                  <div className="portfolio--cat">
                    <a href="/codificadores">Codificadores</a>{" "}
                    <a
                      style={{ textTransform: "initial" }}
                      href="/codificadores"
                    >
                      ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 portfolio-item filter-print lastSection">
          <div className="portfolio--img servicios-frame">
            <Image
              src="/img/servicios/etiquetadora.jpg"
              alt="Portfolio Item"
              fill
              priority
            />
            <div className="portfolio--hover serviciosImages">
              <div className="portfolio--action">
                <div className="pos-vertical-center">
                  <div className="portfolio--title">
                    <h4>
                      <a href="#">Etiquetadoras</a>
                    </h4>
                  </div>
                  <div className="portfolio--cat">
                    <a href="#">Etiquetadoras</a>{" "}
                    <a style={{ textTransform: "initial" }} href="#">
                      ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 portfolio-item filter-print lastSection">
          <div className="portfolio--img servicios-frame">
            <Image
              src="/img/servicios/maquinados.webp"
              alt="Portfolio Item"
              fill
              priority
            />
            <div className="portfolio--hover serviciosImages">
              <div className="portfolio--action">
                <div className="pos-vertical-center">
                  <div className="portfolio--title">
                    <h4>
                      <a href="/maquinado">Maquinados</a>
                    </h4>
                  </div>
                  <div className="portfolio--cat">
                    <a href="/maquinado">Maquinados</a>{" "}
                    <a style={{ textTransform: "initial" }} href="/maquinado">
                      ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 portfolio-item filter-print lastSection">
          <div className="portfolio--img servicios-frame">
            <Image
              src="/img/seccion3/mobiliario2.webp"
              alt="Portfolio Item"
              fill
              priority
            />
            <div className="portfolio--hover serviciosImages">
              <div className="portfolio--action">
                <div className="pos-vertical-center">
                  <div className="portfolio--title">
                    <h4>
                      <a href="/mobiliario">Mobiliario</a>
                    </h4>
                  </div>
                  <div className="portfolio--cat">
                    <a href="/mobiliario">Mobiliario</a>{" "}
                    <a style={{ textTransform: "initial" }} href="/mobiliario">
                      ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 portfolio-item filter-print lastSection">
          <div className="portfolio--img servicios-frame">
            <Image
              src="/img/servicios/llenadora.webp"
              alt="Portfolio Item"
              fill
              priority
            />
            <div className="portfolio--hover serviciosImages">
              <div className="portfolio--action">
                <div className="pos-vertical-center">
                  <div className="portfolio--title">
                    <h4>
                      <a href="#">Llenadoras</a>
                    </h4>
                  </div>
                  <div className="portfolio--cat">
                    <a href="#">Llenadoras</a>{" "}
                    <a style={{ textTransform: "initial" }} href="#">
                      ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
