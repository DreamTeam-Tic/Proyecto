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
                    <ol>
                        <br/><br/>Nosotros somos una fundacion que esta dispuesta a rescatar animales de la calle tanto como perros y gatos, les buscamos una familia
                        cariñosa, esto no lo hacemos tan sencillo, la razón de esto es que queremos que la mascota que se vaya a su nuevo hogar sea muy feliz
                        y no vaya a ser abandonada por sus futuros dueños, lo que esperamos en nuestra fundacion es que lleguen  las personas de buen corazón con el
                        animo de obtener una mascota en su vida.<br/>
                        <br/>
                        <li>Calle 95 sur #72 L-34</li>
                        <li>3068743696</li>
                        <li>adoptafeliz@gmail.com</li>
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