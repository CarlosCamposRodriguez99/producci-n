import React from 'react';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';

const construccion = () => {
  return (
    <React.Fragment>
      <Navbar />
        <div className='container-construccion'>
          <div className="constructionContainer">
          </div>
        </div>
      <Footer/>
    </React.Fragment>
  );
};

export default construccion;
