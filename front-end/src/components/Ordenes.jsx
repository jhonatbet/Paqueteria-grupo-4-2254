import React from 'react'
import { Link } from 'react-router-dom'

const ordenes = [
  {
    id: 1,
    fecha: '1-12-22',
    ciudaDestino: 'Manizales',
    direccionDestino: 'Cr 10 12-16',
    estadoOrden: 'Pendiente',
  },
  {
    id: 2,
    fecha: '1-12-22',
    ciudaDestino: 'Ibague',
    direccionDestino: 'Cr 11 15-21',
    estadoOrden: 'Pendiente'
  },
  {
    id: 3,
    fecha: '1-12-22',
    ciudaDestino: 'Bogota',
    direccionDestino: 'Cr 10 12-16',
    estadoOrden: 'Pendiente'
  },
  {
    id: 4,
    fecha: '2-12-22',
    ciudaDestino: 'Cali',
    direccionDestino: 'Cr 20 15-36',
    estadoOrden: 'Cumplida'
  }
]

const labels = [
  "# Orden",
  "Fecha",
  "Ciudad Destino",
  "Direccion Destino",
  "Estado Orden",
  "Action"
]

export const Ordenes = () => {


  return (
    <div className="container">
      <br />
      <div>
        <table className="table table-striped black">
          <thead>
            <tr>
              {labels.map((label, index) => {
                return (
                  <th key={index} scope="col">{label}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    <Link to={'/ordenes/' + orden.id}>{index}</Link>
                  </th> 
                  <td>{orden.fecha}</td>
                  <td>{orden.ciudaDestino}</td>
                  <td>{orden.direccionDestino}</td>
                  <td>{orden.estadoOrden}</td>
                  <td scope="row">
                    <Link className="btn btn-success" to={'/ordenes/' + orden.id + '/edit'}>Edit</Link>
                    <a className="btn btn-danger" onClick={() => deleteClick(orden._id)}>Delete</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div>
        <Link to="/ordenes/new" className="btn btn-primary" >Crear Nueva Orden</Link>
      </div>
    </div>
  )
}
