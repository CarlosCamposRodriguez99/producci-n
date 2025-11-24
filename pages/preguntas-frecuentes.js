import React from "react";
import Head from "next/head";

const PreguntasFrecuentesPage = () => {
  return (
    <>
      <Head>
        <title>Preguntas frecuentes | ICIAMEX</title>
        <meta
          name="description"
          content="Preguntas frecuentes sobre ICIAMEX, tiempos de entrega, garantías y servicios."
        />
      </Head>

      <div className="ptb-100 faq-area">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 col-md-10 text-center">
              <h1 className="mb-3">Preguntas frecuentes</h1>
              <p className="lead">
                Aquí encontrarás respuestas a las dudas más comunes sobre
                nuestros productos, proyectos y servicios de automatización.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              {/* Pregunta 1 */}
              <div className="faq-item">
                <h5>¿Qué tipo de soluciones ofrece ICIAMEX?</h5>
                <p>
                  Diseñamos, fabricamos e instalamos sistemas de transporte
                  (bandas industriales), mobiliario inoxidable y soluciones de
                  maquinado a la medida para la industria farmacéutica,
                  alimentaria, cosmética y otras líneas de producción.
                </p>
              </div>

              {/* Pregunta 2 */}
              <div className="faq-item">
                <h5>¿Realizan proyectos a la medida?</h5>
                <p>
                  Sí. Trabajamos con proyectos personalizados, desde el
                  levantamiento en planta y el diseño mecánico hasta la
                  fabricación, montaje y puesta en marcha de los equipos según
                  las necesidades del cliente.
                </p>
              </div>

              {/* Pregunta 3 */}
              <div className="faq-item">
                <h5>¿Cuál es el tiempo de entrega aproximado?</h5>
                <p>
                  Depende del tipo de proyecto. Para refacciones estándar, el
                  tiempo suele ser de 3 a 10 días hábiles. Para proyectos llave
                  en mano (bandas, líneas de transporte o mobiliario especial),
                  el tiempo se define en la cotización según el alcance y la
                  carga de producción del momento.
                </p>
              </div>

              {/* Pregunta 4 */}
              <div className="faq-item">
                <h5>¿Ofrecen servicio de instalación y puesta en marcha?</h5>
                <p>
                  Sí, contamos con personal técnico especializado para la
                  instalación de equipos, integración con líneas existentes y
                  arranque en sitio, así como capacitaciones básicas de
                  operación y mantenimiento.
                </p>
              </div>

              {/* Pregunta 5 */}
              <div className="faq-item">
                <h5>¿Manejan garantías en sus productos?</h5>
                <p>
                  Todos nuestros equipos cuentan con garantía contra defectos de
                  fabricación por un periodo determinado indicado en la
                  cotización o contrato. También ofrecemos opciones de servicio
                  postventa y mantenimiento correctivo/preventivo.
                </p>
              </div>

              {/* Pregunta 6 */}
              <div className="faq-item">
                <h5>¿Cómo puedo solicitar una cotización?</h5>
                <p>
                  Puedes enviarnos un mensaje desde la sección{" "}
                  <strong>Contacto</strong> del sitio, escribirnos por correo o
                  WhatsApp y compartirnos tus requerimientos, planos o fotos de
                  la aplicación. Nuestro equipo revisará la información y
                  preparará una propuesta técnica–económica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-area {
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .faq-item {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 18px 22px;
          margin-bottom: 14px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
        }
        .faq-item h5 {
          margin-bottom: 8px;
          font-weight: 600;
          color: #111827;
        }
        .faq-item p {
          margin: 0;
          color: #4b5563;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
};

export default PreguntasFrecuentesPage;
