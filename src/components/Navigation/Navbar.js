import { Container,Button, Link, TextField,Fab } from '@material-ui/core'
import React,{useState} from 'react'
import useStyles from "./Style.js"
import {ShoppingBasket,Search, ArrowUpward} from "@material-ui/icons"

import "./navbar.css"
function Navbar() {
    const classes=useStyles();
    const [Mike, setMike] = useState(false)
    const handleScroll=()=>
    {
        if(window.scrollY>400)
        {
            setMike(true)
        }
        else
        {
            setMike(false)
        }
    }
    const handleClick=()=>
    {
        window.scrollTo(0,0);
    }
   
    
    window.addEventListener('scroll',handleScroll)
    return (
        <div>
            <div className={Mike?classes.wholeNav2:classes.wholeNav}>
                <div className={classes.appBar}>
                    <div className={classes.navLinks}>
                        <Link className={classes.links}>Buy</Link>
                        <Link className={classes.links}>Sell</Link>
                        <Link className={classes.links}>about</Link>
                        <Link className={classes.links}>who</Link>
                    </div>
                    <div className={classes.searchBar}>
                        <input className="textfields"></input>
                        <span className="searchIcon"><Search/></span>
                    </div>
                    
                    <div className={`shopingCart ${classes.shopings}`}>
                   
                       <Link className={classes.loginLink} ><Button color='primary'variant='outlined'>Log In</Button></Link>
                        <ShoppingBasket style={{height:'30px',width:'30px'}}color="secondary"></ShoppingBasket>
                    
                    </div>
                    

                </div>
            </div>
            <span className={Mike?`moveTop ${classes.movetop}`:`moveTop2`}>
                <Fab  onClick={handleClick} style={{backgroundColor:'black'}}>
                    <ArrowUpward color="secondary"/>
                </Fab>
            </span>
            
        </div>
    )
}

export default Navbar
