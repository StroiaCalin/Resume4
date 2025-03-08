import React from 'react';

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="about__container bd-grid">
                <div>
                    <p className="about__text">
                        I'm a Computer Science student at the Technical University of Cluj-Napoca, passionate about
                        software development and problem-solving. I have experience with OOP, Design Patterns,
                        MVC/MVVM/MVP architectures, MySQL, Spring Framework, and React.
                        I enjoy finding efficient and scalable solutions, writing clean code, and continuously learning new
                        technologies. Always looking for opportunities to grow and build impactful software.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
