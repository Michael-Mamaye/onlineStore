import React,{useState} from 'react'
import { Grid,Input,Button, Card, CardMedia, CardContent, CardActions, Dialog } from '@material-ui/core'
import Mk from '../../../assets/dinu.jpg'
import './catagories.css'
import useStyles from './style'
import UniqueId from 'react-html-id'
import {useSelector,useDispatch} from 'react-redux'
import newPost from '../../../actions'

function Catagories() {
   const posts = useSelector(state => state.posts)
   const logging = useSelector(state=>state.isLogged)
   const dispatch = useDispatch();
    const classes=useStyles()
    const handlelogin=()=>{
        if(logging)
        {
            return(
                <p>the user is logged in</p>
            )
        }
        else
        {
            return(
                <p>the user is not logged in</p>
            )
        }
    }
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
                        {posts.map(data=>(
                            <Grid xs={12} sm={6} md={4} lg={3} item>
                                <Card style={{display:'flex',flexDirection:'column',justifyContent:'left',width:"90%", height:'400px'}}>
                                    <CardMedia image={data.images} style={{width:"100%", height:'50%'}}></CardMedia>
                                    <CardContent>
                                        <p className={classes.contentNames}>{data.pname} {data.fname}</p>
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
                    <p onClick={dispatch(newPost)}className="catagoriesSeeMore">See more</p>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                       <div style={{height:'100px',width:'100px'}}>
                            
                       </div>
                    </Dialog>

                    <p onClick={handlelogin}>sdfaadfs   </p>
            </div>

            
        </div>
    )
}

export default Catagories


