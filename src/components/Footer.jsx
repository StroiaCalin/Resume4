import React from 'react';
import FooterItem from "./FooterItem";
function Footer() {
    return (    <footer className="footer">
        <div className="footer__social">
                <FooterItem url="https://www.linkedin.com/in/calin-stroia-a240362a1" icon="bxl-linkedin" />
                <FooterItem url="https://github.com/StroiaCalin" icon="bxl-github" />
                <FooterItem url="https://www.instagram.com/stroia.calin/?hl=en" icon="bxl-instagram" />
        </div>
    </footer>);
}
export default Footer;