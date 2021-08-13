import React from 'react';
import Home from './components/pages/home/Home'
import Navbar from './components/Navigation/Navbar';
import './App.css';
import About from './components/pages/About/About'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Lists from './components/pages/lists/Lists';
import Contact from './components/pages/contact/Contact';
import Footer from './components/pages/footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
           <Navbar/>
           <Switch>
              <Route exact path="/" >
                  <Home/>
              </Route>
              <Route exact path="/about">
                  <About/>
              </Route>
              <Route exact path="/lists" >
                  <Lists/>
              </Route>
              <Route exact path="/contact" >
                  <Contact/>
              </Route>
           </Switch>
           <Footer/>
      </Router>
    </div>
  );
}

export default App;
