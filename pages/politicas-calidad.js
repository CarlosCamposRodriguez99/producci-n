import React from "react";
import Head from "next/head";
import Link from "../utils/ActiveLink";

const PoliticasCalidadPage = () => {
  return (
    <>
      <Head>
        <title>Políticas de calidad | ICIAMEX</title>
        <meta
          name="description"
          content="Políticas de calidad de ICIAMEX para el diseño, fabricación e integración de soluciones industriales."
        />
      </Head>

      <section className="quality-area ptb-100">
        <div className="container">
          {/* Migas de pan simples */}
          <div className="breadcrumb-wrapper">
            <Link href="/" legacyBehavior>
              <a>Inicio</a>
            </Link>
            <span className="separator">/</span>
            <span>Políticas de calidad</span>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="quality-box">
                <h1 className="page-title">Políticas de calidad</h1>
                <p className="page-intro">
                  En <strong>ICIAMEX</strong> estamos comprometidos con ofrecer
                  soluciones integrales en bandas transportadoras, envasado,
                  mobiliario y maquinados industriales que cumplan de forma
                  consistente con los requisitos de nuestros clientes y de las
                  normas aplicables.
                </p>

                <h3>1. Enfoque al cliente</h3>
                <p>
                  Garantizamos que cada proyecto se diseñe y ejecute alineado a
                  las necesidades específicas de nuestros clientes de los
                  sectores farmacéutico, alimenticio, logístico e industrial en
                  general. Buscamos establecer relaciones de largo plazo basadas
                  en la confianza, la comunicación clara y el cumplimiento de
                  plazos y especificaciones.
                </p>

                <h3>2. Cumplimiento normativo</h3>
                <p>
                  Nos regimos por las normas y estándares de seguridad,
                  higiene y calidad aplicables a la industria, promoviendo
                  buenas prácticas de manufactura y trazabilidad en nuestros
                  procesos de diseño, fabricación, instalación y servicio
                  postventa.
                </p>

                <h3>3. Mejora continua</h3>
                <p>
                  Fomentamos una cultura de mejora continua en todos los
                  procesos de ICIAMEX, desde la atención al cliente hasta la
                  fabricación y puesta en marcha de equipos. Evaluamos de forma
                  periódica nuestros indicadores de desempeño y aprovechamos la
                  retroalimentación de los clientes para optimizar nuestras
                  soluciones.
                </p>

                <h3>4. Desarrollo del personal</h3>
                <p>
                  Promovemos la capacitación continua y el desarrollo de
                  competencias técnicas y humanas de nuestro equipo de trabajo,
                  asegurando que el personal cuente con los conocimientos,
                  habilidades y herramientas necesarias para cumplir los
                  estándares de calidad establecidos.
                </p>

                <h3>5. Innovación y seguridad en las soluciones</h3>
                <p>
                  Impulsamos el uso de tecnologías y materiales adecuados que
                  permitan ofrecer soluciones seguras, eficientes y confiables
                  para los procesos de nuestros clientes, buscando siempre
                  minimizar riesgos, paros de línea y costos de mantenimiento.
                </p>

                <h3>6. Responsabilidad y ética empresarial</h3>
                <p>
                  Actuamos con ética, transparencia y responsabilidad en todas
                  nuestras relaciones comerciales, técnicas y laborales,
                  cumpliendo con los compromisos adquiridos y respetando el
                  marco legal vigente.
                </p>

                <p className="page-closing">
                  Esta política de calidad es revisada de forma periódica para
                  asegurar su pertinencia y alineación con la estrategia,
                  objetivos y contexto de <strong>ICIAMEX</strong>.
                </p>

                <div className="back-link">
                  <Link href="/" legacyBehavior>
                    <a>← Volver al inicio</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .quality-area {
          padding-top: 120px;
          padding-bottom: 80px;
        }
        .breadcrumb-wrapper {
          margin-bottom: 20px;
          font-size: 14px;
          color: #6b7280;
        }
        .breadcrumb-wrapper a {
          color: #2563eb;
        }
        .separator {
          margin: 0 4px;
        }
        .quality-box {
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          padding: 30px 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }
        .page-title {
          font-size: 28px;
          margin-bottom: 16px;
          color: #111827;
        }
        .page-intro {
          font-size: 16px;
          color: #4b5563;
          margin-bottom: 24px;
        }
        h3 {
          font-size: 18px;
          margin-top: 18px;
          margin-bottom: 8px;
          color: #1f2937;
        }
        p {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.6;
        }
        .page-closing {
          margin-top: 20px;
          font-weight: 500;
        }
        .back-link {
          margin-top: 24px;
        }
        .back-link a {
          color: #2563eb;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default PoliticasCalidadPage;
