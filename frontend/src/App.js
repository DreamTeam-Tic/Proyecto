//importar rutas
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar";
import SectionTips from "./components/Home/SectionTips.jsx";
import SectionReq from "./components/Home/SectionReq"
import Carrusel from '../src/components/Home/Carrusel';
import Home from "./components/Home/Home"


function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        
        <Route path="/" exact component={Home}/>
        
        </Router>
      <Footer />
      
    </div>
  )
}

export default App;
