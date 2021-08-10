import React,{useState} from 'react'
import {Button,Input, makeStyles } from '@material-ui/core'
import useStyle from './style'
import MiniNav from '../../mini_nav/Nav'
import Recent from './homeGrids/Recent'
import "./home.css"
import UnderRecent from './homeGrids/UnderRecent'
import List from './homeGrids/List'

const Home=() =>{
    const classes=useStyle()
    return (
        <div>
           <div className="homeBackground">
              <p className="bestDeals">Take Everything and Know How It Feels</p>
              <Button className={`btn ${classes.btns}`}>Create Account</Button>
           </div>
           <MiniNav/>
           <Recent/>
           <UnderRecent/>
           <List/>
        </div>
    )
}

export default Home
