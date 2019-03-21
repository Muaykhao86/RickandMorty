import React from 'react';

const Card = ({Name, Image, Universe}) => {

    
    return(
       
        <div className="card">
            <div className="card-container">
                <img className="card-image" src={Image} alt="Charecter"/>
                    <div className="card__details">
                        <p className="card__details-text">In Universe C-{Universe} you are</p>
                        <h2 className="card__details-name">{Name}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;