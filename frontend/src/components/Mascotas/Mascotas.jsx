<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import Axios from 'axios'
=======
// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
>>>>>>> 415b2bc97a598d1b7e6443cffe231673a8574fcc
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
<<<<<<< HEAD
import dog1 from '../../assets/dog1.jpg'
const cards = [1, 2, 3, 4, 5, 6];
const theme = createTheme();

export default function TablaMascota() {


    const [mascotas, setMascotas] = useState([])
    const [idMascota, setIdMascota]= useState('')
    const [nombre, setNombre] = useState('')
    const [tamaño, setTamaño] = useState([])
    const [tamañoSelect, setTamañoSelect] = useState([])
    const [raza, setRaza] = useState('')
    // const [imagenMascota, setimagenMascota] = useState();




    

    useEffect(() => {

        obtenerMascotas()
        

    }, [])


    const obtenerMascotas = async () => {

        const res = await Axios.get('/mascota/list')

        console.log(res)



        

        setMascotas(res.data)
        
        
        // setNombre(res.data.nombre)
        // setTamañoSelect(res.data.tamaño)
        // setRaza(res.data.raza)
        // setimagenMascota(res.data.imagenMascota)

    }

    // const editarMascota = async(idParam)=>{

    //     setShow(true)
    //     const id = idParam
    //     const res = await Axios.get('/mascota/list/'+id)

    //     console.log(res.data)
    //     setIdMascota(res.data._id)
    //     setNombre(res.data.nombre)
    //     setTamañoSelect(res.data.tamaño)
    //     setRaza(res.data.raza)
    //     // setimagenMascota(res.data.imagenMascota)


    // }


    // const actualizar = async(e)=>{
    //     e.preventDefault();

    //     const id = idMascota
    //     const mascota= {

    //         idMascota,
    //         nombre,
    //         raza,
    //         tamaño: tamañoSelect

    //     }

        
    // }


    const data = mascotas.map((mascotas) => ({

        id: mascotas._id,
        nombre: mascotas.nombre,
        raza: mascotas.raza,
        tamaño: mascotas.tamaño,
        imagenMascota: mascotas.imagenMascota

      }))
      
       console.log(data.idMascota)
      



    
    return (

            
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-7  mx-auto">
                                <div className="card">
                                    <div className="container text-center fa-5x">
                                        <i className="fas fa-paw"></i>
                                    </div>
                                    <div className="card-header bg-light text-center">
                                        <h4>Editar Mascota</h4>
                                    </div>
                                    <div className="card-body">
                                        <form >
                                            <div className="row">

                                                <div className="col-md-6">
                                                    <label><strong>Nombre</strong></label>
                                                    <input type="text" className="form-control required" placeholder="Escribe el nombre de la mascota" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label><strong>Raza</strong></label>
                                                    <input type="text" className="form-control required" placeholder="Escribe la raza de la mascota" onChange={(e) => setRaza(e.target.value)} value={raza} />
                                                </div>
                                                <label className="mt-3"><strong>Tamaño</strong></label>
                                                <div className="col-md-12 form-floating">

                                                    <select className='form-select pb-2'
                                                        id="flotingSelectGrid"
                                                        aria-label="Floating label select example"
                                                        onChange={(e) => setTamañoSelect(e.target.value)} value={tamañoSelect}>

                                                        {
                                                            tamaño.map(tamaño => (
                                                                <option key={tamaño}>
                                                                    {tamaño}

                                                                </option>
                                                            ))


                                                        }
                                                    </select>
                                                    <label htmlFor="flotingSelectGrid">Escoge una Opción</label>
                                                </div>


                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="formFile" className="form-label"><strong>Ingresa la imagen de la mascota</strong></label>
                                                    <input type="file" className="form-control" id="formfile"/>

                                                </div>

                                            </div>
                                            <br />
                                            {/* <button type="submit" className="btn btn btn-success">

                                                <span className="fa fa-save"></span> Guardar
                                            </button> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ThemeProvider theme={theme}>
=======
import dog1 from '../../assets/dog1.jpeg'
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


const cards = tam;
const theme = createTheme();
const a = "http://localhost:3000"
const b= "/imagenMascota_1637805604995_luigi.jpeg"


    return (
        <div className="container mt-5" >
    <ThemeProvider theme={theme}>
>>>>>>> 415b2bc97a598d1b7e6443cffe231673a8574fcc
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
<<<<<<< HEAD
                      Heading
                      
=======
                      {card.nombre}
>>>>>>> 415b2bc97a598d1b7e6443cffe231673a8574fcc
                    </Typography>
                    <Typography>
                      {card.raza}
                      <br/>

                      {card.tamaño}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" >Adoptar!</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
<<<<<<< HEAD
                    </div>




    )


=======
    
    </div> 
    );
>>>>>>> 415b2bc97a598d1b7e6443cffe231673a8574fcc
}