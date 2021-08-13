import React,{useState} from 'react'
import { Input,Button,Grid } from '@material-ui/core'
import Mk from '../../../../assets/dinu.jpg'
import './recent.css'

function Recent() {
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
        {pid:13,
            pname:'miki',
            fname:'mikis',
            images:Mk,
           },
        {pid:122,
            pname:'miki',
            fname:'mikis',
            images:Mk,
           },
        {pid:111,
            pname:'miki',
            fname:'mikis',
            images:Mk,
           },
        {pid:1221,
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
    const handleClick=()=>{
        
        let newarrays={pid:Math.random.apply(),pname:'hacker',fname:'manner'}
        let newarray=arrays.concat(newarrays)
        setArrays(newarray)
    }
    return (
        <div>
            <div className="recentDiv">
                <p className="recentTitle">Recent Products</p>
                <Grid container>
                    {arrays.map(data=>(
                        <Grid xs={12} sm={6} md={4} lg={3} item key={data.pid}>
                            <img alt={''} src={data.images} height='100'width="100"/>
                            <p className='itemTitle'>{data.pname}</p>
                            <p className='itemTitle'>{data.fname}</p>
                        </Grid>
                    ))} 
                    <Input type="file" accept="image/*">Choose</Input>
                    <Button onClick={handleClick} color="primary" variant='contained' >this btn</Button>
                </Grid>

            </div>
        </div>
    )
}

export default Recent
