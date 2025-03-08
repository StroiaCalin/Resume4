import React from 'react';
import ContactItem from "./ContactItem";

function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact__container bd-grid">
                    <ContactItem icon="fas fa-phone" text="+40 743207669" />
                    <ContactItem icon="fas fa-envelope" text="stroiacalin7@gmail.com" />
                    <ContactItem icon="fas fa-map-marker-alt" text="Strada Dunarii 142, Cluj-Napoca" />
            </div>
        </section>
    );
}

export default Contact;
