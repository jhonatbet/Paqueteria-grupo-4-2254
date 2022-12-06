import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"


const labels = [
  "# Orden",
  "Fecha",
  "Ciudad Destino",
  "Direccion Destino",
  "Estado Orden",
  "Action"
]

export const Ordenes = () => {
  const [ordenes, setOrdenes] = useState(null)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const userId = "638cff04fcda255e8b4f2378"
    axios
      // .get("http://localhost:5000/paquetes?userId=" + userId)
      .get("http://localhost:5000/paquetes/")
      .then(result => {
        console.log(result.data)
        setOrdenes(result.data)
      })
  },[update])

  const deleteClick = (ordenId) => {
    axios
        .delete("http://localhost:5000/paquetes/delete/" + ordenId)
        .then(response => {
            console.log(response.data)
            setUpdate(!update)
        })
  }

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
            {ordenes !== null ? ordenes.map((orden, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    <Link to={'/ordenes/' + orden._id}>{index}</Link>
                  </th>
                  <td>{orden.fecha}</td>
                  <td>{orden.ciuDestino}</td>
                  <td>{orden.dirDestino}</td>
                  <td>{orden.estadoOrden}</td>
                  <td scope="row">
                    <Link className="btn btn-success" to={'/ordenes/' + orden._id + '/edit'}>Edit</Link>
                    <a className="btn btn-danger" onClick={() => deleteClick(orden._id)}>Delete</a>
                  </td>
                </tr>
              )
            }) : ''}
          </tbody>
        </table>
      </div>

      <div>
        <Link to="/ordenes/new" className="btn btn-primary" >Crear Nueva Orden</Link>
      </div>
    </div>
  )
}
