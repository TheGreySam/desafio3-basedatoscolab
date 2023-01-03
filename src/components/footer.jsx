import React from "react";
import logo from '../logo.svg';

const Footer = () => {
    return (
        <div className="p-4 bg-dark text-white" >
            
                <div className="card-body">
                <hr />
                    <h5 className="card-title mb-3">Todos los derechos reservados</h5>
                    <span><img src={logo} className="App-logo" alt="logo" /></span>
                </div>
        </div>
    )
}

export default Footer;