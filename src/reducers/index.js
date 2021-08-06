import { combineReducers } from "redux";
import postReducer from './reducers/postReducer.js'
import loginReducer from './reducers/loginReducer.js'


const allReducer= combineReducers({
    posts:postReducer,
    isLogged:loginReducer
})

export default allReducer;