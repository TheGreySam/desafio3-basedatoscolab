import React from "react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <div className="p-4 bg-dark text-white" >

            <div className="card-body">

                <div className="container px-5">
                    <div className="search">
                        <div className="">
                            <div className="">
                                <h3 className="card-title">
                                <span><img src={logo} className="App-logo" alt="logo" /></span>
                                    Buscador de colaboradores
                                    <span><img src={logo} className="App-logo" alt="logo" /></span>
                                </h3>
                            </div>
                            <div className="">
                                <div className="input-group px-5">
                                    <input type="text" class="form-control" placeholder="Busca un colaborador" 
                                    aria-label="Buscador de colaboradores" aria-describedby="basic-addon2"></input>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;