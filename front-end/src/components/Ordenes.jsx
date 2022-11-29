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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>28/11/22</td>
              <td>Pereira</td>
              <td>NNNN</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>28/11/22</td>
              <td>Pereira</td>
              <td>NNNN</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <th scope="row">3</th>
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
