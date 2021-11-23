import React from 'react'
import '../../styles/info.css'
import imgInfo from '../../assets/imgInfo.jpg'
function SectionInfo() {
    return (
        //aqui debe estar tu componente
        <div className="container mt-4">
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imgInfo} id="imagenInfo" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fs-3">Fundacion ejemplo</h5>
        <p className="card-text fs-4 text-start ml-5 mt-4" >
            Informacion de la fundacion <br />
            Direccion: 42#962 calle siempre <br />
            Telefono: 322 455 6192  <br />
            Elmail: fundacion@gmail.com <br />
            </p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default SectionInfo
