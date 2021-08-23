import {ADDPRODUCT,DELETEPRODUCT,GETPRODUCT, UPDATEPRODUCT} from '../constants/reducerConstants'
import axios from 'axios'

export const addProduct =(product)=> async (dispatch)=>{
    try{
        await axios.post('/products/create',product)
        const {data}=await axios.get('/products/create')
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
export const updateProduct =(id,updatedProduct)=>async(dispatch)=>{
    try{
        await axios.patch(`/products/create/${id}`,updatedProduct);
        dispatch({type:UPDATEPRODUCT})
    }
    catch(err){
        console.log('update product error',err)
    }
}
export const deleteProduct =(id)=>async(dispatch)=>{
    try{
        await axios.delete(`/products/create/${id}`);
        dispatch({type:DELETEPRODUCT})
    }
    catch(err){
        console.log('delete product error',err)
    }
}
