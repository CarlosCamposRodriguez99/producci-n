import React from "react";
import Head from "next/head";
import Link from "../utils/ActiveLink";

const VisionMisionPage = () => {
  return (
    <>
      <Head>
        <title>Visión y Misión | ICIAMEX</title>
      </Head>

      {/* Hero / encabezado */}
      <section className="page-hero ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="page-title text-center">Visión y Misión</h1>
              <p className="page-subtitle text-center">
                En ICIAMEX desarrollamos soluciones integrales en bandas
                transportadoras, automatización y maquinaria a la medida para la
                industria mexicana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="page-content pb-100">
        <div className="container">
          <div className="row gy-4">
            {/* Misión */}
            <div className="col-lg-6">
              <div className="card-block">
                <h3>Misión</h3>
                <p>
                  Proporcionar soluciones de ingeniería confiables y funcionales
                  en transporte de materiales, automatización y maquinaria
                  especializada, que ayuden a nuestros clientes a optimizar sus
                  procesos productivos.
                </p>
                <p>
                  Nos enfocamos en entender a detalle las necesidades de cada
                  proyecto para diseñar, fabricar e instalar equipos que ofrezcan
                  seguridad, calidad y continuidad operativa, respaldados por un
                  servicio cercano y oportuno.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="col-lg-6">
              <div className="card-block">
                <h3>Visión</h3>
                <p>
                  Ser una empresa líder en México en soluciones de bandas
                  transportadoras, automatización y proyectos llave en mano para
                  los sectores farmacéutico, alimenticio, logístico e industrial
                  en general.
                </p>
                <p>
                  Buscamos consolidarnos como el aliado estratégico de nuestros
                  clientes, incorporando nuevas tecnologías, mejores prácticas de
                  diseño y un enfoque permanente en la mejora continua.
                </p>
              </div>
            </div>
          </div>

          {/* Valores (opcional pero queda muy bien en esta página) */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="card-block">
                <h3>Valores</h3>
                <ul>
                  <li>
                    <strong>Compromiso con el cliente:</strong> acompañamiento
                    desde el diseño hasta la puesta en marcha.
                  </li>
                  <li>
                    <strong>Calidad:</strong> selección adecuada de materiales,
                    proveedores y procesos de fabricación.
                  </li>
                  <li>
                    <strong>Responsabilidad:</strong> seguridad en cada
                    proyecto, cumplimiento de tiempos y normativas aplicables.
                  </li>
                  <li>
                    <strong>Innovación:</strong> búsqueda constante de mejoras en
                    nuestros equipos y servicios.
                  </li>
                  <li>
                    <strong>Trabajo en equipo:</strong> colaboración entre
                    ingeniería, producción y servicio para entregar resultados
                    integrales.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Botón para volver al inicio */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <Link href="/" legacyBehavior>
                <a className="default-btn">Volver al inicio</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Estilos rápidos para que se vea decente si no tienes CSS global para páginas internas */}
      <style jsx>{`
        .ptb-100 {
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .pb-100 {
          padding-bottom: 100px;
        }
        .page-hero {
          background: #f9fafb;
        }
        .page-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .page-subtitle {
          font-size: 16px;
          color: #6b7280;
          max-width: 720px;
          margin: 0 auto;
        }
        .card-block {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 24px 24px;
          background: #ffffff;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.04);
        }
        .card-block h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }
        .card-block p {
          font-size: 15px;
          line-height: 1.6;
          color: #4b5563;
        }
        .card-block ul {
          padding-left: 18px;
          margin-bottom: 0;
        }
        .card-block li {
          margin-bottom: 6px;
          color: #4b5563;
        }
      `}</style>
    </>
  );
};

export default VisionMisionPage;
