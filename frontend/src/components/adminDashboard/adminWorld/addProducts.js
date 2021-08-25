import { Container, Grid, Input, InputLabel } from '@material-ui/core'
import React,{useState} from 'react'
import UseStyles from './styles';
function addProducts() {
   const classes=UseStyles();
    return (
        <div>
           <Container className={classes.addProductsDiv}>
              
                <p>name</p>
                <input type='text'/>
                <p>brand</p>
                <input type='text'/>
                <p>Quantitiy</p>
                <input type='text'/>
                <p>Description</p>
                <input type='text'/>
                <p>Detail Description</p>
                <input type='text'/>
                <p>battery</p>
                <input type='text'/>
               
               
           </Container>
        </div>
    )
}

export default addProducts
