import {ADDPRODUCT,GETPRODUCT,DELETEPRODUCT,UPDATEPRODUCT} from '../../constants/reducerConstants'
 
const productReducer=(state=[],action)=>{
        switch(action.type)
        {
            case GETPRODUCT:
                return action.payload;
            case ADDPRODUCT:
                return [...state,action.payload];
            case DELETEPRODUCT:
                return state.filter((product)=>product._id!==action.payload._id);
            case UPDATEPRODUCT:
                return state.map((product)=>(product._id===action.payload._id ? action.payload : product));
            default:
                return state;
        }
}


export default productReducer;