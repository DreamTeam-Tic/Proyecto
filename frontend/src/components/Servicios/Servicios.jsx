import React from 'react'
import Video from '../Servicios/Video'
import Guarderia from '../Servicios/Guarderia'
import Adiestramiento from '../Servicios/Adiestramiento'

function Servicios() {
    return (
        <div>
            {/* <h1>Servicio</h1> */}
            <Video/>
            <div className="container d-flex justify-content-center">
            <h4 className='text-left my-4'><strong> Contamos con los siguientes servicios</strong></h4>
            </div>
            <Guarderia/>
            <Adiestramiento/>
        </div>
    )
}

export default Servicios
