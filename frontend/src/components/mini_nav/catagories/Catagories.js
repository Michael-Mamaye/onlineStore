import React,{useState,useEffect} from 'react'
import { Grid,Button, Card, CardMedia, CardContent, CardActions, Dialog } from '@material-ui/core'
import MK from "../../../assets/dinu.jpg"
import './catagories.css'
import useStyles from './style'


const Catagories=({product})=> {
  
    const [open, setOpen] = React.useState(false);
    const classes=useStyles()
    const [selectedItem,setSelectedItem]=useState({})
   
    const handleClickOpen = (Id) => {
        let miki={};
        product.forEach(element => {
            if (element._id==Id)
            {
                miki=element;
            }
        });
        setSelectedItem(miki);
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
                            <Grid item key={data._id}xs={12} sm={6} md={4} lg={3}>
                                <Card style={{display:'flex',flexDirection:'column',justifyContent:'left',width:"90%", height:'400px'}}>
                                    <CardMedia image={MK} style={{width:"100%", height:'50%'}}></CardMedia>
                                    <CardContent>
                                        <p className={classes.contentNames}>{data.name} </p>
                                        <p className={classes.contentDescription}>{data.description}</p>
                                    </CardContent>
                                    <CardActions className={classes.cardactions}>
                                        <Button className={classes.buyBtn}> Buy Now </Button>
                                        <Button onClick={()=>{handleClickOpen(data._id)}} style={{marginLeft:'40px',}} className={classes.detailsBtn}> Details </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))} 
                    </Grid>
                    <p className="catagoriesSeeMore">See more</p>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        {
                                <div container key={selectedItem._id}xs={12} sm={6} md={4} lg={3}>
                                    
                                    <Card style={{display:'flex',flexDirection:'column',justifyContent:'left',width:"90%", height:'400px'}}>
                                        <CardMedia image={MK} style={{width:"100%", height:'50%'}}></CardMedia>
                                        <CardContent>
                                            <p className={classes.contentNames}>{selectedItem.name} </p>
                                            <p className={classes.contentDescription}>{selectedItem.description}</p>
                                        </CardContent>
                                        <CardActions className={classes.cardactions}>
                                            <Button className={classes.buyBtn}> Buy Now </Button>
                                            </CardActions>
                                    </Card>
                                </div>
                            } 
                    </Dialog>

            </div>

            
        </div>
    )
}

export default Catagories


