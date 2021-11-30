import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Axios from 'axios';
import {useState} from 'react';

function FormularioAdopta() {
   
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [numero, setNumero] = useState('')
  
    const enviar = async (event)=>{
        
        event.preventDefault();
        const adoptante = {nombre, apellido, correo, numero}
        const res = await Axios.post('/adoptante/add', adoptante);
        console.log(res);
        
        if (res.status!== 200) {

            
            Swal.fire({
            
              icon: 'error',
              title: 'Datos no validos',
              showConfirmButton: false,
              timer: 1500
              
            })
               
            
          }else {
            
            Swal.fire({
            
                icon: 'success',
                title: 'Datos enviados correctamente',
                showConfirmButton: false,
                timer: 1500
                
              })
      
            window.location.href='/FormularioAdopta'
            

          
        };


    }

    return (
    <div>
            
        <Form className='container border border-5 mt-4' onSubmit={enviar}>
            <h3 className="mt-3">Formulario de Adopción</h3>

            
            <Form.Group className='mt-3'>
                <Row>
                    <Col>
                    <Form.Control placeholder="Nombres" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Apellidos" required value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </Col>
                </Row>
            </Form.Group>
           
            <Form.Group>
                <Row className="my-4">
                        <Col>
                        <Form.Control type="Email" required placeholder="Ingresar email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        </Col>
                </Row>
            </Form.Group>
            
            <Form.Group>
                <Row className="my-4">
                    <Col>
                    <Form.Control placeholder="Ingrese su teléfono" required value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </Col>
                </Row>
            </Form.Group>

                <Button 
                className ='mt-4 mb-4' 
                variant ="primary" 
                type = "submit"
                
                >
                    Enviar datos
                </Button>  
        </Form>
    </div>
    )
}

export default FormularioAdopta
