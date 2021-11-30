// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Axios from 'axios'
import '../../styles/Mascotas.css'


export default function Album() {

  let [tam, setTamSelect] =useState([])
 
  useEffect(() => {
    obtenerMascotas()
}, [])

  const obtenerMascotas = async () => {

    // const id = sessionStorage.getItem('_id')
    // const token = sessionStorage.getItem('token')
    const res = await Axios.get('/mascota/list')
    const Mlist = res.data
    //console.log(Mlist[0].nombre)
    setTamSelect(Mlist)

}
const imgMascota = tam.map((mascotas)=>({
  imagenMascota: tam.imagenMascota
}))
console.log(imgMascota)

const cards = tam;
const theme = createTheme();


    return (
        <div className="container mt-5" >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  
                  {console.log(card.nombre)}
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                     // pt:'20.23%',
                      
                    }}
                    //"http://localhost:3000/imagenMascota_1637805604995_luigi.jpeg"
                    //image={`${a}${card.imagenMascota}`}
                    image={card.imagenMascota}
                    alt="random"
                    style={{height:"200px"}}
                  />
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                      {card.nombre}
                    </Typography>
                    <Typography>
                      {card.raza}
                      <br/>

                      {card.tamaño}
                    </Typography>
                  </CardContent>
                  <CardActions className="justify-content-center">
                    <Button size="large" href="/formularioadopta">Adoptar!</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
    
    </div> 
    );
}