import { faCoffee, faFaceMehBlank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Pro Edu</h1>
            <p>Nurerchala, Vatara, Dhaka-1212</p>
            <p>Privaciy Policy | Terms of use</p>
            <div className='icons'>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-tiktok"></i>
            </div>
        </div>
    );
};

export default Footer;