import React,{useState,useEffect} from 'react'
import { Grid,Button, Card, CardMedia, CardContent, CardActions, Dialog } from '@material-ui/core'

import './catagories.css'
import useStyles from './style'

import axios from 'axios'


const Catagories=()=> {
    const [product,setproduct]=useState([])

    useEffect(()=>{
       axios.get('/products/create').then(res=>{
           console.log(res.data);
           setproduct(res.data.product)
       })
    },[])
  
    const classes=useStyles()
    
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  
    
    return (
        <div>
            <div className="catagoriesDiv">
                <Grid container spacing={3}>
                        {product.map(data=>(
                            <Grid xs={12} sm={6} md={4} lg={3} item>
                                <Card style={{display:'flex',flexDirection:'column',justifyContent:'left',width:"90%", height:'400px'}}>
                                    <CardMedia image={data.images} style={{width:"100%", height:'50%'}}></CardMedia>
                                    <CardContent>
                                        <p className={classes.contentNames}>{data.name} {data.fname}</p>
                                        <p className={classes.contentDescription}>{data.description}</p>
                                    </CardContent>
                                    <CardActions className={classes.cardactions}>
                                        <Button className={classes.buyBtn}> Buy Now </Button>
                                        <Button onClick={handleClickOpen} style={{marginLeft:'40px',}} className={classes.detailsBtn}> Details </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))} 
                    </Grid>
                    <p className="catagoriesSeeMore">See more</p>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                       <div style={{height:'100px',width:'100px'}}>
                            
                       </div>
                    </Dialog>

            </div>

            
        </div>
    )
}

export default Catagories


