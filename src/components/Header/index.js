import React from "react";
import './Header.css';

export default({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://i.ibb.co/64xp531/netflix-94.png" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.ibb.co/fNR5jsR/icon-user.png"></img>
                </a>
            </div>
        </header>
    )
}