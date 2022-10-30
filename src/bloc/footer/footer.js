import React from 'react';
import './_footer.scss';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__info">
                <div className="footer__addr">Белгород</div>
                <a href="tel:89524346863" className="footer__phone">+7 952 4346863 </a>
                <div className="footer__social">
                    <a href="/" className="footer__social-item"><img src="icons/vk.png" alt="vk"/></a>
                    <a href=  "/" className="footer__social-item"><img src="icons/telegram.png" alt="telegram"/></a>
                    <a href="/" className="footer__social-item"><img src="icons/viber.png" alt="viber"/></a>   
                    <a href="/" className="footer__social-item"><img src="icons/whatsapp.png" alt="whatsapp"/></a>     
                </div>
            </div>
        </section>
    );
};
export default Footer;