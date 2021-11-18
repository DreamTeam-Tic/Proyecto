import React from 'react'
import '../../styles/info.css'
import { Card, Button } from 'react-bootstrap';
import img2 from '../../assets/img2.jpg'
function SectionInfo() {
    return (
        //aqui debe estar tu componente
        <div className="container">
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img2} classNameName="imagen" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8" id="Texto">
      <div className="card-body">
        <h5 className="card-title">Fundacion ejemplo</h5>
        <p className="card-text">
            Informacion de la fundacion <br /><br />
            Direccion: 42#962 calle siempre viva <br /><br />
            telefono: 322 455 6192 <br /><br />
            Elmail: fundacion@gmail.com <br /><br />
            </p>
        
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        {/* <Card className="ContainerP" class="container"> 
            <Card className="carta">
            <div className="ContainerImg">     
                <Card.Img className="imagen" class="w-30" src={img1} />   
            </div>    
            </Card>  
            <Card className="textcarta">        
             <Card.Body class="m-0 row justify-content-center" className="cardbody" >
                    <Card.Text className="Texto" class="col-auto p-5 text-center">
                       asdasdas 
                    </Card.Text>
                </Card.Body>     
            </Card> 
        </Card> */}
        </div>
    )
}

export default SectionInfo
