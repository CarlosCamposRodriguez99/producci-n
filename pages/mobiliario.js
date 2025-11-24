import React from 'react'
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import MobiliarioSection from '../components/_App/MobiliarioSection';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';

const mobiliario = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <PageBanner
            homePageUrl="/" 
            imgClass="bg-23" 
        />
        <MobiliarioSection/>
        <WhatsAppIcon/>
        <Footer/>
    </React.Fragment>
  )
}

export default mobiliario;