//importar rutas
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar";
import Home from "./components/Home/Home"



function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        
        <Route path="/" exact component={Home}/>
        {/* <Route path="/mascotas" component={Mascotas}/>
        <Route path="/servicios" component={Servicios}/>
        <Route path="/donaciones" component={Donaciones}/>
        <Route path="/nosotros" component={Nosotros}/>
        <Route path="/contactanos" component={Contactanos}/> */}
        
        </Router>
      <Footer />
      
    </div>
  )
}

export default App;
