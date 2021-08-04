import React,{useState} from 'react'
import { Grid,Input,Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core'
import Mk from '../../assets/dinu.jpg'
import './catagories.css'
import useStyles from './style'
function Catagories() {
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
    return (
        <div>
            <div className="catagoriesDiv">
                <Grid container spacing={3}>
                        {arrays.map(data=>(
                            <Grid xs={12} sm={6} md={4} lg={3} item key={data.pid}>
                                <Card style={{display:'flex',flexDirection:'column',justifyContent:'left',width:"90%", height:'400px'}}>
                                    <CardMedia image={data.images} style={{width:"100%", height:'50%'}}></CardMedia>
                                    <CardContent>
                                        <p className={classes.contentNames}>{data.pname} {data.fname}</p>
                                        <p className={classes.contentDescription}>{data.description}</p>
                                    </CardContent>
                                    <CardActions className={classes.cardactions}>
                                        <Button className={classes.buyBtn}> Buy Now </Button>
                                        <Button style={{marginLeft:'40px',}} className={classes.detailsBtn}> Details </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))} 
                    </Grid>
            </div>
        </div>
    )
}

export default Catagories
