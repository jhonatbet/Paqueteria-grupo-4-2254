import React from 'react'
import { Link } from 'react-router-dom'

export const Ordenes = () => {


  return (
    <div className="container">
      <br/>
      <div>
        <table className="table table-striped black">
          <thead>
            <tr>
              <th scope="col"># Servicio</th>
              <th scope="col">Fecha</th>
              <th scope="col">Ciudad Destino</th>
              <th scope="col">Direccion Destino</th>
              <th scope="col">Estado Orden</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><Link to='/actualizarorden/1'>1</Link></th>
              <td>28/11/22</td>
              <td>Pereira</td>
              <td>NNNN</td>
              <td>Pendiente</td>
              <th scope="row"><Link to='/actualizarorden/1'>Edit</Link></th>

            </tr>
            <tr>
              <th scope="row"><Link to='/actualizarorden/2'>2</Link></th>
              <td>28/11/22</td>
              <td>Pereira</td>
              <td>NNNN</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <th scope="row"><Link to='/actualizarorden/3'>3</Link></th>
              <td>28/11/22</td>
              <td>Pereira</td>
              <td>NNNN</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>28/11/22</td>
              <td>Pereira</td>
              <td>NNNN</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>28/11/22</td>
              <td>Pereira</td>
              <td>NNNN</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>28/11/22</td>
              <td>Pereira</td>
              <td>NNNN</td>
              <td>Pendiente</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/crearorden" className="btn btn-primary" >Crear Nueva Orden</Link>        
      </div>
    </div>  
  )
}
