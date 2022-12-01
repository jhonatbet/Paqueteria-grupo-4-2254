import React from 'react'

export const FormuOrden = ({ data }) => {

    const createOrden = () => {
        console.log("Crear Orden")
        console.log(data)
    }

    const updateOrden = () => {
        console.log("Actualizar Orden")
        console.log(data)

    }

    return (
        <div>
            {data.length != 0 ? updateOrden() : createOrden() }
            
            <form className="row g-4 black">

                <div className="col-md-2">
                    <label htmlFor="inputFecha" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="inputFecha" />
                </div>

                <div className="col-md-2">
                    <label htmlFor="inputHora" className="form-label">Hora</label>
                    <input type="time" className="form-control" id="inputHora" />
                </div>

                <div className="col-md-2">
                    <label htmlFor="cantidad" className="form-label">Cantidad/unidades</label>
                    <input type="number" name="cantidad" step="1" min="0" className="form-control" id="cantidad" />
                </div>

                <div className="col-md-2">
                    <label htmlFor="altoCaja" className="form-label">Alto (mts)</label>
                    <input type="number" name="altoCaja" step="0.1" min="0" className="form-control" id="altoCaja" />
                </div>

                <div className="col-md-2">
                    <label htmlFor="anchoCaja" className="form-label">Ancho (mts)</label>
                    <input type="number" name="anchoCaja" step="0.1" min="0" className="form-control" id="anchoCaja" />
                </div>

                <div className="col-md-2">
                    <label htmlFor="largoCaja" className="form-label">Largo (mts)</label>
                    <input type="number" name="largoCaja" step="0.1" min="0" className="form-control" id="largoCaja" />
                </div>

                <div className="col-6">
                    <label htmlFor="inputName" className="form-label">Nombre Destinatario</label>
                    <input type="text" className="form-control " id="inputDestinatario" placeholder="Nombre y apellido" />
                </div>

                <div className="col-6">
                    <label htmlFor="inputCedula" className="form-label">Cedula/Nit destinatario</label>
                    <input type="text" className="form-control " id="inputCedula" />
                </div>

                <div className="col-6">
                    <label htmlFor="inputDireccion" className="form-label">Direccion Recogida</label>
                    <input type="text" className="form-control" id="inputDireccion" />
                </div>

                <div className="col-6">
                    <label htmlFor="inputCiudad" className="form-label">Ciudad Recogida</label>
                    <input type="text" className="form-control" id="inputCiudad" />
                </div>

                <div className="col-6">
                    <label htmlFor="inputDirEntrega" className="form-label">Direccion Entrega</label>
                    <input type="text" className="form-control" id="inputDirEntrega" />
                </div>

                <div className="col-6">
                    <label htmlFor="inputCiudadEntrega" className="form-label">Ciudad Entrega</label>
                    <input type="text" className="form-control" id="inputCiudadEntrega" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-success">Guardar</button>
                </div>

                <br />
            </form>

        </div>
    )
}
