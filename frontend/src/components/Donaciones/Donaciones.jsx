import React from 'react'
import CarruselDonaciones from './CarruselDonaciones'
import Razones from './Razones'
import Metodos from './Metodos'

function Donaciones() {
    return (
        <div>
            
            <CarruselDonaciones className="mt-3"/>
            <Razones className="mt-3"/>
            <div className="container"><h4 className="text-left mt-5"><strong>Tus donaciones</strong></h4></div>
            <Metodos className="mt-3"/>
            
        </div>
    )
}

export default Donaciones
