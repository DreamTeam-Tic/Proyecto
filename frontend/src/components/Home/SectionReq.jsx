import React from "react";
import olax2 from "../../assets/img2.jpg";
import "../../styles/sectionreq.css";

function SectionReq() {
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
              <h5 className="card-title fs-3">Requisitos de adopción</h5>
              
                <div className="card-text fs-4 text-left text-start ml-5" id="text">
                  <ol>
                    <li>Deseos de tener una mascota.</li>
                    <li>El adoptante debe ser mayor de edad.</li>
                    <li>Mostrar el entorno en el que estara.</li>
                    <li>Capacidad economica para cubrir los gastos.</li>
                    <li>Tiempo para dedicarle a su mascota.</li>
                    <li>Llenar formulario de adopción. Compromiso a esterilización</li>
                  </ol>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionReq;
