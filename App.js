import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import Adduser from './components/pages/Adduser';
import Edituser from './components/pages/Edituser';
import View from './components/pages/View';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/adduser' Component={Adduser} />
        <Route exact path='/edituser/:id' Component={Edituser} />
        <Route exact path='/view/:id' Component={View} />
        <Route Component={Notfound} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
