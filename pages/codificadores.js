import React from 'react'
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import CodificadoresSection from '../components/_App/CodificadoresSection';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';

const codificadores = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <PageBanner
            homePageUrl="/" 
            imgClass="bg-22" 
        />
        <CodificadoresSection/>
        <WhatsAppIcon/>
        <Footer/>
    </React.Fragment>
  )
}

export default codificadores;