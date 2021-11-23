//importar rutas
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login.jsx"
import Donaciones from "./components/Donaciones/Donaciones"
import Nosotros from "./components/Nosotros/Nosotros";


function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        
        <Route path="/" exact component={Home}/>
        <Route path="/nosotros" exact component={Nosotros}/>
        
        <Route path="/login" exact component={Login}/>
        <Route path="/donaciones" exact component={Donaciones}/>
                
        </Router>
      <Footer />
      
    </div>
  )
}

export default App;
