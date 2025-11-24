import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-top-area f-bg pt-70 pb-60 jarallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-widget">
                <p className="two-line-paragraph">
                  Somos una compañía enfocada al diseño y la fabricación de
                  bandas transportadoras, líneas de envasado, mobiliario para
                  áreas limpias en acero inoxidable. así como plataformas,
                  elevadores y grúas de elevación.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-widget text-right">
                <div className="sponsor-logos">
                  <Image
                    width={1582}
                    height={664}
                    style={{ paddingTop: "10px" }}
                    src="/img/marcas/sumitomo.png"
                    alt="Sumitomo"
                    loading="lazy"
                  />
                  <Image
                    width={1582}
                    height={664}
                    src="/img/marcas/eurobelt.png"
                    alt="Eurobelt"
                    loading="lazy"
                  />
                  <Image
                    width={1582}
                    height={664}
                    src="/img/marcas/danfoss.png"
                    alt="Danfoss"
                    loading="lazy"
                  />
                  <Image
                    width={1582}
                    height={664}
                    style={{ marginRight: "10px" }}
                    src="/img/marcas/movex-blanco.png"
                    alt="Movex"
                    loading="lazy"
                  />
                  <Image
                    width={1582}
                    height={664}
                    style={{ paddingTop: "10px" }}
                    src="/img/marcas/intralox.png"
                    alt="Intralox"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="border-bottom"></div>
            </div>

            {/* Resto del código para los servicios, industrias, y Get In Touch */}
            <div className="col-lg-3 col-md-6">
              <div className="nav-widget">
                <ul>
                  <li>
                    <Link
                      href="/categoriaBandas"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Bandas</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/lisas" passHref={true} legacyBehavior={true}>
                      <a>Lisas</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/modulares"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Modulares</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/termosoldables"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Termosoldables</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="nav-widget" style={{ marginLeft: "-50px" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>
                    <Link
                      href="#"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Llenadoras</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Etiquetadoras</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Homogenizadores</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/codificadores"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Codificadores</a>
                    </Link>
                  </li>
                  {/* Agrega más elementos si es necesario */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="nav-widget" style={{ marginLeft: "-100px" }}>
                <ul>
                  <li>
                    <Link
                      href="#"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Elevación</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobiliario"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Mobiliario</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/maquinado"
                      passHref={true}
                      legacyBehavior={true}
                    >
                      <a>Maquinados</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 ml-auto text-right">
              <div className="nav-widget">
                <div className="get-quote">
                  <Link href="/contacto" passHref={true} legacyBehavior={true}>
                    <a className="default-btn borde-blanco">Contacto</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center custom-margin-left">
              <div className="mr-4 quitarLogo">
                <Link href="/" passHref legacyBehavior={true}>
                  <a>
                    <Image
                      width={754}
                      height={239}
                      style={{ width: "20%" }}
                      src="/img/logo-blanco.png"
                      alt="ICIAMEX"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center justify-content-end">
              <div className="text-white">
                <p
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "1px",
                  }}
                >
                  ICIAMEX AUTOMATIZACIÓN
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </React.Fragment>
  );
};

export default Footer;
