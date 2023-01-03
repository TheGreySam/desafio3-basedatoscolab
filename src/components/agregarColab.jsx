import React from "react";

const Agregar = (props) => {
    return (
        <div className="p-3 " >

            <div className="card-body">
                <div className="form-group p-3">
                    <label htmlFor="exampleInputEmail1">Nombre del colaborador</label>
                    <input type="name" className="form-control" id="exampleInputEmail1"  placeholder="Ingresa el nombre del colaborador" onChange={props.nombre}></input>
                </div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputPassword1">Correo del colaborador</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Ingresa correo del colaborador" onChange={props.correo}></input>
                </div>
            </div>
        </div>
    )
}

export default Agregar;