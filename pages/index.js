import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/DefaultHome/HeroSlider';
import Footer from '../components/_App/Footer';
import Servicios from '../components/_App/Servicios';
import NewGaleria from '../components/_App/NewGaleria';
import Bandas from '../components/_App/Bandas';
import Industrias from '../components/_App/Industrias';
import Videos from '../components/_App/Videos';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
 
const Index = () => {
    const products = useSelector((state) => state.products)
    
    return (
        <React.Fragment>
            <Navbar />
            <HeroSlider />
            <Bandas />
            <Industrias />
            <div className="d-lg-none">
              <Servicios/>
            </div>
            <Videos />
            <NewGaleria />
            <WhatsAppIcon/>
            <Footer/>
        </React.Fragment>
    );
}

export default Index;