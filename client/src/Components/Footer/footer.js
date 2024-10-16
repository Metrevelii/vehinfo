import React from 'react';
import ContactForm from './ContactForm';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__left">
                        <div className="footer__info">
                            <div className="footer__info-head">
                                <h4 className="footer__info-headText">LOCATION</h4>
                                <div className="footer__info-list">
                                    <p className="footer__info-para">SA: Keyport, 3 Cass Street, NJ</p>
                                    <p className="footer__info-para">Tbilisi: U. Chkheidze 12</p>
                                    <p className="footer__info-para">Gori: 37 Of Tsereteli</p>
                                    <p className="footer__info-para">Kutaisi: Sh. Rustaveli Ave.35</p>
                                    <p className="footer__info-para">Batumi: 65 Of Heydar Abashidze, 36 Of Petre Tchaikovsky</p>

                                </div>
                                <div className="footer__phone">
                                    <h4 className="footer__info-headText">Phone</h4>
                                    <p className="footer__phone-text">568 200 900</p>
                                </div>
                                <div className="footer__mail">
                                    <h4 className="footer__info-headText">Mail</h4>
                                    <p className="footer__phone-text">Company@Gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="font-interBold font-bold text-[32px] text-black mb-4 uppercase">REQUEST A QUOTE</div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;