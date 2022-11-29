import React from 'react'

export const Registro = () => {

    
  return (
        <div className="container">
            
            <div className="row">
                <div className="col"></div>
                        
                <div className="col black">
                    <div className="text-end">
                        <img src="" alt="" />
                    </div>
                    <h2 className="fw-bold text-center py-4">¡REGISTRESE AQUI!</h2>

                    <form>
                        <div className="mb-4">
                            <label for="usuario" className="form-label">Ingrese su Nombre </label>
                            <input type="text" className="form-control" id="usuario"></input>          
                        </div>

                        <div className="mb-4">
                            <label for="exampleInputPassword1" className="form-label">Ingrese una Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </div>

                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Ingrese su Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>                        
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-success">Crear usuario</button>
                        </div>

                        <br/>
                    </form>

                </div>

                <div className="col"></div>

            </div>

        </div>
    )
}
