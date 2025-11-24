import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import Head from 'next/head';
import Script from 'next/script';
import GoTop from './GoTop';
import Preloader from './Preloader';

const Layout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      <Head>
        <title>Iciamex - Automatización Industrial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="bandas transportadoras, iciamex, etiquetadoras, llenadoras,  inoxidables, banda recta, banda con gripers, banda de flexion lateral "
        />
        <meta
          name="description"
          content="Somos una empresa dedicada a la fabricación de equipos para envasado y empaque, con la mayor calidad y tecnología, para proporcionar al usuario sistemas con un perfecto funcionamiento, logrando así, mejorar la productividad de nuestros clientes, que demandan estrictos estándares de producción y calidad. Los principales mercados que atendemos son: farmacéutico, naturista, productos químicos y de limpieza, alimenticio, pinturas, cosméticos, aceites y agroquímicos.Nuestra misión es mantenernos como una empresa líder en la fabricación de equipos para envasado, etiquetado y tapado a nivel nacional,  otorgando a nuestros clientes un servicio confiable y eficiente.."
        />
        <meta
          name="og:title"
          property="og:title"
          content="Iciamex - Automatización Industrial"
        />
        <meta name="twitter:card" content="Iciamex - Automatización Industrial" />
        <meta name="permissions-policy" content="picture-in-picture 'self'" />
        <link rel="canonical" href="https://iciamex.com/" />
      </Head>

      {children}

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="lazyOnload"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {loader ? <Preloader /> : null}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />

      <ToastContainer transition={Slide} />
    </>
  );
};

export default Layout;
