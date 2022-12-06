import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';



export const FormuOrden = ({data, ordenId}) => {

    const [isEdit, setIsEdit] = useState(false)

    const { register, formState: { errors }, handleSubmit, setValue} = useForm();

    const custonSubmit =(dataForm) => {
         console.log (dataForm)
        if (isEdit) {
            axios
                .put("http://localhost:5000/paquetes/edit/"+ ordenId, dataForm)
                .then(response => console.log(response.data))
        } else {
            axios
                .post("http://localhost:5000/paquetes/create", dataForm)
                .then(response => console.log(response.data))
        }
    }

    useEffect(() => {
        if (data.length !==0) {
            setIsEdit(true)
            setValue('fecha', data.fecha)
            setValue('hora', data.hora)
            setValue('ciuDestino', data.ciuDestino)
            setValue('dirDestino', data.dirDestino)
        }
    }, [])


    return (
        <div>
            
            <form className="row g-4 black form" onSubmit={handleSubmit(custonSubmit)}>

                <div className="col-md-2">
                    <label htmlFor="inputFecha" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="inputFecha"
                    {...register("fecha", { required: true })}
                    aria-invalid={errors.fecha ? "true" : "false"}
                />
                {errors.fecha && <p>Field required</p>} 
                </div>

                <div className="col-md-2">
                    <label htmlFor="inputHora" className="form-label">Hora</label>
                    <input type="time" className="form-control" id="inputHora" 
                    {...register("hora", { required: true })}
                    aria-invalid={errors.hora ? "true" : "false"}
                />
                {errors.hora && <p>Field required</p>}                     
                </div>

                <div className="col-md-2">
                    <label htmlFor="cantidad" className="form-label">Cantidad/unidades</label>
                    <input type="number" name="cantidad" step="1" min="0" className="form-control" id="cantidad"
                    {...register("cant", { required: true })}
                    aria-invalid={errors.cant ? "true" : "false"}
                />
                {errors.cant && <p>Field required</p>} 
                </div>

                <div className="col-md-2">
                    <label htmlFor="altoCaja" className="form-label">Alto (mts)</label>
                    <input type="number" name="altoCaja" step="0.1" min="0" className="form-control" id="altoCaja"
                    {...register("alto", { required: true })}
                    aria-invalid={errors.alto ? "true" : "false"}
                />
                {errors.alto && <p>Field required</p>} 
                </div>

                <div className="col-md-2">
                    <label htmlFor="anchoCaja" className="form-label">Ancho (mts)</label>
                    <input type="number" name="anchoCaja" step="0.1" min="0" className="form-control" id="anchoCaja" 
                    {...register("ancho", { required: true })}
                    aria-invalid={errors.ancho ? "true" : "false"}
                />
                {errors.ancho && <p>Field required</p>} 
                </div>

                <div className="col-md-2">
                    <label htmlFor="largoCaja" className="form-label">Largo (mts)</label>
                    <input type="number" name="largoCaja" step="0.1" min="0" className="form-control" id="largoCaja"
                    {...register("largo", { required: true })}
                    aria-invalid={errors.largo ? "true" : "false"}
                />
                {errors.largo && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputName" className="form-label">Nombre Destinatario</label>
                    <input type="text" className="form-control " id="inputDestinatario"
                    {...register("nombre", { required: true })}
                    aria-invalid={errors.nombre ? "true" : "false"}
                />
                {errors.nombre && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputCedula" className="form-label">Cedula/Nit destinatario</label>
                    <input type="text" className="form-control " id="inputCedula"
                    {...register("cedula", { required: true })}
                    aria-invalid={errors.cedula ? "true" : "false"}
                />
                {errors.cedula && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputDireccion" className="form-label">Direccion Recogida</label>
                    <input type="text" className="form-control" id="inputDireccion"
                    {...register("dirRecogida", { required: true })}
                    aria-invalid={errors.dirRecogida ? "true" : "false"}
                />
                {errors.dirRecogida && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputCiudad" className="form-label">Ciudad Recogida</label>
                    <input type="text" className="form-control" id="inputCiudad"
                    {...register("ciuRecogida", { required: true })}
                    aria-invalid={errors.ciuRecogida ? "true" : "false"}
                />
                {errors.ciuRecogida && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputDirEntrega" className="form-label">Direccion Entrega</label>
                    <input type="text" className="form-control" id="inputDirEntrega"
                    {...register("dirDestino", { required: true })}
                    aria-invalid={errors.dirDestino ? "true" : "false"}
                />
                {errors.dirDestino && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputCiudadEntrega" className="form-label">Ciudad Entrega</label>
                    <input type="text" className="form-control" id="inputCiudadEntrega"
                    {...register("ciuDestino", { required: true })}
                    aria-invalid={errors.ciuDestino ? "true" : "false"}
                />
                {errors.ciuDestino && <p>Field required</p>} 
                </div>

                <div className="col-12">
                    <input type="submit" className="btn btn-success" value={isEdit ? "Actualizar" : "Crear"} />
                </div>

                <br />
            </form>

        </div>
    )
}

export default FormuOrden