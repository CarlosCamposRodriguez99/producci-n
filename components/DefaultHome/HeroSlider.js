import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});


const HeroSlider = () => {

	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className="hero-slider-area" style={{ borderBottom: '10px solid #0880B6' }}>
                
            <div className="slider-item slider-item-bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                <div className="slider-text one" style={{marginTop: "70px"}}>
                                        <h1 className='soluciones' style={{ 
                                            textTransform: "uppercase", 
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontWeight: 800,
                                            fontSize: "50px",
                                            lineHeight: 1,
                                            whiteSpace: "nowrap",
                                            marginBottom: "20px"
                                        }}>
                                            Soluciones
                                            <span className='industria'>
                                                <span style={{
                                                    fontFamily: "'Open Sans', sans-serif", 
                                                    fontWeight: 800,
                                                    fontSize: "50px",
                                                    lineHeight: 1,
                                                }}>
                                                    para la industria
                                                </span>
                                            </span>
                                            <span className='farmaceutica'>
                                                <span style={{ 
                                                    textTransform: "uppercase", 
                                                    fontFamily: "'Open Sans', sans-serif", 
                                                    fontWeight: 800, 
                                                    fontSize: "50px", 
                                                    color: "#0880B6",
                                                    lineHeight: 0.9,
                                                }}>
                                                    Farmacéutica
                                                </span>
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3" style={{ marginLeft: "auto", marginRight: "20px", marginTop: "20px" }}>
                                    <div className="video-btn-animat one">
                                        <Link href="#play-video" passHref={true} legacyBehavior={true}>
                                            <a
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="bx bx-play"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>



                                <div className="single-widget" style={{padding: "20px"}}>
                                    <div className="social-area">
                                        <ul>
                                            <li><Link href="https://www.facebook.com/people/Iciamex/100094574925472/" target="_blank" passHref><i className="bx bxl-facebook"></i></Link></li>
                                            <li><Link href="https://www.youtube.com/@iciamex" target="_blank" passHref><i className="bx bxl-youtube"></i></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/iciamex-automatizaci%C3%B3n-6953b82b1" target="_blank" passHref><i className="bx bxl-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
              
         
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='PkvfsUwhh4U'
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment>
    )
}

export default HeroSlider;