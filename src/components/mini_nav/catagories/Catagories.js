import React,{useState} from 'react'
import { Grid,Input,Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core'
import Mk from '../../assets/dinu.jpg'
import './catagories.css'

function Catagories() {
    const [arrays,setArrays]=useState([
        {pid:1,
         pname:'miki',
         fname:'mikis',
         images:Mk,
        },
        {pid:12,
            pname:'miki',
            fname:'mikis',
            images:Mk,
           },
        {pid:2,
            pname:'afski',
            fname:'asdis',
            images:Mk,
           }, 
        {pid:3,
            pname:'adfsadsf',
            fname:'mafadsfdfsakis',
            images:Mk,
           }
        
    ])
    return (
        <div>
            <div className="catagoriesDiv">
                <Grid container spacing={3}>
                        {arrays.map(data=>(
                            <Grid xs={12} sm={6} md={4} lg={3} item key={data.pid}>
                                <Card style={{width:"90%", height:'400px'}}>
                                    <CardMedia image={data.images} style={{width:"100%", height:'50%'}}></CardMedia>
                                    <CardContent>{data.pname}</CardContent>
                                    <CardActions>{data.fname}</CardActions>
                                </Card>
                            </Grid>
                        ))} 
                    </Grid>
            </div>
        </div>
    )
}

export default Catagories
