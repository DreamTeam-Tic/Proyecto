//importar rutas
import {BrowserRouter as Router,Route} from 'react-router-dom'

import './App.css';
import Nabvar from './components/Home/Nabvar';

function App() {
  return (
    <div className="App">

      <h1>PetsForAlways</h1>
      <Router>
      <Nabvar/>

      {/* <Route path='/Formulario' exact component ={Formulario}/> */}
      <Route path='/' />
    </Router>
    

      
    </div>
  );
}

export default App;
