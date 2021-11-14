import React from 'react'
import olax2 from '../../assets/ola.jpg'
import '../../styles/sectionreq.css'

function SectionReq() {
    return (
        //aqui debe estar tu componente
        <div className= "containerx">
            {/* <h1 id= "tituloextra">Por si se necesita</h1> */}

                <div className="containerimagen">
                        <img src={olax2} alt="" className="imgsection"/>
                </div>

            <div className="ContainerTexto">
                <ul className="texto text-center">
                    <span id= "subtitulo">Requesitos de adopción:</span><br/><br/>
                    <li>Deseos de tener una mascota.</li>
                    <li>El adoptante debe ser mayor de edad.</li>
                    <li>Mostrar el entorno en el que estara.</li>
                    <li>Capacidad economica para cubrir los gastos.</li>
                    <li>Tiempo para dedicarle a su mascota.</li>
                    <li>Llenar formulario de adopción.</li>
                    <li>Compromiso a esterilización.</li>
                    
                </ul>
            </div>
                    
        </div>
    )
}

export default SectionReq


