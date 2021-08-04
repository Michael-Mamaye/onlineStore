import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navigation/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
