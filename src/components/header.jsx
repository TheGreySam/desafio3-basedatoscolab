import React from "react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <div className="p-4 bg-dark text-white" >

            <div className="card-body">
                <h1 className="card-title">
                    <span><img src={logo} className="App-logo" alt="logo" /></span>
                    Desafío 3 - Base de datos colaborativa
                    <span><img src={logo} className="App-logo" alt="logo" /></span>
                </h1>

            </div>
        </div>
    )
}

export default Header;