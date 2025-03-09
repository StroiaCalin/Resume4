import React from 'react';
import SkillItem from "./SkillItem";

function Skills() {
    return (    
        <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
                <div>
                    <p className="skills__text">As a student at the Faculty of Automation and Computers, I have cultivated a strong foundation in the technologies and principles. My active participation in a frontend bootcamp hosted by Betfair has further deepened my knowledge of HTML, CSS, and JavaScript. This experience has equipped me with the necessary skills to build intuitive and responsive user interfaces.</p>
                    <SkillItem icon="bxl-html5" name="HTML" percentage="95%" />
                    <SkillItem icon="bxl-css3" name="CSS" percentage="95%" />
                    <SkillItem icon="bxl-javascript" name="JAVASCRIPT" percentage="90%" />
                    <SkillItem icon="bxl-react" name="REACT.JS" percentage="80%" />
                </div>
        </div>
    </section>);
}

export default Skills;
