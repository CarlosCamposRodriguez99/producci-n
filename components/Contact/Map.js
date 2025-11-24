import React from 'react';

const Map = () => {

    const latitude = 20.547705;
    const longitude = -103.299963;

    return (
        <div className="single-contact-map pb-100">
            <div className="container">
                <iframe
                    title="Ubicación de ICIAMEX"
                    width="100%"
                    height="400"
                    loading='lazy'
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={`https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`}
                />
            </div>
        </div>
    );
}

export default Map;
