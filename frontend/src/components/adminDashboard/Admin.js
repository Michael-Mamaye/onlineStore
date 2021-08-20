import React from 'react'
import styles from './style'
import { Drawer } from '@material-ui/core';
import {Link,Route, withRouter} from 'react-router-dom'
import Lists from '../pages/home/homeGrids/List';
function Admin(props) {
    const {history}=props
    const classes=styles();
    const [comp,setComp]=React.useState('Add');
   function renderCom(){
       switch(comp){
           case "Add":
               return 
            case "Delete":
                return 
                
                ;
       }
   }
    return (
        <div>
            {/*  */}
            <Drawer open variant='persistent'>
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
                    <div className={classes.admincontent}>
                            {renderCom()}
                    </div>
                </div>
            </Drawer>
        </div>
    )
}


export default withRouter(Admin);
