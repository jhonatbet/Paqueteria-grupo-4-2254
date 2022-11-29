import React from 'react'

export const CrearOrden = () => {
  
  return (

    <div className="container py-5">
        <form className="row g-4 black">

          <div className="col-md-2">
            <label for="inputFecha" className="form-label">Fecha</label>
            <input type="date" className="form-control" id="inputFecha"/>
          </div>

          <div className="col-md-2">
            <label for="inputHora" className="form-label">Hora</label>
            <input type="time" className="form-control" id="inputHora"/>
          </div>

          <div className="col-md-2">
            <label for="cantidad" className="form-label">Cantidad/unidades</label>
            <input type="number" name="cantidad" step="1" min="0" className="form-control" id="cantidad"/>
          </div>

          <div className="col-md-2">
            <label for="altoCaja" className="form-label">Alto (mts)</label>
            <input type="number" name="altoCaja" step="0.1" min="0" className="form-control" id="altoCaja"/>
          </div>

          <div className="col-md-2">
            <label for="anchoCaja" className="form-label">Ancho (mts)</label>
            <input type="number" name="anchoCaja" step="0.1" min="0" className="form-control" id="anchoCaja"/>
          </div>

          <div className="col-md-2">
            <label for="largoCaja" className="form-label">Largo (mts)</label>
            <input type="number" name="largoCaja" step="0.1" min="0" className="form-control" id="largoCaja"/>
          </div>

          <div className="col-6">
            <label for="inputName" className="form-label">Nombre Destinatario</label>
            <input type="text" className="form-control " id="inputDestinatario" placeholder="Nombre y apellido"/>
          </div>

          <div className="col-6">
            <label for="inputCedula" className="form-label">Cedula/Nit destinatario</label>
            <input type="text" className="form-control " id="inputCedula"/>
          </div>

          <div className="col-6">
            <label for="inputDireccion" className="form-label">Direccion Recogida</label>
            <input type="text" className="form-control" id="inputDireccion"/>
          </div>

          <div className="col-6">
            <label for="inputCiudad" className="form-label">Ciudad Recogida</label>
            <input type="text" className="form-control" id="inputCiudad"/>
          </div>

          <div className="col-6">
            <label for="inputDirEntrega" className="form-label">Direccion Entrega</label>
            <input type="text" className="form-control" id="inputDirEntrega"/>
          </div>

          <div className="col-6">
            <label for="inputCiudadEntrega" className="form-label">Ciudad Entrega</label>
            <input type="text" className="form-control" id="inputCiudadEntrega"/>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-success">Guardar</button>
          </div>

          <br/>
        </form>

    </div>
  )
}