//importar rutas

import {BrowserRouter as Router, Route} from "react-router-dom";


import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar.jsx";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login.jsx"
import Mascotas from './components/Mascotas/Mascotas.jsx'
import Servicios from "./components/Servicios/Servicios.jsx"
import HomeAdmin from "./private/HomeAdmin.jsx"
import CrearMascota from "./private/CrearMascota.jsx"
import CrearServicio from "./private/CrearServicio.jsx"
import PrivateRouter from './Routes/PrivateRouter.jsx'






function App() {
  return (
    <div className="App">

      
        <Nabvar />
      <Router>
        
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/mascotas" exact component={Mascotas}/>
        <PrivateRouter exact path="/homeadmin" exact component={HomeAdmin}/>
        <PrivateRouter exact path="/crearmascota" exact component={CrearMascota}/>
        <PrivateRouter exact path="/crearservicio" exact component={CrearServicio}/>
        
        </Router>
      
      <Footer />
      
    </div>
  )
}

export default App;
