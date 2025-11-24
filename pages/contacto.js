import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';

const contacto = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                //pageTitle="Contacto"
                homePageUrl="/" 
                imgClass="bg-19" 
            /> 
            <ContactForm />
            <Map />
            <WhatsAppIcon />
            <Footer />
        </React.Fragment>
    );
}

export default contacto;