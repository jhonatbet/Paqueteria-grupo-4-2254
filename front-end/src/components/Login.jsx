import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

  return (
        <div className="container">
            
            <div className="row">
                <div className="col"></div>
                        
                <div className="col black">
                    <div className="text-end">
                        <img src="" alt="" />
                    </div>
                    <h2 className="fw-bold text-center py-4">BIENVENIDO</h2>

                    <form>
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Ingrese su Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-4">
                            <label for="exampleInputPassword1" className="form-label">Ingrese su Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" for="exampleCheck1">Mantenerme conectado</label>
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


