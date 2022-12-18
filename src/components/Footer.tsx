import React from 'react';
import '../styles/Footer.scss';
import facebookLogo from '../images/facebook.png';
import whatsappLogo from '../images/whatsapp.png';
import linkedinLogo from '../images/linkedin.png';

interface Props { }

function Footer(props: Props) {
    const { } = props

    return (
        <div className="footer-container">
            <div className="footer-info">
                <p>narcis.teodor30@gmail.com</p>
                <div className="social-container">
                    <a href='https://www.facebook.com/narcis.teodor.338/'>
                        <img src={facebookLogo} alt='facebook' height="30px" width="30px" />
                    </a>
                    <a href='https://wa.me/0786171733'>
                        <img src={whatsappLogo} alt='whatsupp' height="30px" width="30px" />
                    </a>
                    <a href='https://www.linkedin.com/in/narcis-teodor-purghel-5248861ba/'>
                        <img src={linkedinLogo} alt='linkedin' height="30px" width="30px" />
                    </a>

                </div>
            </div>
            <p> © 2022 Narcis-Teodor Purghel. All rights reserved</p>
        </div>
    )
}

export default Footer;