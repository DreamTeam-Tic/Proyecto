//importar rutas
import {BrowserRouter as Router,Route} from 'react-router-dom'

import './App.css';
import Footer from './components/Home/Footer';
import Nabvar from './components/Home/Nabvar';

function App() {
  return (
    <div className="App">

      <h1>PetsForAlways</h1>
      <Router>
      <Nabvar/>

 
      <Route path='/' />
     
    </Router>
    <Footer/>
    

      
    </div>
  );
}

export default App;
