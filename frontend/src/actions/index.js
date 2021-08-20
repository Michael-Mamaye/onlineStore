import {ADDPRODUCT,GETPRODUCT} from '../constants/reducerConstants'
import axios from 'axios'

export const addProduct =(product)=> async (dispatch)=>{
    try{
        dispatch({type:ADDPRODUCT})
    }
    catch(err){
        console.log('add product error',err)
    }
}
export const  getProduct=()=> async (dispatch)=>{
    try{
        const {data}=await axios.get('/products/create')
        
        dispatch({type:GETPRODUCT,payload:data.product})
    }
    catch(err){
        console.log('get product error',err)
    }
}
export const getProductByType=(type)=>async (dispatch)=>{
    try{
        const {data}=await axios.get(`/products/create?brand=${type}`)
        dispatch({type:GETPRODUCT,payload:data.product})
    }
    catch(err){
        console.log('get product error',err)
    }
}
