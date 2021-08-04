import React,{useState} from 'react'
import {Button,Input } from '@material-ui/core'
import Mk from './dinu.jpg'
const Home=() =>{
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
           {arrays.map(data=>(
               <li key={data.pid}>{data.pname} is {data.fname}'s child 
                      <img style={{margin:'100px'}} src={data.images} height='55'width="49"/></li>
           ))} 
           <Input type="file" accept="image/*">Choose</Input>
           <Button onClick={handleClick} color="primary" variant='contained' >this btn</Button>
        </div>
    )
}

export default Home
