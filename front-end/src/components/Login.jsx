import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useForm } from "react-hook-form";

export const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

  return (
        <div className="container">
            
            <div className="row">
                <div className="col"></div>
                        
                <div className="col black">
                    <div className="text-end">
                        <img src="" alt="" />
                    </div>
                    <h2 className="fw-bold text-center py-4">BIENVENIDO</h2>

                    <form className="form" onSubmit={handleSubmit(customSubmit)}>

                        <div className="mb-4 form-login">
                            <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                {...register("email",{required: true})}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email && <p>Campo requerido</p>}
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-4 form-login">
                            <label htmlFor="exampleInputPassword1" className="form-label">Ingrese su Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                {...register("password",{required: true, maxLength:10})}
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                            {errors.password && <p>Campo requerido/longitud max 10</p>}
                        </div>

                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" htmlFor="exampleCheck1">Mantenerme conectado</label>
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                        </div>

                        <div className="my-4">
                            <span>¿No tienes cuenta? <Link to="/Registro">Registrate aqui</Link></span><br />
                            <span><a href="#">Recuperar Password</a></span>
                        </div>

                    </form>

                </div>

                <div className="col"></div>

            </div>

        </div>
    )
}

export default Login


