import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import Axios from 'axios'
import MaterialTable from 'material-table'

export default function TablaServicio() {


    const [servicios, setServicios] = useState([])
    const [idServicio, setIdServicio] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // const handleShow = () => setShow(true);
    useEffect(() => {

        obtenerServicios()
        

    }, [])


    const obtenerServicios = async () => {

        const res = await Axios.get('/servicio/list')



        setServicios(res.data)
        // setNombre(res.data.nombre)
        // setTamañoSelect(res.data.tamaño)
        // setRaza(res.data.raza)
        // setimagenMascota(res.data.imagenMascota)

    }

    const editarServicio = async (idParam) => {

        setShow(true)
        const id = idParam
        const res = await Axios.get('/servicio/list/' + id)

        console.log(res.data)
        setIdServicio(res.data._id)
        setNombre(res.data.nombre)
        setDescripcion(res.data.descripcion)



    }


    const actualizar = async (e) => {
        e.preventDefault();

        const id = idServicio
        const servicio = {

            idServicio,
            nombre,
            descripcion,


        }

        const res = await Axios.put('servicio/update/' + id, servicio)

        const mensaje = res.status
        console.log(mensaje)

        obtenerServicios()

        Swal.fire({
            icon: 'success',
            title: "Servicio Actualizado",
            showConfirmButton: false,
            timer: 1500
        })

        setShow(false)
    }

    const eliminar = async (id) => {
        // setShow(true)
        const res = await Axios.delete('/servicio/remove/' + id)

        const mensaje = res.data.mensaje

        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })

        obtenerServicios()
    }


    const data = servicios.map((servicios) => ({

        id: servicios._id,
        nombre: servicios.nombre,
        descripcion: servicios.descripcion,


    }))
    return (

        <div className="container">
            <br />
            <MaterialTable
                title="Servicios"
                columns={[

                    { title: 'ID', field: 'id' },
                    { title: 'NOMBRE', field: 'nombre' },
                    { title: 'DESCRIPCION', field: 'descripcion' },


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
                        onClick: (event, rowData) => editarServicio(rowData.id)



                    }
                ]}
            />

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-7  mx-auto">
                                <div className="card">
                                    <div className="container text-center fa-5x">
                                        <i className="fas fa-plus-circle"></i>
                                    </div>
                                    <div className="card-header bg-light text-center">
                                        <h4>Editar Servicio</h4>
                                    </div>
                                    <div className="card-body">
                                        <form >
                                            <div className="row">

                                                <div className="col-md-6">
                                                    <label><strong>Nombre</strong></label>
                                                    <input type="text" className="form-control required" placeholder="Escribe el nombre del servicio" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                                                </div>

                                                <div className="col-md-6">
                                                    <label><strong>Descripcion</strong></label>
                                                    <input type="text" className="form-control required" placeholder="Escribe la descripción del servicios" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
                                                </div>

                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="formFile" className="form-label"><strong>Ingresa la imagen del servicio</strong></label>
                                                    <input type="file" className="form-control" id="formfile" />

                                                </div>

                                            </div>


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