import React from 'react';
import Home from './components/pages/home/Home'
import Navbar from './components/Navigation/Navbar';
import './App.css';
import About from './components/pages/About/About'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Lists from './components/pages/lists/Lists';
import Contact from './components/pages/contact/Contact';
import Footer from './components/pages/footer/Footer';
import Admin from './components/adminDashboard/Admin'

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
              <Route exact path="/about">
                  <Navbar/>
                  <About/>
                  <Footer/>
              </Route>
              <Route exact path="/list" >
                  <Navbar/>
                  {/* <Lists/> */}
                  <Home/>
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
