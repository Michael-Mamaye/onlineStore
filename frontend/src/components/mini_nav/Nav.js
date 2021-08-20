import React,{useEffect} from 'react'
import Catagories from './catagories/Catagories'
import './nav.css'
import { getProduct,getProductByType } from '../../actions'
import { useDispatch,useSelector } from 'react-redux'

function Nav() {
    const product = useSelector(state => state.productReducer)
   
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(getProduct())
    },[])
    console.log('this is',product)
    const handleSelected=(whatIsIt)=>
    {
       if(whatIsIt=='allProduct'){dispatch(getProduct())}
       else if (whatIsIt == 'electronics') {dispatch(getProductByType('redmi'))}
       else if (whatIsIt == 'suit') {dispatch(getProductByType('samsung'))}
       else if (whatIsIt == 'house') {dispatch(getProductByType('oppo'))}
       else if (whatIsIt == 'cars') {dispatch(getProductByType('xiaomi'))}
       else if (whatIsIt == 'bike') {}
       else if (whatIsIt == 'Others') {}
    }
  
    return (
        <div>
             <div className='miniNavWhole'>
                  <p onClick={()=>{handleSelected('allProduct')}} name='all' className='miniNavs'>All Products</p>
                  <p onClick={()=>{handleSelected('electronics')}} className='miniNavs'>Electronics</p>
                  <p onClick={()=>{handleSelected('suit')}} className='miniNavs'>Suit</p>
                  <p onClick={()=>{handleSelected('house')}} className='miniNavs'>House</p>
                  <p onClick={()=>{handleSelected('cars')}} className='miniNavs'>Cars</p>
                  <p onClick={()=>{handleSelected('bike')}} className='miniNavs'>Bike</p>
                  <p onClick={()=>{handleSelected('Others')}} className='miniNavs'>Others</p>
             </div>
             <Catagories product={product}/>
        </div>
    )
}

export default Nav
