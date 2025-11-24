import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es-MX">
                <Head>
                    <meta name="description" content="Fabricamos bandas transportadoras, mobiliario en acero inoxidable, maquinados, llenadoras y cerradoras para la industria de la automatización. Descubre cómo podemos ayudarte a mejorar tus procesos de producción." />
                    <meta name="keywords" content="bandas transportadoras, bandas transportadoras lisas, bandas transportadoras modulares, bandas transportadoras termo soldables, mobiliario en acero inoxidable, maquinados, llenadoras, cerradoras, plataformas de elevación, automatización industrial" />
                    <meta name="author" content="Iciamex - Fabricante de bandas transportadoras y equipos de automatización industrial" />
                    <meta property="og:title" content="Bandas Transportadoras, mobiliario en acero inoxidable, plataformas de elevación y más en Guadalajara" />
                    <meta property="og:description" content="Fabricamos bandas transportadoras, mobiliario en acero inoxidable, plataformas de elevación y más" />
                    <meta property="og:image" content="https://i.imgur.com/ejemplo.jpg" />
                    <meta name="twitter:card" content="summary" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
                    <link rel="icon" type="image/png" href="/img/favicon.png"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                        strategy="lazyOnload"
                        async
                    />
                    <script
                        strategy="lazyOnload" 
                        id="google-analytics"
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
                                    page_path: window.location.pathname,
                                });
                            `
                        }}
                        async
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument;