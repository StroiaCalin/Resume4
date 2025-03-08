import React from 'react';

function PortfolioItem({ imgSrc, altText, description, popupImage, openPopup }) {
    return (
        <a className="work__img" onClick={() => openPopup(popupImage, description)}>
            <img src={imgSrc} alt={altText} />
        </a>
    );
}

export default PortfolioItem;
