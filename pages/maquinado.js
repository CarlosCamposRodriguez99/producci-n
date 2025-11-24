import React from 'react'
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import MaquinadoSection from '../components/_App/MaquinadoSection';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';

const maquinado = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <PageBanner
            homePageUrl="/"
            imgClass="bg-24" 
        />
        <MaquinadoSection/>
        <WhatsAppIcon/>
        <Footer/>
    </React.Fragment>
  )
}

export default maquinado;