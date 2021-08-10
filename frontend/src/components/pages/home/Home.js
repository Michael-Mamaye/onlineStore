import React,{useState,useEffect} from 'react'
import {Button,Input, makeStyles } from '@material-ui/core'
import useStyle from './style'
import MiniNav from '../../mini_nav/Nav'
import Recent from './homeGrids/Recent'
import "./home.css"
import UnderRecent from './homeGrids/UnderRecent'
import List from './homeGrids/List'
import axios from 'axios'

const Home=() =>{
    const classes=useStyle()
    const [state,setState]=useState([])

    useEffect(()=>{
       axios.get('/miki/api').then(res=>{
           console.log(res.data)
           setState(state,res.data)
       })
    },[])
    

    return (
        <div>
           <div className="homeBackground">
              <p className="bestDeals">Take Everything and Know How It Feels</p>
              <Button className={`btn ${classes.btns}`}>Create Account</Button>
           </div>
           <div style={{height:'200px',color:'black'}}>
               {state.map(customers=>{
                   <div key={customers.id}>
                        <p>{customers.name}</p>
                        <p>{customers.age}</p>
                        <p>{customers.title}</p>
                   </div>
               })}
           </div>
           <MiniNav/>
           <Recent/>
           <UnderRecent/>
           <List/>
        </div>
    )
}

export default Home
