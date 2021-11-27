//import React, { useEffect,useState} from 'react'
import React, { useState } from 'react'

import Swal from 'sweetalert2'
import Axios from 'axios'

import TablaServicio from './TablaServicio'
export default function CrearMascota() {


  const [nombre,setNombre]=useState('')
  const[descripcion,setDescripcion]=useState('')
  const[imagenServicio,setimagenServicio]=useState();
  



  const guardar = async(e)=>{


    const servicio= {
      nombre,
      descripcion,
      imagenServicio
      

    }


    if(nombre===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir el nombre del servicio",
        showConfirmButton:false,
        timer:1500
      })


    }else if(descripcion===""){

        Swal.fire({
            icon:'error',
            title:"Debe escribir una descripcion del servicio ",
            showConfirmButton:false,
            timer:1500
          })

    }else{

      const respuesta = await Axios.post('/servicio/add',servicio)



      Swal.fire({
        icon:'success',
        title:"Servicio creado correctamente",
        showConfirmButton:false,
        timer:1500
      })

      e.target.reset();
      setNombre("");
      setDescripcion("");
    }

}


  return (

  <>

<div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-plus-circle"></i>
              </div>
              <div className="card-header bg-light text-center">
                <h4>Crear Servicio</h4>
              </div>
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">

                    <div className="col-md-12">
                      <label><strong>Nombre del servicio</strong></label>
                      <input type="text" className="form-control required" placeholder="Escribe el nombre del servicio" onChange={(e)=>setNombre(e.target.value)} />
                    </div>

                    <div className="col-md-12 mt-3">
                      <label><strong>Descripción</strong></label>
                      <textarea className="form-control required" placeholder="Escribe la descripción del servicio" onChange={(e)=>setDescripcion(e.target.value)} ></textarea>
                    </div>

                    <div className="mb-3 mt-3">
                        <label for="formFile" className="form-label"><strong>Ingresa la imagen del servicio</strong></label>
                        <input type="file" className="form-control" id="formfile" onChange={(e)=>setimagenServicio(e.target.files[0])}/>

                    </div>


                    {/* <div className="col-md-6">
                      <label>Cedula</label>
                      <input type="text" className="form-control required" />
                    </div> */}


                    {/* <div className="col-md-6">
                      <label>Telefono</label>
                      <input type="text" className="form-control required" />
                    </div> */}

                    {/* <div className="col-md-12 mt-4">
                      <label><strong>Tamaño</strong></label>

                      <select className='form-control' onChange={(e) => setTamañoSelect(e.target.value)}>

                        {
                            tamaño.map(tamaño => (
                                <option key={tamaño}>
                                    {tamaño}

                                </option>
                            ))


                        }
                        </select>
                    </div> */}

                  </div>
                    <br />
                  <button type="submit" className="btn btn btn-success">
                      
                    <span className="fa fa-save"></span> Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TablaServicio/>
    
    </>
    
    
      
   
  );
}
