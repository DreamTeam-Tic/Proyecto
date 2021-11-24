import React from 'react'
import CrearMascota from './CrearMascota'
import CrearServicio from './CrearServicio'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function HomeAdmin() {

    const nombre = sessionStorage.getItem('nombre')

    const HandleLogout = () => {

        sessionStorage.clear()
        window.location.href = "/"
    }


    return (
        <div>
            <h1>Hola {nombre}</h1>
            <Button
                className="btn btn-primary"
                href="/crearmascota"
            >
                Crear Mascota
            </Button>
            <Button
                className="btn btn-primary"
                href="/crearservicio"
            >
                Crear Servicio
            </Button>

            <Button
                className="btn btn-primary"
                onClick={HandleLogout}
            >
                Cerrar Sesión
            </Button>


        </div>
    )
}

export default HomeAdmin
