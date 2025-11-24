import React from 'react';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import Categories from '../components/_App/Categories';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import PageBanner from '../components/Common/PageBanner';

const categoriaBandas = () => {

    return (
        <React.Fragment>
            <Navbar />

            <PageBanner
                homePageUrl="/" 
                imgClass="bg-17" 
            />

            <Categories/>

            <WhatsAppIcon/>
            <Footer />
        </React.Fragment>
    );
}

export default categoriaBandas;