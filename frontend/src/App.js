//importar rutas
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login.jsx"

import Donaciones from "./components/Donaciones/Donaciones"
<<<<<<< HEAD
import Nosotros from "./components/Nosotros/Nosotros";
=======
import Contactanos from "./components/Contactanos/Contactanos.jsx"

import Servicios from "./components/Servicios/Servicios.jsx"
import Formulario from "./components/Servicios/Formulario.jsx"
import Nosotros from './components/Nosotros/Nosotros.jsx'
>>>>>>> 1ee6ae178fb616bb2de9a628e0371677b30b570e


function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        
        <Route path="/" exact component={Home}/>
<<<<<<< HEAD
        <Route path="/nosotros" exact component={Nosotros}/>
        
        <Route path="/login" exact component={Login}/>
=======
        <Route path="/login" exact component={Login}/> 
>>>>>>> 1ee6ae178fb616bb2de9a628e0371677b30b570e
        <Route path="/donaciones" exact component={Donaciones}/>
        <Route path="/contactanos" exact component={Contactanos}/>
        <Route path="/servicios" exact component={Servicios}/>
        <Route path="/formulario" exact component={Formulario}/>
        <Route path="/Nosotros" exact component={Nosotros}/>
        
        </Router>
      <Footer />
      
    </div>
  )
}

export default App;
