import React from 'react'
import olax2 from '../../assets/sufundacion.jpg';
import "../../styles/sectionreq.css";
import "../..//styles/ParteMedio.css"


function ParteMedio() {
    return (
      //aqui debe estar tu componente
      <div className="container mt-4">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4" id="imgContainer">
              <img
                src={olax2}
                id="imgsection"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body align-center">
                <h5 className="card-title fs-3"><br/>Nuestra Fundacion</h5>
                <p className="card-text fs-4 text-left">
                  <div className="text-start ml-5" id="text">
                    <p>
                    
                        <br/>Si tienes ganas de saber sobre nuestro hogar de mascotas, puedes encontrarnos 
                        en la Direccion: 42#962 calle siempre, al lado de la iglesia de urabanes en la ciudad de barranquilla. <br/>
                        </p>
                    
                    <ol className="mt-5">
                        <li>Direccion: 42#962 calle siempre</li>
                        <li>322 455 6192</li>
                        <li>fundacion@gmail.com</li>
                        <li>Siguenos en Instragram como: adopta_feliz o en facebook como adoptamoscompañeros</li>
                    </ol>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ParteMedio;