import { BaseColaboradores } from '../bd/BaseColaboradores';
import { useState } from "react";
import React from "react";

const Agregar = () => {

    const [nombreCol, setNombreCol] = useState("")
    const [correoCol, setCorreoCol] = useState("")
    const [listaCol, setListaCol] = useState(BaseColaboradores);

    const idCol = Object.keys(listaCol).length
    const agregarLista = (e) => {
        (e).preventDefault()
        setListaCol([...listaCol, {id: JSON.stringify(idCol+1), nombre: nombreCol, correo: correoCol}])
    }
    const inputNombre = (e) => {
        setNombreCol(e.target.value)
    }
    const inputCorreo = (e) => {
        setCorreoCol(e.target.value)
    }

    console.log(listaCol);

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
                    <button className='btn btn-primary' onClick={agregarLista}>Agregar Colaborador</button>
                </div>
            </div>
        </div>
    )
}

export default Agregar;