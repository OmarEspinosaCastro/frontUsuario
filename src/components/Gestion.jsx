import React, { useState } from 'react'
import Menu from './Menu'
import { useForm } from "react-hook-form"
import axios from "axios";

const Gestion = () => {

    
    var today = new Date(),
        date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

    const [fecha, setFecha] = useState(date);

    const [msgError, setMsgError] = useState("");

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log("data ",data);
        
        axios.post('http://localhost:8090/v1/inserta',
         {
            "login": data.login,
            "password": data.password,
            "nombre": data.nombre,
            "cliente": data.cliente,
            "email": data.email,
            "fechaalta": data.fechaAlta,
            "fechabaja": data.fechaBaja===''?null:data.fechaBaja,
            "status": "A",
            "intentos": data.intentos,
            "fecharevocado": data.fechaRevocado===''?null:data.fechaRevocado,
            "fechaVigencia": data.fechaVigencia===''?null:data.fechaVigencia,
            "noAcceso": data.noAcceso,
            "apellidoPaterno": data.paterno,
            "apellidoMaterno": data.materno,
            "area": data.area,
            "fechamodificacion": data.fechaAlta
        } 
        )
        .then(function (response) {
            console.log(response);
            alert("El usuario fue guardado correctamente")
            window.location.replace("/tablero");
        })
        .catch(function (error) {
            console.log(error);
            alert("Error en la conexión")
        })
    }
    return (
        <div>
            <Menu />
            <div className='d-flex bg-secondary align-items-center justify-content-center'>
                <div className=' m-3 p-3 rounded bg-white w-50'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='mb-3'>
                            <label htmlFor="login">
                                <strong>
                                    * Login:
                                </strong>
                            </label>
                            <input
                                {...register("login", { required: true })}
                                type="text" autoComplete='off' placeholder='Ingresa tu Login' className='form-control round-0 border border-dark' />
                            {errors.login?.type === "required" && (
                                <p style={{ color: 'red' }} role="alert">Ingresa tu Login</p>
                            )}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password">
                                <strong>
                                    *Password:
                                </strong>
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="password" className="form-control" name="password" placeholder="Ingresa tu Password"
                            />
                            {errors.password?.type === "required" && (
                                <p style={{ color: 'red' }} role="alert">Ingresa tu password</p>
                            )}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="nombre">
                                <strong>
                                    *Nombre:
                                </strong>
                            </label>
                            <input 
                                {...register("nombre", { required: true })}
                                type="text" className="form-control" name="nombre" placeholder="Ingresa tu Nombre"
                                />
                                {errors.nombre?.type === "required" && (
                            <p style={{ color: 'red' }} role="alert">Ingresa tu nombre</p>
                        )}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="cliente">
                                <strong>
                                *Cliente:
                                </strong>
                            </label>
                            <input 
                                {...register("cliente", { required: true })}
                                type="number" className="form-control" name="cliente" placeholder="Cliente"
                                />
                                {errors.cliente?.type === "required" && (
                            <p style={{ color: 'red' }} role="alert">Ingresa el numero de cliente</p>
                        )}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email">
                                <strong>
                                    Email
                                </strong>
                            </label>
                            <input 
                              {...register("email",)}
                            type="email" name='email' placeholder='Ingresa el Correo' className='form-control round-0 border border-dark' />
                            
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="fechaAlta">
                                <strong>
                                    *Fecha de Alta:
                                </strong>
                            </label>
                            <input value={fecha}
                              {...register("fechaAlta", { required: true })}
                                type="text" className="form-control" name="fechaAlta" placeholder="AAAA-MM-DD"
                                />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="fechaBaja">
                                <strong>
                                    Fecha de Baja
                                </strong>
                            </label>
                            <input 
                              {...register("fechaBaja")}
                              type="text" className="form-control" name="fechaBaja" placeholder="AAAA-MM-DD"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="estatus">
                                <strong>
                                    *Estatus del usuario:
                                </strong>
                            </label>
                            <input value={'A'}
                              {...register("estatus", { required: true })}
                              type="text" className="form-control" name="estatus" placeholder="Ingresa el estatus"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="intentos">
                                <strong>
                                    *Intentos:
                                </strong>
                            </label>
                            <input defaultValue={0}
                              {...register("intentos", { required: true })}
                              type="number" className="form-control" name="intentos" placeholder="Ingresa los intentos"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="fechaRevocado">
                                <strong>
                                    Fecha Revocado
                                </strong>
                            </label>
                            <input 
                              {...register("fechaRevocado",{pattern: {
                                value: /^\d{4}-\d{2}-\d{2}$/,
                                message: "La fecha debe estar en el formato YYYY-MM-DD"
                              }})}
                              type="text" className="form-control" name="fechaRevocado" placeholder="AAAA-MM-DD"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="fechaVigencia">
                                <strong>
                                    Fecha de Vigencia
                                </strong>
                            </label>
                            <input 
                              {...register("fechaVigencia")}
                              type="text" className="form-control" name="fechaVigencia" placeholder="AAAA-MM-DD"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="noAcceso">
                                <strong>
                                    Número de acceso
                                </strong>
                            </label>
                            <input 
                              {...register("noAcceso")}
                              type="number" className="form-control" name="noAcceso" placeholder="Número de Acceso"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="paterno">
                                <strong>
                                    Apellido paterno
                                </strong>
                            </label>
                            <input 
                              {...register("paterno")}
                              type="text" className="form-control" name="paterno" placeholder="Apellido paterno"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="materno">
                                <strong>
                                    Apellido materno
                                </strong>
                            </label>
                            <input 
                              {...register("materno")}
                              type="text" className="form-control" name="materno" placeholder="Apellido materno"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="area">
                                <strong>
                                    Area
                                </strong>
                            </label>
                            <input 
                              {...register("area")}
                              type="number" maxLength={4} className="form-control" name="area" placeholder="Ingreas el area"
                              />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="fechaModificacion">
                                <strong>
                                    *Fecha de Modificación:
                                </strong>
                            </label>
                            <input value={fecha}
                              {...register("fechaModificacion", { required: true })}
                                type="text" className="form-control" name="fechaModificacion" placeholder="AAAA-MM-DD"
                                />
                        </div>
                        <button type="submit" className='w-100 btn btn-success rounded-0'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Gestion