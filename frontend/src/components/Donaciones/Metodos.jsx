import imagen7 from '../../assets/p7.jpg'
import imagen8 from '../../assets/p8.jpg'
import imagen9 from '../../assets/p9.jpg'

import React from 'react';

import { Card } from 'react-bootstrap';


function Metodos() {
    return (
        
        <div className="container d-flex d-flex-row d-flex justify-content-between flex-wrap text-center mt-5">
            
            <Card style={{ width: '20rem' }}>
            
                <Card.Img variant="top" src={imagen7}/>
                    <Card.Body className="cardbody">
                    <Card.Title id="card-title">Aportes</Card.Title>
                    <Card.Text id="card-text text-left">
                    <p className="text-left">Para los aportes económicos contamos con los siguientes medios:</p>
                    <ol className="text-left">
                        <li>Cuenta ahorros Bancolombia # 11111111 <a className="text-decoration-none" href="https://www.paypal.com/co/signin">https://www.paypal.com/co/signin</a></li>
                        <li>Nequi / Daviplata: 22222222222 <a className="text-decoration-none" href="https://www.paypal.com/co/signin">https://www.paypal.com/co/signin</a></li>
                        <li>Paypal: <a className="text-decoration-none" href="https://www.paypal.com/co/home">https://www.paypal.com/co/home</a></li>
                
                    </ol> 

                    </Card.Text>
                    
                </Card.Body>

            </Card>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={imagen8} />
                <Card.Body className="cardbody">
                    <Card.Title>Donaciones en especie</Card.Title>
                    <Card.Text>
                        <p className="text-left">Puedes donar insumos como: alimentos, arena para gatos, bolsas biodegradables, juguetes, camas, 
                            accesorios y medicinas. Todo este tipo de donaciones puedes entregarlas en la fundación 42#962 calle siempre. 
                            Para mayor información ve al siguiente enlace: <a className="text-decoration-none" href="/contactanos">Contactanos</a></p>
                    </Card.Text>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={imagen9} />
                <Card.Body className="cardbody">
                    <Card.Title>Pago de veterinaria</Card.Title>
                    <Card.Text>
                    <p className="text-left">Algunas de nuestras mascotas requieren de tratamientos veterinarios y sería de mucha ayuda que nos puedas colaborar
                        con parte o la totalidad de los costos. Para mayor información ve al siguiente enlace: <a className="text-decoration-none" href="/contactanos">Contactanos</a>
                    </p>
                    </Card.Text>
                   
                </Card.Body>
            </Card>

        </div>

    )
}

export default Metodos


