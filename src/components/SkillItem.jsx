import React from 'react';

// Componenta Skill pentru fiecare abilitate
function SkillItem({ icon, name, percentage }) {
    const className = name.toLowerCase().replace(/[^a-z]/gi, '');
    const barStyle = {
        width: percentage 
    };

    return (
        <div className="skills__data">
            <div className="skills__names">
                <i className={`bx ${icon} skills__icon`}></i>
                <span className="skills__name">{name}</span>
            </div>
            <div className={`skills__bar skills__${className}`} style={barStyle}>
            </div>
            <div>
                <span className="skills__percentage">{percentage}</span>
            </div>
        </div>
    );
}

export default SkillItem;