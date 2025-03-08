import React, { useEffect } from 'react';

function Header() {
    const handleNavLinkClick = () => {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const sections = document.querySelectorAll('section');
        let isAtBottom = window.innerHeight + scrollY >= document.body.offsetHeight;
    
        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const menuLinks = document.querySelectorAll('.nav__menu a');
    
            if ((scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) ||
                (isAtBottom && current === sections[sections.length - 1])) {
                menuLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href').includes(sectionId)) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    };

    useEffect(() => {
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleNavLinkClick);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active-link" onClick={handleNavLinkClick}>Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link" onClick={handleNavLinkClick}>About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link" onClick={handleNavLinkClick}>Skills</a></li>
                        <li className="nav__item"><a href="#portfolio" className="nav__link" onClick={handleNavLinkClick}>Portfolio</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link" onClick={handleNavLinkClick}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
