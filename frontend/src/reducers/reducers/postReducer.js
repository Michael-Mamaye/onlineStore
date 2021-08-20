import {ADDPRODUCT,GETPRODUCT,DELETEPRODUCT,UPDATEPRODUCT} from '../../constants/reducerConstants'
 
const productReducer=(state=[],action)=>{
        switch(action.type)
        {
            case GETPRODUCT:
                return action.payload;
                    console.log(action.payload)

            case ADDPRODUCT:
                return action.payload;
            case DELETEPRODUCT:
                return state;
            case UPDATEPRODUCT:
                return action.payload;
            default:
                return state;
        }
}


export default productReducer;