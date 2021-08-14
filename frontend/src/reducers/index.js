import {combineReducers} from 'redux'
import productReducer from './reducers/postReducer'
import isLogged from './reducers/isLogged'

export const allReducers=combineReducers({productReducer,isLogged})