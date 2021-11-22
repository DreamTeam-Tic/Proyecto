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
    <div className="container mt-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={nosotrosImg}
              id="imagen"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">Quienes Somos</h5>
              <p className="card-text fs-4 text-start ml-5 mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                veritatis ab sed necessitatibus, totam possimus aspernatur nulla
                ex odit ad nesciunt sint, asperiores placeat. Distinctio maxime
                perspiciatis perferendis aut reiciendis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex d-flex-row d-flex justify-content-between flex-wrap text-center mt-5">
        <div className="card mb-3" id="card1">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={objetivo}
                id="imagen"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-2">Objetivo General</h5>
                <p className="card-text fs-6 text-start ml-5 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat pariatur sint blanditiis ipsa asperiores alias
                  deleniti repellendus ea odit eos vitae debitis minima quisquam
                  culpa nesciunt obcaecati, eligendi veritatis laboriosam!{" "}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" id="card2">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={mision}
                id="imagen"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-2">Misión</h5>
                <p className="card-text fs-6 text-start ml-5 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum tempora neque repellat nemo possimus! Cupiditate qui,
                  fugit, repellendus asperiores illo impedit inventore eveniet
                  quo suscipit necessitatibus sint dignissimos laborum
                  veritatis. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" id="card3">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={vision}
                id="imagen"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title fs-2">Visión</h5>
                <p className="card-text fs-6 text-start ml-5 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt architecto repellat dolorum illo provident? Quae,
                  voluptatibus sed inventore dolorum dignissimos eum consectetur
                  tempora accusantium nobis doloribus illum animi dolor
                  similique? <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" id="card1">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={his1}
                id="imagen"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-2">Historia Adopción</h5>
                <p className="card-text fs-6 text-start ml-5 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  necessitatibus ullam facilis inventore at, unde officia quos
                  repellat animi fugit voluptate ipsum? Tempore velit ratione
                  consectetur quo, placeat quisquam aliquam! <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" id="card2">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={his2}
                id="imagen"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-2">Historia Adopción</h5>
                <p className="card-text fs-6 text-start ml-5 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  beatae, blanditiis aut unde magnam, eligendi placeat facilis
                  harum ad exercitationem, earum officiis accusantium culpa
                  perferendis nisi non modi saepe! Voluptatibus! <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" id="card3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={his3}
                id="imagen"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-2">Historia Adopción</h5>
                <p className="card-text fs-6 text-start ml-5 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda vero maxime ducimus facilis autem veritatis
                  explicabo reprehenderit quidem cupiditate dolorem iure eum
                  facere, esse quaerat in, sapiente accusantium, minus
                  doloribus! <br />
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
