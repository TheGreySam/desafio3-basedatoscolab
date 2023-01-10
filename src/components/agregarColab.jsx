import { BaseColaboradores } from '../bd/BaseColaboradores';
import { useState } from "react";
import React from "react";
import Listado from './listadoColab';

const Agregar = () => {

    const [nameCol, setNameCol] = useState("")
    const [mailCol, setMailCol] = useState("")
    const [listCol, setListCol] = useState(BaseColaboradores);

    const idCol = Object.keys(listCol).length
    const addList = (e) => {
        (e).preventDefault()
        setListCol([...listCol, {id: JSON.stringify(idCol+1), nombre: nameCol, correo: mailCol}])
    }
    const inputNombre = (e) => {
        setNameCol(e.target.value)
    }
    const inputCorreo = (e) => {
        setMailCol(e.target.value)
    }

    //console.log(listCol);

    return (
        <div className="p-3 " >
            <div className="card-body">
                <div className="form-group p-3">
                    <label htmlFor="exampleInputEmail1">Nombre del colaborador</label>
                    <input type="name" className="form-control"
                        id="exampleInputEmail1" placeholder="Ingresa el nombre del colaborador"
                        onChange={inputNombre}></input>
                </div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputPassword1">Correo del colaborador</label>
                    <input type="email" className="form-control"
                        id="exampleInputPassword1" aria-describedby="emailHelp"
                        placeholder="Ingresa correo del colaborador"
                        onChange={inputCorreo}></input>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={addList}>Agregar Colaborador</button>
                </div>
                <div>
                    
                    <Listado 
                    list= {listCol}
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default Agregar;