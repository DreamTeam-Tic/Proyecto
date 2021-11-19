// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import styles from '../../styles/tipcard.css'
import tip1 from '../../assets/tip1.jpg';
import tip2 from '../../assets/tip2.jpg';
import tip3 from '../../assets/tip3.jpg';
import tip4 from '../../assets/tip4.jpg';


import React from 'react';

import { Card, Button } from 'react-bootstrap';


function SectionTips() {
    return (
        <div className="container d-flex d-flex-row d-flex justify-content-between flex-wrap text-center mt-5">
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={tip1} />

                <Card.Body className="cardbody">
                    <Card.Title id="card-title">NO LO DEJES SOLO</Card.Title>
                    <Card.Text id="card-text">
                        <span className="fw-bold">Nunca dejes solo a tu perro.</span> en ningún lugar, mucho menos en un coche durante las horas centrales del día. Si no te queda más remedio y debes dejarlo solo en casa, procura que no sea demasiado tiempo.
                    </Card.Text>
                    <a href="https://www.trueinstinct.com/es/consejos-perros-gatos/8-trucos-para-aprender-cuidar-perros-en-casa-cuida-tu-perro-como-se-merece">
                        <Button className="card-body_button" variant="primary">Tip Completo</Button>
                    </a>
                </Card.Body>

            </Card>

            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={tip2} />
                <Card.Body className="cardbody">
                    <Card.Title>IDENTIFICA A TU MASCOTA</Card.Title>
                    <Card.Text>
                        <span className="fw-bold">Chapa de identificación.</span> En el collar o el arnés que le pongas a tu perro puedes incluir una chapa metálica con su nombre y tu número de teléfono.
                    </Card.Text>
                    <a href="https://www.trueinstinct.com/es/consejos-perros-gatos/8-trucos-para-aprender-cuidar-perros-en-casa-cuida-tu-perro-como-se-merece">
                        <Button className="card-body_button" variant="primary">Tip Completo</Button>
                    </a>
                </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={tip3} />
                <Card.Body className="cardbody">
                    <Card.Title>NO DEJES OBJETOS PELIGROSOS A SU ALCANCE</Card.Title>
                    <Card.Text>
                        Podríamos decir que una mascota es como un <span className="fw-bold">niño pequeño.</span> Tiene la necesidad de explorarlo todo y llevárselo a la boca.
                    </Card.Text>
                    <a href="https://www.trueinstinct.com/es/consejos-perros-gatos/8-trucos-para-aprender-cuidar-perros-en-casa-cuida-tu-perro-como-se-merece">
                        <Button className="card-body_button" variant="primary">Tip Completo</Button>
                    </a>
                </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={tip4} />
                <Card.Body className="cardbody">
                    <Card.Title>OFRÉCELE UNA ALIMENTACIÓN DE CALIDAD</Card.Title>
                    <Card.Text>
                        <span className="fw-bold">Es fundamental para tu gato estar bien alimentado.</span>La norma número uno para cuidar gatos en casa es ofrecerle una dieta variada y saludable.
                    </Card.Text>
                    <a href="https://www.trueinstinct.com/es/consejos-perros-gatos/8-trucos-para-aprender-cuidar-perros-en-casa-cuida-tu-perro-como-se-merece">
                        <Button className="card-body_button" variant="primary">Tip Completo</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>

    )
}

export default SectionTips
