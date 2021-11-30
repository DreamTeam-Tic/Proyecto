import React, { useState, useEffect } from 'react'
import TablaMascota from './TablaMascota'

import Swal from 'sweetalert2'
import Axios from 'axios'
export default function CrearMascota() {


  const [nombre,setNombre]=useState('')
  const[tamaño,setTamaño]=useState([])
  const[tamañoSelect,setTamañoSelect]=useState([])
  const[raza,setRaza]=useState('')
  const [baseImage, setBaseImage] = useState("");
//   const[imagenEscogida,setimagenEscogida]=useState(false);
  



  useEffect(() => {
    setTamaño(['Pequeño', 'Mediano', 'Grande'])
    setTamañoSelect('Pequeño')

  },[])
      
  const setimagenMascota = async (e) =>{
        
    const file= e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    setBaseImage(base64)
    
}
const convertBase64=(file)=>{
  return new Promise ((resolve, reject)=>{

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () =>{
          resolve(fileReader.result)
      }
      fileReader.oneerror = (error)=>{
          reject(error)
      }
  })
}

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.oneerror = (error) => {
        reject(error)
      }
    })
  }


  const guardar = async (e) => {
    e.preventDefault()
    const mascota = {
      nombre,
      raza,
      tamaño: tamañoSelect,
      imagenMascota: baseImage

    }

    if (nombre === "") {

      Swal.fire({
        icon: 'error',
        title: "Debe escribir el nombre de la mascota",
        showConfirmButton: false,
        timer: 1500
      })

    } else if (raza === "") {

      Swal.fire({
        icon: 'error',
        title: "Debe escribir la raza de la mascota",
        showConfirmButton: false,
        timer: 1500
      })

    } else {

      const respuesta = await Axios.post('/mascota/add', mascota)

      console.log(respuesta)




      Swal.fire({
        icon: 'success',
        title: "Mascota creada correctamente",
        showConfirmButton: false,
        timer: 1500
      })

      e.target.reset();
      setNombre("");
      setRaza("");
      // setimagenMascota("");

    }
  }


  return (

    <>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-paw"></i>
              </div>
              <div className="card-header bg-light text-center">
                <h4>Crear Mascota</h4>
              </div>
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">

                    <div className="col-md-6">
                      <label><strong>Nombre</strong></label>
                      <input type="text" className="form-control required" placeholder="Escribe el nombre de la mascota" onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                      <label><strong>Raza</strong></label>
                      <input type="text" className="form-control required" placeholder="Escribe la raza de la mascota" onChange={(e) => setRaza(e.target.value)} />
                    </div>
                    <label className="mt-3"><strong>Tamaño</strong></label>
                    <div className="col-md-12 form-floating">

                      <select className='form-select pb-2'
                        id="flotingSelectGrid"
                        aria-label="Floating label select example"
                        onChange={(e) => setTamañoSelect(e.target.value)}>

                        {
                          tamaño.map(tamaño => (
                            <option key={tamaño}>
                              {tamaño}

                            </option>
                          ))


                        }
                      </select>
                      <label htmlFor="flotingSelectGrid">Escoge una Opción</label>
                    </div>


                    <div className="mb-3 mt-3">
                        <label htmlFor="formFile" className="form-label"><strong>Ingresa la imagen de la mascota</strong></label>
                        <input type="file" className="form-control" id="formfile" accept=".jpg, .jpeg, .png"  onChange={(e) => {setimagenMascota(e);}} />

                    </div>

                  </div>
                    <br />
                    <img  classname="rounded" src={baseImage} alt="" width="400px"/>
                    <br />
                  <button type="submit" className="btn btn btn-success">

                    <span className="fa fa-save"></span> Guardar
                  </button>
                  <br />
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TablaMascota />

    </>


  );
}
