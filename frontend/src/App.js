//importar rutas
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login.jsx"

import Donaciones from "./components/Donaciones/Donaciones"
import Contactanos from "./components/Contactanos/Contactanos.jsx"

import Servicios from "./components/Servicios/Servicios.jsx"
import Formulario from "./components/Servicios/Formulario.jsx"
import Nosotros from './components/Nosotros/Nosotros.jsx'


function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/> 
        

        <Route path="/donaciones" exact component={Donaciones}/>
        <Route path="/contactanos" exact component={Contactanos}/>
        
        </Router>
      <Footer />
      
    </div>
  )
}

export default App;
