import React from 'react'
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import ModularSection from '../components/_App/ModularSection';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';

const modulares = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <PageBanner
            homePageUrl="/" 
            imgClass="bg-21" 
        />
        <ModularSection/>
        <WhatsAppIcon/>
        <Footer/>
    </React.Fragment>
  )
}

export default modulares;