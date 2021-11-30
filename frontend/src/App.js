//importar rutas

import {BrowserRouter as Router, Route} from "react-router-dom";


import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar.jsx";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login.jsx"
import Mascotas from './components/Mascotas/Mascotas.jsx'
import Galeria from './components/Mascotas/Galeria'
import Servicios from "./components/Servicios/Servicios.jsx"
import HomeAdmin from "./private/HomeAdmin.jsx"
import CrearMascota from "./private/CrearMascota.jsx"
import CrearServicio from "./private/CrearServicio.jsx"
import PrivateRouter from './Routes/PrivateRouter.jsx'

import Donaciones from "./components/Donaciones/Donaciones";
import Contactanos from "./components/Contactanos/Contactanos.jsx";

import Formulario from "./components/Servicios/Formulario.jsx";
import Nosotros from './components/Nosotros/Nosotros.jsx';
import TablaMascota from "./private/TablaMascota";
import FormularioAdopta from "./components/Servicios/FormularioAdopta";
import Whatsapp from './components/icono/Whatsapp.jsx';

function App() {
  return (
    <div className="App">

      
        <Nabvar />
      <Router>
        
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/mascotas" exact component={Mascotas}/>
        {/* <Route path="/mascotas2" exact component={Mascotas}/> */}
        <PrivateRouter  path="/homeadmin" exact component={HomeAdmin}/>
        <PrivateRouter  path="/crearmascota" exact component={CrearMascota}/>
        <PrivateRouter  path="/crearservicio" exact component={CrearServicio}/>
        <PrivateRouter  path="/tablamascota" exact component={TablaMascota}/>
        <Route path="/nosotros" exact component={Nosotros}/>
        <Route path="/donaciones" exact component={Donaciones}/>
        <Route path="/contactanos" exact component={Contactanos}/>
        <Route path="/servicios" exact component={Servicios}/>
        <Route path="/formulario" exact component={Formulario}/>
        <Route path="/icono" exact component={Whatsapp}/>
        <Route path="/formularioadopta" exact component={FormularioAdopta}/>
      </Router>
    <Whatsapp /> 
    <Footer />
  </div>
  )
}

export default App;
