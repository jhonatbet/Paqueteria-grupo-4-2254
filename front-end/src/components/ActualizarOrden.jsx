import React from 'react'
import { useParams } from 'react-router-dom'
import { FormuOrden } from './FormuOrden';

const ordenData = {
  id: 1,
  fecha: "01-12-21",
  ciudaDestino: 'Manizales',
  direccionDestino: 'Cr 10 12-16',
  estadoOrden: 'Actualizar'
}

export const ActualizarOrden = () => {
  //Debo llamar al Back y preguntar por el id a editar
  const {id} = useParams();

  return (
    <div className="container black">
        <h2>Actualizar Orden Numero #{id}</h2>
        <FormuOrden data={ordenData}/>
    </div>
  )
}

export default ActualizarOrden