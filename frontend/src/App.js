import SectionTips from './components/Home/SectionTips.jsx'

//importar rutas
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Home/Footer';
import Nabvar from './components/Home/Nabvar';

function App() {
    return (
      <div className="App">

      <Router>
            <Nabvar/>
              <Route path='/' />
            </Router>
            <Footer/>
      <SectionTips/>
    </div>
  );
}

export default App;
