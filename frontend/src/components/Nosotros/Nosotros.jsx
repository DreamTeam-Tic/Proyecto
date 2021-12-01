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
          <div className="col-md-4 mt-4 pl-2 " id="contImagenNosotros">
            <img
              src={nosotrosImg}
              id="imagenNosotros"
              className="img-fluid rounded-start "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">¿Quiénes Somos?</h5>
              <p className="card-text fs-5 text-justify ml-3 mr-5 mt-4 mb-2">
                Nuestra fundación se dedica al rescate y adopción de perros y gatos que carecen de un hogar y una familia. Pets For Alwasy les brinda a aquellos animalitos que no han contado con mucha suerte la oportunidad de encontrar una familia que esté dispuesta a brindarles todo el amor y cuidado que merecen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex d-flex-row d-flex justify-content-between flex-wrap text-center mt-5">
        <div className="card mb-3" id="card1">
          <div className="row g-0">
            <div className="col-md-5 mt-3" id="contImagenNosotros">
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
                  El objetivo de PetsForAlways es brindar un hogar a
                  cada animal que carezca de uno, poder generar un impacto en la
                  sociedad sobre el cuidado de los animales y brindar diversos
                  servicios en pro del bienestar de los animales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" id="card2">
          <div className="row g-0">
            <div className="col-md-5 mt-3 " id="contImagenNosotros">
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
                Pets For Always es una fundación dedicada a brindar una segunda oportunidad a los animales rescatados de la calle, abandonados y maltratados en Bogotá y generar conciencia colectiva sobre el cuidado de los animales.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" id="card3">
          <div className="row g-0">
            <div className="col-md-5 mt-3" id="contImagenNosotros">
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
                Para el 2026 esperamos haber rescatado y brindado un hogar a más de 10.000 animales en condiciones de calle. Además mejorar las instalaciones y tener la capacidad de mantener más animales en condiciones dignas para ellos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" id="card1">
          <div className="row g-0">
            <div className="col-md-4 ml-3 my-3" id="contImagenNosotros">
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
                <p className="card-text fs-6 text-justify ml-3 mr-3 mt-4">
                  Desde que adoptamos a Max tengo un amigo con el que siempre puedo jugar y vivir muchas aventuras. Él es muy divertido, le encanta jugar conmigo todo el tiempo y siempre estamos juntos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" id="card2">
          <div className="row g-0">
            <div className="col-md-4 ml-3 mt-3" id="contImagenNosotros">
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
            <div className="col-md-4 ml-3 mt-3" id="contImagenNosotros">
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
                Adoptar a Kiara fue una gran ayuda para mitigar mi ansiedad, de cierta forma la compañia de esta gatica me ha ayudado mucho y ha hecho de mi día a día sea más motivante.
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
