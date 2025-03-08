import React from 'react';

function Home() {
    return (
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">Hi,<br />I am <span className="home__title-color">Călin</span>
                    <br /> Student
                </h1>
            </div>

            <div className="home__social">
                <a href="https://www.linkedin.com/in/calin-stroia-a240362a1" className="home__social-icon">
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://github.com/StroiaCalin" className="home__social-icon">
                    <i className='bx bxl-github'></i>
                </a>
                <a href="https://www.instagram.com/stroia.calin/?hl=en" className="home__social-icon">
                    <i className='bx bxl-instagram'></i>
                </a>
            </div>

            <div className="home__img">
                <img src="Calin.png" alt="Călin" style={{ maxWidth: '50%', height: '75%' }} />
            </div>
        </section>
    );
}

export default Home;
