import {LOGGED} from '../../constants/reducerConstants'

const isLogged = (state=false,action)=>{
    switch(action.type)
    {
        case LOGGED:
           return state=true;
        default:
            return state;
    }
}


export default isLogged