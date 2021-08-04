import React,{useState} from 'react'
import Catagories from './catagories/Catagories'
import './nav.css'

function Nav() {
   
    return (
        <div>
             <div className='miniNavWhole'>
                  <p className='miniNavs'>All Products</p>
                  <p className='miniNavs'>Electronics</p>
                  <p className='miniNavs'>Suit</p>
                  <p className='miniNavs'>House</p>
                  <p className='miniNavs'>Cars</p>
                  <p className='miniNavs'>Bike</p>
                  <p className='miniNavs'>Others</p>
             </div>
             <Catagories/>
        </div>
    )
}

export default Nav
