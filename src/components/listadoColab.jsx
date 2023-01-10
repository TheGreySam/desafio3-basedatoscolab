//import { BaseColaboradores } from '../bd/BaseColaboradores';
//import { useState } from "react";
import React from "react";

const Listado = ({list}) => {

    
    const arrayList = list
    const listado = arrayList.map((e) => {
        return (
            <li className="list-group-item" key={e.id}>{e.nombre} - {e.correo}</li>
        )
    })
    //const listado = JSON.stringify(list)
    //console.log(listado)
 
    // const listadoCol = listado.map((list) => 
        
    //         <li className="list-group-item" key={list.id}>
    //             {list.nombre - list.correo}
    //         </li>
    //     )
    
                 
    return (
        <div className="p-3 " >
            
            <div className="card-body">
                <h5 className="card-title p-3">Listado de colaboradores</h5>
                {/* <ul className="list-group lista">
                {listCol.map(BaseColaboradores => 
                <li className="list-group-item" key={BaseColaboradores.nombre}>
                    {BaseColaboradores.nombre} - {BaseColaboradores.correo}</li>
                    )}
                </ul> */}
                 <ul className="list-group lista">
                 
                {listado}
                    
                </ul> 
                    
                

            </div>
        </div>
    )
}

export default Listado;