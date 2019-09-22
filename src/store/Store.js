import {createStore, combineReducers} from 'redux';
import listReducer from './../reducers/listReducer'

const reducers = {
  list: listReducer
}

const store = createStore( combineReducers(reducers) );
export default store