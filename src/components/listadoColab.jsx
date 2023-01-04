import { BaseColaboradores } from '../bd/BaseColaboradores';
import { useState } from "react";
import React from "react";

const Listado = () => {
    
    const [listaCol] = useState(BaseColaboradores);


    
    
    return (
        <div className="p-3 " >
            
            <div className="card-body">
                <h5 className="card-title p-3">Listado de colaboradores</h5>
                <ul className="list-group lista">
                {listaCol.map(BaseColaboradores => 
                <li className="list-group-item" key={BaseColaboradores.nombre}>
                    {BaseColaboradores.nombre} - {BaseColaboradores.correo}</li>
                    )}
                </ul>
                    
                

            </div>
        </div>
    )
}

export default Listado;