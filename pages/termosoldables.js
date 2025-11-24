import React from 'react'
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import TermosoldableSection from '../components/_App/TermosoldableSection';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';

const termosoldables = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <PageBanner
            homePageUrl="/" 
            imgClass="bg-20" 
        />
        <TermosoldableSection/>
        <WhatsAppIcon/>
        <Footer/>
    </React.Fragment>
  )
}

export default termosoldables;