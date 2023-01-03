import {BaseColaboradores} from '../bd/BaseColaboradores';
import React from "react";

const Listado = () => {
    let listaColab = ''
    for (let BaseColaborador of BaseColaboradores) {
        listaColab += `
        <ul class="list-group lista">
        <li class="list-group-item">${BaseColaborador.nombre} - ${BaseColaborador.correo}</li>
        </ul>`
    }
    console.log(listaColab)
    return (
        <div className="p-3 " >

            <div className="card-body">
                <h5 className="card-title">Listado de colaboradores</h5>
                
                    {listaColab}
                

            </div>
        </div>
    )
}

export default Listado;