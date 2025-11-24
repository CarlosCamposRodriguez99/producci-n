import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';


const ModalVideo = dynamic(() => import('react-modal-video'), {
  ssr: false,
});


const Videos = () => {
  // Popup Video
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const openModal = (videoNumber) => {
    if (videoNumber === 1) setIsOpen1(true);
    else if (videoNumber === 2) setIsOpen2(true);
    else if (videoNumber === 3) setIsOpen3(true);
    else if (videoNumber === 4) setIsOpen4(true);
  };

  const closeModal = (videoNumber) => {
    if (videoNumber === 1) setIsOpen1(false);
    else if (videoNumber === 2) setIsOpen2(false);
    else if (videoNumber === 3) setIsOpen3(false);
    else if (videoNumber === 4) setIsOpen4(false);
  };

  const videoId1 = '150lfMWMLmc';
  const videoId2 = 'o41LP-BypBg';
  const videoId3 = 'PkvfsUwhh4U';
  const videoId4 = 'ng9vLI5gpPk';


  return (
    <React.Fragment>
      <h1 style={{color: "#0880B6", fontFamily: 'Montserrat, sans-serif', textAlign: "center", marginBottom: "40px"}}>VIDEOS</h1>
      <div className='container-video'>
        <div className='video-container'>
        <Image width={1050} height={750} src="/img/imagenes-videos/video1.webp" alt="Llenadora y cerradora de tapas" className="imagen-videos-section" />
          <div className='video-content'>
            <div className="video-btn-animat-second">
              <Link href="#play-video" passHref={true} legacyBehavior={true}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(1);
                  }}
                  className="video-btn-section-video popup-youtube"
                >
                  <i className="bx bx-play" style={{ fontSize: "20px" }}></i>
                </a>
              </Link>
            </div>
            <p className="video-text">Llenadora y Cerradora</p>
          </div>
          <ModalVideo
            channel='youtube'
            isOpen={isOpen1}
            videoId={videoId1}
            onClose={() => closeModal(1)}
          />
        </div>

        <div className='video-container'>
        <Image width={1050} height={750} src="/img/imagenes-videos/video2.webp" alt="Banda transportadora con insertos antiderrapante" className="imagen-videos-section" />
          <div className='video-content'>
            <div className="video-btn-animat-second">
              <Link href="#play-video" passHref={true} legacyBehavior={true}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(2);
                  }}
                  className="video-btn-section-video popup-youtube"
                >
                  <i className="bx bx-play" style={{ fontSize: "20px" }}></i>
                </a>
              </Link>
            </div>
            <p className="video-text">Banda Antiderrapante</p>
          </div>
          <ModalVideo
            channel='youtube'
            isOpen={isOpen2}
            videoId={videoId2}
            onClose={() => closeModal(2)}
          />
        </div>

        {/* Tercera Sección */}
        <div className='video-container'>
        <Image width={1050} height={750} src="/img/imagenes-videos/video3.webp" alt="Banda transportadora curva" className="imagen-videos-section" />
          <div className='video-content'>
            <div className="video-btn-animat-second">
              <Link href="#play-video" passHref={true} legacyBehavior={true}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(3);
                  }}
                  className="video-btn-section-video popup-youtube"
                >
                  <i className="bx bx-play" style={{ fontSize: "20px" }}></i>
                </a>
              </Link>
            </div>
            <p className="video-text">Banda Curva</p>
          </div>
          <ModalVideo
            channel='youtube'
            isOpen={isOpen3}
            videoId={videoId3}
            onClose={() => closeModal(3)}
          />
        </div>

        <div className='video-container'>
        <Image width={1050} height={750} src="/img/imagenes-videos/video-4.webp" alt="Banda de elevación con empujadores" className="imagen-videos-section" />
          <div className='video-content'>
            <div className="video-btn-animat-second">
              <Link href="#play-video" passHref={true} legacyBehavior={true}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(4);
                  }}
                  className="video-btn-section-video popup-youtube"
                >
                  <i className="bx bx-play" style={{ fontSize: "20px" }}></i>
                </a>
              </Link>
            </div>
            <p className="video-text">Banda de Elevación</p>
          </div>
          <ModalVideo
            channel='youtube'
            isOpen={isOpen4}
            videoId={videoId4}
            onClose={() => closeModal(4)}
          />
        </div>

      </div>

    </React.Fragment>
  );
};


export default Videos;
