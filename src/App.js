import React from 'react';
import Home from './components/pages/home/Home'
import Navbar from './components/Navigation/Navbar';
import './App.css';
import About from './components/pages/about/About'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
           <Navbar/>
           <Switch>
              <Route path="/" exact>
                  <Home/>
              </Route>
              <Route exact path="/contact">
                  <About/>
              </Route>
              
           </Switch>
      </Router>
    </div>
  );
}

export default App;
