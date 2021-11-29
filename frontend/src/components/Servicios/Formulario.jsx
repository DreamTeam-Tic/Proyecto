import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

function Formulario() {
    const enviar = async (e) => {
        e.preventDefault();
        
        Swal.fire({

            icon: 'success',
            title: 'Datos enviados',
            showConfirmButton: false,
            timer: 1500
            
    
    })
    // e.target.reset();
}

    return (
        <div>
            
        <Form className='container border border-5 mt-4'>
            <h3 className="mt-3">Ingresa tus datos</h3>

            
            <Form className='mt-3'>
                <Row>
                    <Col>
                    <Form.Control placeholder="Nombres" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Apellidos" />
                    </Col>
                </Row>
            </Form>
           
            <Form>
            <Row className="my-4">
                    <Col>
                    <Form.Control type="Email" placeholder="Ingresar email" />
                    </Col>

                    <Col>
                    <Form.Control placeholder="Ingrese Dirección" />
                    </Col>
            </Row>
            </Form>
            
            <Form>
            <Row className="my-4">
                <Col>
                   <Form.Control placeholder="Ingrese su teléfono" />
                </Col>

                <Col>
                <Form.Control placeholder="Ciudad" />
                </Col>
            </Row>
            </Form>

                <Row className="mb-3">   
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Elige tu servicio</Form.Label>
                    <Form.Select defaultValue="Elige...">
                        <option>Elige...</option>
                        <option>Guarderia</option>
                        <option>Adiestramiento</option>
                    </Form.Select>
                    </Form.Group>

                </Row>


                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Detalla tu solicitud..</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <Button 
                className ='mt-4 mb-4' 
                variant ="primary" 
                type = "submit"
                onClick ={enviar} 
                >
                    Enviar datos
                </Button>  
            </Form>
        </div>
    )
}

export default Formulario
