import React from 'react'
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import LisaSection from '../components/_App/LisaSection';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';

const lisas = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <PageBanner
            homePageUrl="/" 
            imgClass="bg-18" 
        />
        <LisaSection/>
        <WhatsAppIcon/>
        <Footer/>
    </React.Fragment>
  )
}

export default lisas;