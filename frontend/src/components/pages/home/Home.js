import React from 'react'
import {Button } from '@material-ui/core'
import useStyle from './style'
import MiniNav from '../../mini_nav/Nav'
import { Link } from 'react-router-dom'
import "./home.css"
import OurQuality from './homeGrids/OurQuality'
import List from './homeGrids/List'


const Home=() =>{
    const classes=useStyle()
  
    

    return (
        <div>
           <div className="homeBackground">
              <p className="bestDeals">Take Everything and Know How It Feels</p>
              <Link to='/register' style={{textDecoration:'none'}}><Button className={`btn ${classes.btns}`}
              
              >Create Account</Button></Link>
           </div>
           <MiniNav/>
           <OurQuality/>
           <List/>
        </div>
    )
}

export default Home
