import React from 'react'
import guarderia from '../../assets/guarderia.jpeg'
import "../../styles/adiestramiento.css"
import {Button} from 'react-bootstrap'

function Guarderia() {
    return (
        
        <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                        src={guarderia} 
                        alt="Guarderia"
                        className="img-fluid rounded-start ml-4 mt-4 mb-4 imagen-services"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title ml-3 mt-3 mr=3">Guardería</h5>
                        <p className="card-text ml-5 mr-5 texto-servicio">La Fundación Pets For Always ofrece el servicio de guardería para tu familiar peludo donde se especializa en el cuidado desde su raza, peso y características de comportamiento.</p>
                        <ul className="card-text text-start ml-5 mr-5">
                            <li>Servicio de guarderia Luneas a Viernes.</li>
                            <li>Guardería Fines de semana.</li>
                            <li>Tu amigo fiel contará con trato cálido y socializara con más amigos.</li>
                            <li>Disponibilidad para la permanencia diurna o nocturna de todas las mascotas.</li>
                            <li>Guardería para gatos,perros. Peluquería canina</li>
                        </ul>
                        <Button 
                        href="/login" 
                        variant="light"
                        >Más Info</Button> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Guarderia


