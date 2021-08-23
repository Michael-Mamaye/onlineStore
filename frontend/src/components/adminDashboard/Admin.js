import React, { useState } from 'react'
import styles from './style'
import { Drawer, Fab } from '@material-ui/core';
import {Link,Route, withRouter} from 'react-router-dom'
import Lists from '../pages/home/homeGrids/List';
import Addproduct  from './adminWorld/addProducts';
import {Menu} from '@material-ui/icons'
function Admin() {
    const [open, setOpen]=useState(true)
   
    const classes=styles();
    const [comp,setComp]=useState();

    const handleDrawer=()=>{
        setOpen(!open)
    }
   function renderCom(){
       switch(comp){
           case "Add":
               return <div><Addproduct/></div>
            case "Delete":
                return <div><Addproduct/></div>
            default:
                return 
       }
   }
    return (
        <div>
            {/*  */}
            <Fab style={{marginLeft:'100px',position:'absolute',marginLeft:'10px',left:'10px',zIndex:'-moz-initial'}}><Menu/></Fab>
            <Drawer open={open} variant='persistent'>
                <div className={classes.adminDiv}>
                    <div className={classes.adminDrawer}>
                        <ul className={classes.adminMenus}>
                            <li className={classes.lists} 
                               onClick={()=>{setComp("Add")}}>
                                    ADD PRODUCT </li>
                            <li className={classes.lists} 
                                onClick={()=>{setComp("Del")}}>
                                UPDATE PRODUCT </li>
                            <li className={classes.lists} 
                                onClick={()=>{setComp("Del")}}>
                                DELETE PRODUCT </li>
                            <li className={classes.lists}  
                               onClick={()=>{setComp("Del")}}>
                                PROFILE </li>
                        </ul>
                    </div>
                    <div className={classes.adminContent}>
                            {renderCom()}
                    </div>
                </div>
            </Drawer>
        </div>
    )
}


export default Admin;
