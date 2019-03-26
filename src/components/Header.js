import React from 'react';

const Header = () => {
    return(
        <div className="Header">
            <img className="Header__img" src="https://image.ibb.co/hTQdUF/Rick_and_Morty_logo.png" alt="Rick and Morty Logo"/>
            <h1 className="Header__heading">Character Generator</h1>
            <h2 className="Header__heading-sub">Push the button!</h2>
        </div>
    )
}

export default Header;