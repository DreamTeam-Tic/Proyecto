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

    const res = await Axios.get('/mascota/list')
    const Mlist = res.data
    setTamSelect(Mlist)

}
const theme = createTheme();


    return (
        <div className="container mt-5" >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>      
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {tam.map((card) => (
              
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >

                  <CardMedia
                    component="img"
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
                  <CardActions className="d-flex justify-content-center">
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