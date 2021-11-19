//importar rutas
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login.jsx"
import Servicios from "./components/Servicios/Servicios.jsx"


function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/servicios" exact component={Servicios}/>
        
        </Router>
      <Footer />
      
    </div>
  )
}

export default App;
