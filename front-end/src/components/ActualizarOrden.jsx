import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FormuOrden } from './FormuOrden'



export const ActualizarOrden = () => {
  //Debo llamar al Back y preguntar por el id a editar
  const {id} = useParams();
  const [orden, setOrden] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/paquetes/" + id)
      .then(response => {
        console.log(response.data)
        // const fechaformat = response.data.fecha
        // response.data['fecha'] = dateformat(fechaformat, "yyyy-mm-dd")

        setOrden(response.data)
      })
  }, [])


  return (
    <div className="container black">
        {orden ? (
          <>
          <h2>Actualizar Orden #{id}</h2>
          <FormuOrden data={orden} ordenId={id}/>
          </>
        ) : ""}
    </div>
  )
}

export default ActualizarOrden