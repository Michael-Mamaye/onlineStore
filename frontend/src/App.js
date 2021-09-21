import React from 'react';
import Home from './components/pages/home/Home'
import Navbar from './components/Navigation/Navbar';
import './App.css';
import About from './components/pages/About/About'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Contact from './components/pages/contact/Contact';
import Footer from './components/pages/footer/Footer';
import Admin from './components/adminDashboard/Admin'
import Login from './components/login/Login';
import Register from './components/register/Register';


function App() {
  return (
    <div className="App">
      <Router>
           
           <Switch>
              <Route exact path="/" >
                  <Navbar/>
                  <Home/>
                  <Footer/>
              </Route>
              <Route exact path="/login" >
                  <Navbar/>
                  <Login/>
                  <Footer/>
              </Route>
              <Route exact path="/register" >
                  <Navbar/>
                  <Register/>
                  <Footer/>
              </Route>
              <Route exact path="/about">
                  <Navbar/>
                  <About/>
                  <Footer/>
              </Route>
              <Route exact path="/about">
                  <Navbar/>
                  <cartItems/>
                  <Footer/>
              </Route>
             
              <Route exact path="/newproducts" >
                  <Navbar/>
                  <Contact/>
                  <Footer/>
              </Route>
              <Route exact path="/admin">
                <Admin/>
              </Route>
           </Switch>
           
      </Router>
    </div>
  );
}

export default App;
