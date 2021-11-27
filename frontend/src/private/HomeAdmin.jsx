import React from 'react'
import { Button } from 'react-bootstrap'

function HomeAdmin() {

    const nombre = sessionStorage.getItem('nombre')

    const HandleLogout = () => {

        sessionStorage.clear()
        window.location.href = "/"
    }


    return (
        <div className="mt-5 ">
            <h1>Hola {nombre}</h1>
            <div className="container d-flex justify-content-evendly justify-content-center">
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
        </div>
    )
}

export default HomeAdmin
