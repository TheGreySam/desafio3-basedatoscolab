import { BaseColaboradores } from '../bd/BaseColaboradores';
import { useState } from "react";
import React from "react";

const Listado = () => {
    // let listaColab = ''
    // for (let BaseColaborador of BaseColaboradores) {
    //     listaColab += `
        
    //     <li class="list-group-item">${BaseColaborador.nombre} - ${BaseColaborador.correo}</li>
    //     `
    // }
    // console.log(listaColab)
    //const [nombreCol] = useState("");
    const [nombreCol, setNombreCol] = useState("")
    const [correoCol, setCorreoCol] = useState("")
    const [listaCol, setListaCol] = useState(BaseColaboradores);

    const agregarLista = (e) => {
        (e).preventDefault()
        setListaCol([...listaCol, {nombre: nombreCol, correo: correoCol}])
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
            <form onSubmit={agregarLista} className="card-body">
                <div className="form-group p-3">
                    <label htmlFor="exampleInputEmail1">Nombre del colaborador</label>
                    <input type="name" className="form-control" 
                    id="exampleInputEmail1"  placeholder="Ingresa el nombre del colaborador" 
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
                    <button className='btn btn-primary'>Agregar Colaborador</button>
                </div>
            </form>

            <div className="card-body">
                <h5 className="card-title p-3">Listado de colaboradores</h5>
                <ul className="list-group lista">
                {listaCol.map(BaseColaborador => 
                <li className="list-group-item" key={BaseColaborador.nombre}>
                    {BaseColaborador.nombre} - {BaseColaborador.correo}</li>
                    )}
                </ul>
                    
                

            </div>
        </div>
    )
}

export default Listado;