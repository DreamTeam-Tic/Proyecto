import React from "react";
import "../../styles/nosotros.css";
import nosotrosImg from "../../assets/NosotrosImg.jpg";
import his1 from "../../assets/historiaAdopt1.jpg";
import his2 from "../../assets/historiaAdopt2.jpg";
import his3 from "../../assets/historiaAdopt3.jpg";
import mision from "../../assets/mision.png";
import vision from "../../assets/vision.png";
import objetivo from "../../assets/objetivo.png";

function Nosotros() {
  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 mt-4">
            <img
              src={nosotrosImg}
              id="imagenNosotros"
              className="img-fluid rounded-start "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">Quienes Somos</h5>
              <p className="card-text fs-5 text-justify ml-5 mr-5 mt-4 mb-2">
                Nosotros como fundación nos dedicamos al rescate y adopción de perros y gatos que carecen de un hogar y una familia. Pets For Alwasy les brinda a aquellos animalitos que no han contado con mucha suerte la oportunidad de encontrar una familia que esté dispuesta a brindarles todo el amor y cuidado que merecen.
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex d-flex-row d-flex justify-content-between flex-wrap text-center mt-5">
        <div className="card mb-3" id="card1">
          <div className="row g-0">
            <div className="col-md-5 mt-3">
              <img
                src={objetivo}
                id="imagen_historia_adopcion"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-3">Objetivo General</h5>
                <p className="card-text fs-6 text-justify ml-2 mt-4 mr-2" >
                  El objetivo de PetsForAlways se establece en brindar un hogar a
                  cada animal que carezca de uno, poder generar un impacto en la
                  sociedad sobre el cuidado de los animales, y brindar diversos
                  servicios en pro de el bienestar de los animales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" id="card2">
          <div className="row g-0">
            <div className="col-md-5 mt-3">
              <img
                src={mision}
                id="imagen_historia_adopcion"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-3">Misión</h5>
                <p className="card-text fs-6 text-justify ml-2 mt-4 mr-2">
                  Pets For Always busca brindar un hogar a cada perro y gato que necesiten de uno y generar consiencia colectiva sobre el cuidado de los animales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" id="card3">
          <div className="row g-0">
            <div className="col-md-5 mt-3">
              <img
                src={vision}
                id="imagen_historia_adopcion"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-3">Visión</h5>
                <p className="card-text fs-6 text-justify ml-2 mr-2 mt-4">
                 Para el 2026 esperamos haber rescatado, y haber brindado un hogar a más de 10.000 animales en condiciones de calle. Además haber mejorado las instalaciones y tener la capacidad de mantener más animales en condiciones dignas para ellos. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" id="card1">
          <div className="row g-0">
            <div className="col-md-4 ml-3 mt-3">
              <img
                src={his1}
                id="imagen_historia_adopcion"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-4 ml-3">Historia Adopción</h5>
                <p className="card-text fs-6 text-justify ml-3 mr-3 mt-2">
                  Desde que adoptamos a Max tengo un amigo con el que siempre puedo jugar y vivir muchas aventuras.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" id="card2">
          <div className="row g-0">
            <div className="col-md-4 ml-3 mt-3">
              <img
                src={his2}
                id="imagen_historia_adopcion"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-4 ml-3">Historia Adopción</h5>
                <p className="card-text fs-6 text-justify ml-3 mr-3 mt-4">
                  Haber adoptado este cachorro trajo a nuestras vidas gran felicidad y un consuelo cuando más lo necesitabamos. Estamos alegres de poder ser la nueva familia de Milo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" id="card3">
          <div className="row g-0">
            <div className="col-md-4 ml-3 mt-3">
              <img
                src={his3}
                id="imagen_historia_adopcion"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-4 ml-3">Historia Adopción</h5>
                <p className="card-text fs-6 text-justify ml-3 mr-3 mt-4">
                  Adoptar a Kiara fue una gran ayuda para mi ansiedad, de cierta forma la compañia de esta gatica me ayudado mucho y ha hecho de mi dia a dia sea un tanto más especial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
