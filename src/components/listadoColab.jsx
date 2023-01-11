//import { BaseColaboradores } from '../bd/BaseColaboradores';
import { useState } from "react";
//import Buscador from './buscador';
import React from "react";
import logo from '../logo.svg';

const Listado = ({list}) => {

    
    const arrayList = list
    const [search, setSearch] = useState('');
    const inputSearch = (e) => {
        setSearch(e.target.value)
    }
    console.log(search)
    const listado = arrayList.filter((e) => {
        return search.toLowerCase() === '' ? e : e.nombre.toLowerCase().includes(search)
    }).map((e) => {
        return (
            <li className="list-group-item" key={e.id}>{e.nombre} - {e.correo}</li>
        )
    })
         
    return (
        <div className="p-3 " >
            
            <div className="card-body">
                <div className='col'>
                    <h5 className="card-title p-3">Listado de colaboradores</h5>
                </div>
                <div className="p-4 bg-dark text-white" >

            <div className="card-body">

                <div className="container px-5">
                    <div className="search">
                        <div className="">
                            <div className="">
                                <h3 className="card-title">
                                <span><img src={logo} className="App-logo" alt="logo" /></span>
                                Listado de colaboradores
                                    <span><img src={logo} className="App-logo" alt="logo" /></span>
                                </h3>
                            </div>
                            <div className="col align-self-end">
                                <div className="input-group px-5">
                                    <input type="text" className="form-control" placeholder="Busca un colaborador" 
                                    aria-label="Buscador de colaboradores" aria-describedby="basic-addon2"
                                    onChange={inputSearch}></input>
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
                 <ul className="list-group lista">
                 
                {listado}
                    
                </ul> 
                    
                

            </div>
        </div>
    )
}

export default Listado;