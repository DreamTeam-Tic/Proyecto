import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Axios from 'axios';
import {useState} from 'react';

function Formulario() {
   

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [numero, setNumero] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [observacion, setObservacion] = useState('')

    const enviar = async (event)=>{
        
        event.preventDefault();
        const consumidor = {nombre, apellido, correo, direccion, numero, ciudad, observacion}
        const res = await Axios.post('/consumidor/add', consumidor);
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
      
            window.location.href='/servicios'
            
      
      
      
      
          
        };


    }



    return (
        
        <div className="container">
        <Form className='container border border-5 mt-4' onSubmit={enviar}>
            <h3 className="mt-3">Ingresa tus datos</h3>

            
            <Form.Group className='mt-3'>
                <Row>
                    <Col>
                    <Form.Control placeholder="Nombres" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Apellidos" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </Col>
                </Row>
            </Form.Group>
           
            <Form.Group>
            <Row className="my-4">
                    <Col>
                    <Form.Control type="Email" placeholder="Ingresar email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </Col>

                    <Col>
                    <Form.Control placeholder="Ingrese Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
                    </Col>
            </Row>
            </Form.Group>
            
            <Form.Group>
            <Row className="my-4">
                <Col>
                   <Form.Control placeholder="Ingrese su teléfono" value={numero} onChange={(e) => setNumero(e.target.value)} />
                </Col>

                <Col>
                <Form.Control placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                </Col>
            </Row>
                </Form.Group>

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


                <Form.Group>
                    <label htmlFor="exampleFormControlTextarea1">Detalla tu solicitud..</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={observacion} onChange={(e) => setObservacion(e.target.value)}></textarea>
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

export default Formulario
