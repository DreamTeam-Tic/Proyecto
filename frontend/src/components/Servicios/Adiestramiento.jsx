import React from 'react'
import adiestramiento2 from '../../assets/adiestramiento2.jpeg'
import "../../styles/adiestramiento.css"
import {Button} from 'react-bootstrap'  

function Adiestramiento() {
    return (
        <div>
            <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                        src={adiestramiento2} 
                        alt="Adiestramiento"
                        className="img-fluid rounded-start ml-4 mt-4 mb-4 imagen-services"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title ml-3 mt-3 mr=3">Adiestramiento</h5>
                        <p className="card-text ml-5 mr-5 texto-servicio">Tu compañero peludo posee comportamientos en su entorno familiar lo cual en ocasiones desearías que se comportara desiertas formas o características en diferentes entornos familiares o sitios públicos. La Fundación Pets For Always te ayuda en el adestramiento donde le enseñamos comportamientos básicos  o especializados de acuerdo al rango de edad.</p>
                        <ul className="card-text text-start ml-5 mr-5">
                            <li>Atención al llamado</li>
                            <li>Orden de tomar objetos y soltarlos.</li>
                            <li>Quedarse quieto y a la distancia</li>
                            <li>Posiciones del cuerpo (sentado, acostado, giros)</li>
                            <li>Quedarse quieto sin presencia del propietario</li>
                            <li>Andar junto al propietario</li>
                            <li>Obedecer órdenes a distancia</li>
                        </ul>
                        {/* <a href="/login" className="btn btn-primary">Go somewhere</a> */}
                        {/* <Card.Link href="/login">Más Info</Card.Link> */}
                        <Button 
                        href="/Formulario" 
                        variant="light"
                        >Más Info</Button> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Adiestramiento
