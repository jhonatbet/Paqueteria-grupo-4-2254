import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";



export const FormuOrden = ({ data }) => {

    const [isEdit, setIsEdit] = useState(false)

    const { register, formState: { errors }, handleSubmit} = useForm();
    const custonSubmit =(data) => {console.log('login data', data)}

    useEffect(() => {
        console.log(data)
        if (data.lengt !==0){
            setIsEdit(true)
        }
    })


    return (
        <div>
            {/* {data.length != 0 ? updateOrden() : createOrden() } */}
            
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
                    {...register("nombredes", { required: true })}
                    aria-invalid={errors.nombredes ? "true" : "false"}
                />
                {errors.nombredes && <p>Field required</p>} 
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
                    {...register("dirrecogida", { required: true })}
                    aria-invalid={errors.dirrecogida ? "true" : "false"}
                />
                {errors.dirrecogida && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputCiudad" className="form-label">Ciudad Recogida</label>
                    <input type="text" className="form-control" id="inputCiudad"
                    {...register("ciurecogida", { required: true })}
                    aria-invalid={errors.ciurecogida ? "true" : "false"}
                />
                {errors.ciurecogida && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputDirEntrega" className="form-label">Direccion Entrega</label>
                    <input type="text" className="form-control" id="inputDirEntrega"
                    {...register("direntrega", { required: true })}
                    aria-invalid={errors.direntrega ? "true" : "false"}
                />
                {errors.direntrega && <p>Field required</p>} 
                </div>

                <div className="col-6">
                    <label htmlFor="inputCiudadEntrega" className="form-label">Ciudad Entrega</label>
                    <input type="text" className="form-control" id="inputCiudadEntrega"
                    {...register("ciuentrega", { required: true })}
                    aria-invalid={errors.ciuentrega ? "true" : "false"}
                />
                {errors.ciuentrega && <p>Field required</p>} 
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-success" value={isEdit ? "Edit" : "Create"} >Guardar</button>
                    <input type="submit" value={isEdit ? "Edit" : "Create"} />
                </div>

                <br />
            </form>

        </div>
    )
}
