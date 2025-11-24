import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container d-flex align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                        <ul className="header-content-left">
                            <li>
                                <a href="mailto:hello@ston.com">
                                    <i className="bx bx-envelope"></i>
                                    Email: contacto@iciamex.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:3316022358">
                                    <i className="bx bx-phone-call"></i>
                                    Llámanos: 33 1602 2358
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <ul className="header-content-right">
                            <li className="text-right">
                                Opening Hour: 9:00 am - 9:00 pm
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
