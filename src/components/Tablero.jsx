import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import { useForm } from "react-hook-form"
import axios from "axios";


const Tablero = () => {

    var today = new Date(),
        date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

    const [fecha, setFecha] = useState(date);

    const [msgError, setMsgError] = useState("");

    const [datos, setDatos] = useState([]);

    const [nombre, setNombre] = useState("");
    const [alta, setAlta] = useState("");
    const [baja, setBaja] = useState("");

    useEffect(() => {
        showAllUsers()
    }, []);

    const showAllUsers = () => {
        axios.get('http://localhost:8090/v1/usuarios')
            .then(function (response) {
                setDatos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    const activos = () => {
        axios.get('http://localhost:8090/v1/estatus/A')
            .then(function (response) {
                setDatos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    const inactivos = () => {
        axios.get('http://localhost:8090/v1/estatus/B')
            .then(function (response) {
                setDatos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const revocados = () => {
        axios.get('http://localhost:8090/v1/estatus/R')
            .then(function (response) {
                setDatos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    const showByNombre = () => {
        setAlta("");
        setBaja("")
        axios.get('http://localhost:8090/v1/nombre/' + nombre)
            .then(function (response) {
                setDatos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const showByAlta = () => {
        setNombre("");
        setBaja("")
        axios.get('http://localhost:8090/v1/alta/' + alta)
            .then(function (response) {
                setDatos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const showByBaja = () => {
        setNombre("");
        setAlta("")
        axios.get('http://localhost:8090/v1/baja/' + baja)
            .then(function (response) {
                setDatos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const bajaUsuario = (logg) => {
        console.log("eliminar",logg);
         var resultado = window.confirm('Estas seguro de eliminar el registro?');
        if (resultado === true) {
            console.log('http://localhost:8090/v1/darBaj/' + logg);
            axios.put('http://localhost:8090/v1/darBaj/' + logg)
            .then(function (response) {
                inactivos();
            })
            .catch(function (error) {
                console.log(error);
            })

        } else {
            console.log("cancelado");
        } 
    }
    const EditarUsuario = (logg) => {
        console.log("eliminar",logg);
        localStorage.setItem("editUser", logg);
        window.location.replace("/gestionedit");
        
    }
    return (
        <div>
            <Menu />
            <div className='d-flex bg-secondary align-items-center justify-content-cente ' >
                <div className='m-5 p-2 rounded bg-white' style={{ width: '70%' }} >
                    <form >

                        <div style={{ display: 'flex' }}>
                            <div className='mb-4 '>
                                <button onClick={() => activos()} style={{ margin: '10%' }} type="button" class="btn btn-success">Activo</button>
                            </div>
                            <div className='mb-4 '>
                                <button onClick={() => inactivos()} style={{ margin: '10%' }} type="button" class="btn btn-warning">Inactivo</button>
                            </div>
                            <div className='mb-4'>
                                <button onClick={() => revocados()} style={{ margin: '10%' }} type="button" class="btn btn-info">Revocado</button>
                            </div>
                            <div className='mb-6'>
                                <button onClick={() => showAllUsers()} style={{ margin: '10%' }} type="button" class="btn btn-danger">Muestra todos los Usuarios</button>
                            </div>
                        </div>
                        <div className='mb-3' style={{ width: '90%', display: 'flex' }}  >
                            <label style={{ marginLeft: '10%' }} htmlFor="nombre">
                                <strong>
                                    Nombre:
                                </strong>
                            </label>
                            <input style={{ marginLeft: '3%' }}
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                type="text" className="form-control" name="cliente" placeholder="Nombre"
                            />
                            <div style={{ marginLeft: '3%' }}>
                                <button onClick={() => showByNombre()} type="button" class="btn btn-dark">Buscar</button>
                            </div>
                        </div>
                        <div className='mb-3' style={{ width: '90%', display: 'flex' }}  >
                            <label style={{ marginLeft: '10%' }} htmlFor="altaInicial">
                                <strong>
                                    Fecha alta:
                                </strong>
                            </label>
                            <input style={{ marginLeft: '3%' }}
                                value={alta}
                                onChange={(e) => setAlta(e.target.value)}
                                type="text" className="form-control" name="altaInicial" placeholder="YYYY-MM-DD"
                            />
                            <div style={{ marginLeft: '3%' }}>
                                <button onClick={() => showByAlta()} type="button" class="btn btn-info">Buscar</button>
                            </div>
                        </div>
                        <div className='mb-3' style={{ width: '90%', display: 'flex' }}  >
                            <label style={{ marginLeft: '10%' }} htmlFor="altaFinal">
                                <strong>
                                    Fecha Baja:
                                </strong>
                            </label>
                            <input style={{ marginLeft: '3%' }}
                                value={baja}
                                onChange={(e) => setBaja(e.target.value)}
                                type="text" className="form-control" name="altaFinal" placeholder="YYYY-MM-DD"
                            />
                            <div style={{ marginLeft: '3%' }}>
                                <button onClick={() => showByBaja()} type="button" class="btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </form>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Login</th>
                                <th scope="col">Fecha Alta</th>
                                <th scope="col">Estatus</th>
                                <th scope="col">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.nombre}</td>
                                    <td>{user.login}</td>
                                    <td>{user.fechaalta}</td>
                                    <td>{user.status}</td>
                                    <td><button type="button" onClick={() => EditarUsuario(user.login)}  class="btn btn-link">Editar</button><label> - </label>
                                    {user.status!=='B'&&<button onClick={() => bajaUsuario(user.login)}  class="btn btn-link">Baja</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tablero