import React from 'react';

function ContactItem({ icon, text }) {
    return (
        <div className="contact__data">
            <i className={`contact__icon ${icon}`}></i>
            <p className="contact__text">{text}</p>
        </div>
    );
}
export default ContactItem;