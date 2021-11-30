import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import Axios from 'axios'
import MaterialTable from 'material-table'

export default function TablaMascota() {


    const [mascotas, setMascotas] = useState([])
    const [idMascota, setIdMascota]= useState('')
    const [nombre, setNombre] = useState('')
    const [tamaño, setTamaño] = useState([])
    const [tamañoSelect, setTamañoSelect] = useState([])
    const [raza, setRaza] = useState('')
    


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {

        obtenerMascotas()
        setTamaño(['Pequeño','Mediano','Grande'])
        

    }, [])


    const obtenerMascotas = async () => {

        const res = await Axios.get('/mascota/list')

        


        setMascotas(res.data)
        // setNombre(res.data.nombre)
        // setTamañoSelect(res.data.tamaño)
        // setRaza(res.data.raza)
        // setimagenMascota(res.data.imagenMascota)

    }

    const editarMascota = async(idParam)=>{

        setShow(true)
        const id = idParam
        const res = await Axios.get('/mascota/list/'+id)

        console.log(res.data)
        setIdMascota(res.data._id)
        setNombre(res.data.nombre)
        setTamañoSelect(res.data.tamaño)
        setRaza(res.data.raza)
        //setimagenMascota(res.data.imagenMascota)


    }

    const actualizar = async(e)=>{
        e.preventDefault();

        const id = idMascota
        const mascota= {

            idMascota,
            nombre,
            raza,
            tamaño: tamañoSelect

        }

        const res = await Axios.put('mascota/update/'+id, mascota)

        const mensaje = res.status
        console.log(mensaje)

        obtenerMascotas()

        Swal.fire({
            icon:'success',
            title:"Mascota Actualizada",
            showConfirmButton:false,
            timer:1500
          })

        setShow(false)
    }

    const eliminar = async(id)=>{
        // setShow(true)
        const res = await Axios.delete('/mascota/remove/'+id)

        const mensaje = res.data.mensaje

        Swal.fire({
            icon:'success',
            title:mensaje,
            showConfirmButton:false,
            timer:1500
          })

        obtenerMascotas()
    }


    const data = mascotas.map((mascotas) => ({

        id: mascotas._id,
        nombre: mascotas.nombre,
        raza: mascotas.raza,
        tamaño: mascotas.tamaño,
        imagenMascota: mascotas.imagenMascota

    }))
    return (

        <div className="container">
            <br />
            <MaterialTable
                title="Mascotas"
                columns={[

                    { title: 'ID', field: 'id' },
                    { title: 'NOMBRE', field: 'nombre' },
                    { title: 'RAZA', field: 'raza' },
                    { title: 'TAMAÑO', field: 'tamaño' },
                    // { title: 'IMAGEN', field: 'imagenMascota' },


                ]}
                data={data}
                options={{
                    search: true,
                    actionsColumnIndex: -1,
                    initialPage: 1

                }}

                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar',
                        onClick: (event, rowData) => eliminar(rowData.id)

                    },

                    {
                        icon: 'edit',
                        tooltip: 'editar',
                        onClick: (event, rowData) => editarMascota(rowData.id)



                    }
                ]}
            />

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar persona</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-7  mx-auto">
                                <div className="card">
                                    <div className="container text-center fa-5x">
                                        <i className="fas fa-paw"></i>
                                    </div>
                                    <div className="card-header bg-light text-center">
                                        <h4>Editar Mascota</h4>
                                    </div>
                                    <div className="card-body">
                                        <form >
                                            <div className="row">

                                                <div className="col-md-6">
                                                    <label><strong>Nombre</strong></label>
                                                    <input type="text" className="form-control required" placeholder="Escribe el nombre de la mascota" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label><strong>Raza</strong></label>
                                                    <input type="text" className="form-control required" placeholder="Escribe la raza de la mascota" onChange={(e) => setRaza(e.target.value)} value={raza} />
                                                </div>
                                                <label className="mt-3"><strong>Tamaño</strong></label>
                                                <div className="col-md-12 form-floating">

                                                    <select className='form-select pb-2'
                                                        id="flotingSelectGrid"
                                                        aria-label="Floating label select example"
                                                        onChange={(e) => setTamañoSelect(e.target.value)} value={tamañoSelect}>

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
                                                    <input type="file" className="form-control" id="formfile"/>

                                                </div>

                                            </div>
                                            <br />
                                            {/* <button type="submit" className="btn btn btn-success">

                                                <span className="fa fa-save"></span> Guardar
                                            </button> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={actualizar} >
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>




    )


}