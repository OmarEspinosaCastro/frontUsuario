import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";



const Login = () => {
    const[msgError,setMsgError] = useState("");

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        axios.get('http://localhost:8090/v1/' + data.login + '/' + data.password)
            .then(function (response) {
                console.log(response);

                if (response.data == "1") {
                    localStorage.setItem("login", data.login);
                    setMsgError("")
                    window.location.replace("/bienbenida");
                } else if(response.data == "2"){
                    setMsgError("Usuario y/o contraseña incorrecta")
                }else if(response.data == "3"){
                    setMsgError("Usuario no encotrado")
                }else if(response.data == "4"){
                    setMsgError("La fecha de caducidad expiro")
                }
            })
            .catch(function (error) {
                console.log(error);
                setMsgError("Error en la conexión")
            })

    }

    return (
        <div className='d-flex bg-primary align-items-center justify-content-center vh-100'>

            <div className='p-3 rounded bg-white w-25'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mb-3'>
                        <label htmlFor="login">
                            <strong>
                                Login
                            </strong>
                        </label>
                        <input
                            {...register("login", { required: true })}
                            type="text" autoComplete='off' placeholder='Enter Login' className='form-control round-0 border border-dark' />
                        {errors.login?.type === "required" && (
                            <p style={{ color: 'red' }} role="alert">Ingresa tu usuario</p>
                        )}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">
                            <strong>
                                Password
                            </strong>
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type="password" placeholder='Enter Password' className='form-control round-0 border border-dark' />
                        {errors.password?.type === "required" && (
                            <p style={{ color: 'red' }} role="alert">Ingresa tu password</p>
                        )}
                    </div>
                    <button type="submit" className='w-100 btn btn-success rounded-0'>Enter</button>
                    {msgError !== "" && (
                            <p style={{ color: 'red' }} role="alert">{msgError}</p>
                        )}
                </form>

            </div>
        </div>
    )
}

export default Login