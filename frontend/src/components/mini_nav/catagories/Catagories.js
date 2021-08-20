import React,{useState,useEffect} from 'react'
import { Grid,Button, Card, CardMedia, CardContent, CardActions, Dialog } from '@material-ui/core'
import MK from "../../../assets/dinu.jpg"
import './catagories.css'
import useStyles from './style'
import { getProduct } from '../../../actions'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'

const Catagories=()=> {
   const product = useSelector(state => state.productReducer)
   
    const dispatch = useDispatch(getProduct());
    

    useEffect(()=>{
    //    axios.get('/products/create').then(res=>{
    //        console.log(res.data);
    //        setproduct(res.data.product)
    //    })
        dispatch(getProduct())
       
     
    },[])
    console.log('this is',product)
    const classes=useStyles()
    
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handledispatch=()=>{
        
    }
    
    return (
        <div>

            <div className="catagoriesDiv">
                <div onClick={handledispatch}>mshadfsdfdsfds</div>
                <Grid container spacing={3}>
                        {product.map(data=>(
                            <Grid item key={data._id}xs={12} sm={6} md={4} lg={3}>
                                <Card style={{display:'flex',flexDirection:'column',justifyContent:'left',width:"90%", height:'400px'}}>
                                    <CardMedia image={MK} style={{width:"100%", height:'50%'}}></CardMedia>
                                    <CardContent>
                                        <p className={classes.contentNames}>{data.name} </p>
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


