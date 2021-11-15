//importar rutas
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Home/Footer";
import Nabvar from "./components/Home/Nabvar";
import SectionTips from "./components/Home/SectionTips.jsx";
import SectionReq from "./components/Home/SectionReq"
import Carrusel from '../src/components/Home/Carrusel';


function App() {
  return (
    <div className="App">
      <Router>
        <Nabvar />
        <Route path="/" />
        <Route path="/" exact component={Carrusel}/>
        <Route path="/" exact component={SectionTips}/>
        <Route path="/" exact component={SectionReq}/>
        </Router>
      <Footer />
      
    </div>
  )
}

export default App;
