
import React,{useState,useEffect} from 'react'
import { Grid,Input,Button, Card, CardMedia, CardContent, CardActions, Dialog } from '@material-ui/core'
import Mk from '../../../../assets/dinu.jpg'
import './list.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useStyles from './style'



function List() {
    const classes=useStyles()
    const [arrays,setArrays]=useState([
        {pid:1,
         pname:'Samsung',
         fname:'S21 ultra',
         description:'lorem ipsum capcha test is nothing it just makes u bored',
         images:Mk,
        },
        {pid:12,
            pname:'miki',
            fname:'mikis',
            description:'lorem ipsum capcha test is nothing it just makes u bored',
            images:Mk,
           },
        {pid:2,
            pname:'afski',
            fname:'asdis',
            description:'lorem ipsum capcha test is nothing it just makes u bored',
            images:Mk,
           }, 
        {pid:3,
            pname:'adfsadsf',
            fname:'mafadsfdfsakis',
            description:'lorem ipsum capcha test is nothing it just makes u bored',
            images:Mk,
           }
        
    ])
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(()=>{ 
        Aos.init({duration:2000})
    })
    const [arr2,setArr2]=useState(arrays)
    const handleSeeMore=()=>{
        setArrays(arrays.concat(arr2));
    }
    return (
        <div>
            <div>
                <p className="listSelectTitle">Select Your Favorite and Buy</p>
            </div>
            <hr style={{opacity:'0.6'}}/>
            <div className="listDiv">
                <Grid container spacing={3}>
                        {arrays.map(data=>(
                            <Grid data-aos='fade-left' lg={12} item key={data.pid}>
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
                    <p onClick={handleSeeMore}className="catagoriesSeeMore">See more</p>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                       <div style={{height:'100px',width:'100px'}}>
                            
                       </div>
                    </Dialog>
            </div>
            <hr style={{opacity:'0.6'}}/>
        </div>
    )
}

export default List


