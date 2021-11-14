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


import React from 'react';

import { Card, Button } from 'react-bootstrap';


function SectionTips() {
    return (
        <div className="container d-flex d-flex-row d-flex justify-content-between flex-wrap text-center mt-5">
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={tip1} />
                
                <Card.Body className="cardbody">
                    <Card.Title id="card-title">Tip 1</Card.Title>
                    <Card.Text id="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button className="card-body_button" variant="primary">Go somewhere</Button>
                </Card.Body>
                
            </Card>

            <Card style={{ width: '16rem'}}>
                <Card.Img variant="top" src={tip2} />
                <Card.Body className="cardbody">
                    <Card.Title>Tip 2</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={tip3} />
                <Card.Body className="cardbody">
                    <Card.Title>Tip 3</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={tip3} />
                <Card.Body className="cardbody">
                    <Card.Title>Tip 4</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

    )
}

export default SectionTips
