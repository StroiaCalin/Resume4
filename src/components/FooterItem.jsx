import React from 'react';

function FooterItem({ url, icon }) {
    return (
        <a href={url} className="footer__icon">
            <i className={`bx ${icon}`}></i>
        </a>
    );
}
export default FooterItem;